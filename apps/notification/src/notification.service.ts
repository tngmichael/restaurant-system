import { Injectable, Logger } from 'framework/dist/nestjs/common';
import { IEventType } from '@restaurant-system/shared';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  sendEmailOrderFromCustomer(payload: any): void {
    this.logger.debug(
      `${IEventType.SEND_EMAIL_ORDER_FROM_CUSTOMER} requested by ${payload.customerEmail}`,
    );
  }
}
