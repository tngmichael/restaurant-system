import { createClientProxy } from 'framework';
import { Global, Module } from 'framework/dist/nestjs/common';
import { ConfigModule } from 'framework/dist/nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [createClientProxy('ORDER_BUS', 'order')],
  exports: ['ORDER_BUS'],
})
export class CommonModule {}
