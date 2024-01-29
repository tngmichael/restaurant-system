import { Module } from 'framework/dist/nestjs/common';
import { KitchenController } from './kitchen.controller';
import { KitchenService } from './kitchen.service';

@Module({
  imports: [],
  controllers: [KitchenController],
  providers: [KitchenService],
})
export class KitchenModule {}
