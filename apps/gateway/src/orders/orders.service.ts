import { Inject, Injectable, Logger } from 'framework/dist/nestjs/common';
import { ClientProxy, RpcException } from 'framework/dist/nestjs/microservices';
import {
  catchError,
  firstValueFrom,
  throwError,
  timeout,
} from 'framework/dist/rxjs';
import { CreateOrderDto, IEventType } from '@restaurant-system/shared';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(@Inject('ORDER_BUS') private client: ClientProxy) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<string> {
    this.logger.debug(
      `${IEventType.CREATE_ORDER} requested by ${createOrderDto.customerEmail}`,
    );
    return firstValueFrom(
      this.client
        .send(IEventType.CREATE_ORDER, createOrderDto)
        .pipe(timeout(10000))
        .pipe(
          catchError((error) =>
            throwError(() => new RpcException(error.response)),
          ),
        ),
    );
  }

  // or use websocket
  async getOrderStatus(
    orderId: string,
    customerEmail: string,
  ): Promise<string> {
    this.logger.debug(`${IEventType.GET_ORDER_STATUS} requested by`);
    return firstValueFrom(
      this.client
        .send(IEventType.GET_ORDER_STATUS, { orderId, customerEmail })
        .pipe(timeout(5000))
        .pipe(
          catchError((error) =>
            throwError(() => new RpcException(error.response)),
          ),
        ),
    );
  }
}
