import { Controller } from 'framework/dist/nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from 'framework/dist/nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern('order.confirmation')
  async sendOrderConfirmation(
    @Payload() payload: any,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    await this.notificationService.sendEmailOrderFromCustomer(payload);
    channel.ack(originalMsg);
  }
}
