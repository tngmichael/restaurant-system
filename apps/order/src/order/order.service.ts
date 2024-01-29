import { wrap } from '@mikro-orm/core';
import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';

import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from 'framework/dist/nestjs/common';
import { ClientProxy, RpcException } from 'framework/dist/nestjs/microservices';
import { CreateOrderDto, IEventType } from '@restaurant-system/shared';
import { Menu } from '../entities/menu.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Order, OrderStatus } from '../entities/order.entity';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: EntityRepository<Order>,
    private readonly _em: EntityManager,
    @Inject('ORDER_CONFIRMATION_BUS')
    private readonly orderConfirmationBus: ClientProxy,
    @Inject('ORDER_PROCESS_BUS') private readonly orderProcessBus: ClientProxy,
  ) {}

  private get em(): EntityManager {
    return this._em.fork();
  }

  public async createOrder(createOrderDto: CreateOrderDto): Promise<string> {
    this.logger.debug(`${IEventType.CREATE_ORDER} requested by`);
    const em = this.em;

    const order = new Order(
      createOrderDto.customerEmail,
      createOrderDto.tableNumber,
    );
    await em.persist(order); // implicitly in transaction

    for (const item of createOrderDto.items) {
      const menu = await em.findOneOrFail(Menu, item.menuId);
      const orderItem = em.create(OrderItem, {
        order,
        menu,
        quantity: item.quantity,
      });
      order.items.add(orderItem);
    }
    await em.flush();

    const payload = wrap(order).toJSON();
    this.orderConfirmationBus.send('order.confirmation', payload).subscribe({
      error: (error) => {
        this.logger.error(
          `${IEventType.SEND_EMAIL_ORDER_FROM_CUSTOMER}: ${error.message}`,
        );
      },
    });
    this.orderProcessBus.send('order.process', payload).subscribe({
      complete: () => {
        order.status = OrderStatus.PROCESSED;
        em.flush();
      },
      error: (error) => {
        this.logger.error(`${IEventType.PROCESS_ORDER}: ${error.message}`);
      },
    });

    return order.id;
  }

  async getOrderStatus(
    orderId: string,
    customerEmail: string,
  ): Promise<string> {
    this.logger.debug(`${IEventType.GET_ORDER_STATUS} requested by`);
    const order = await this.em.findOneOrFail(Order, orderId);
    // couldn't get it works, the repository still using global EM
    // const order = await this.orderRepository.findOneOrFail(orderId);

    if (order.customerEmail !== customerEmail) {
      // or use filter to catch http exception
      throw new RpcException(
        new UnauthorizedException('Unauthorized access to order status'),
      );
    }

    return order.status;
  }
}
