import { MikroOrmModule } from '@mikro-orm/nestjs';

import { CommonModule, createClientProxy } from 'framework';
import { Module } from 'framework/dist/nestjs/common';
import { Order } from '../entities/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [CommonModule, MikroOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [
    createClientProxy('ORDER_CONFIRMATION_BUS', 'order.confirmation'),
    createClientProxy('ORDER_PROCESS_BUS', 'order.process'),
    OrderService,
  ],
})
export class OrderModule {}
