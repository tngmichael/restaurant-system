import { Controller } from 'framework/dist/nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from 'framework/dist/nestjs/microservices';
import { KitchenService } from './kitchen.service';

@Controller()
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService) {}

  @MessagePattern('order.process')
  async processOrder(@Payload() payload: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    await this.kitchenService.processOrder(payload);
    channel.ack(originalMsg);
  }
}
