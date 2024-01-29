import { Module } from 'framework/dist/nestjs/common';
import { APP_FILTER } from 'framework/dist/nestjs/core';
import { CommonModule } from './common/common.module';
import { InternalServerErrorFilter } from './core/internal-server-error.filter';
import { RpcExceptionFilter } from './core/rpc-exception.filter';
import { ValidationExceptionFilter } from './core/validation-exception.filter';
import { MenusModule } from './menus/menus.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CommonModule, MenusModule, OrdersModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: RpcExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
  ],
})
export class AppModule {}
