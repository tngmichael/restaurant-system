import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import {
  Body,
  Controller,
  Get,
  Post,
  Query,
} from 'framework/dist/nestjs/common';
import { CreateOrderDto } from '@restaurant-system/shared';
import { CreateOrderRo } from './dto/create-order.ro';
import { GetOrderStatusRo } from './dto/get-order-status.ro';
import { OrdersService } from './orders.service';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  // TODO simple guard
  @Post()
  @ApiCreatedResponse({
    type: CreateOrderRo,
    description: 'Place an order',
  })
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<CreateOrderRo> {
    const id = await this.ordersService.createOrder(createOrderDto);
    return {
      message: 'create_order_success',
      data: {
        id,
      },
      errors: null,
    };
  }

  @Get('/status')
  @ApiOkResponse({
    type: GetOrderStatusRo,
    description: 'Track the status of the order',
  })
  async getOrderStatus(
    @Query('orderId') orderId: string,
    @Query('customerEmail') customerEmail: string,
  ): Promise<GetOrderStatusRo> {
    const status = await this.ordersService.getOrderStatus(
      orderId,
      customerEmail,
    );
    return {
      message: 'get_order_status_success',
      data: {
        status,
      },
      errors: null,
    };
  }
}
