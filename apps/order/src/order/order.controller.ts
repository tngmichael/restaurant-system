import { Controller } from 'framework/dist/nestjs/common';
import { MessagePattern, Payload } from 'framework/dist/nestjs/microservices';
import { CreateOrderDto, IEventType } from '@restaurant-system/shared';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern(IEventType.CREATE_ORDER)
  createOrder(@Payload() createOrderDto: CreateOrderDto): Promise<string> {
    return this.orderService.createOrder(createOrderDto);
  }

  @MessagePattern(IEventType.GET_ORDER_STATUS)
  getOrderStatus(
    @Payload() payload: { orderId: string; customerEmail: string },
  ): Promise<string> {
    return this.orderService.getOrderStatus(
      payload.orderId,
      payload.customerEmail,
    );
  }
}
