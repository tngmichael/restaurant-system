import { Injectable, Logger } from 'framework/dist/nestjs/common';
import { IEventType } from '@restaurant-system/shared';

@Injectable()
export class KitchenService {
  private readonly logger = new Logger(KitchenService.name);

  processOrder(payload: any): void {
    this.logger.debug(
      `${IEventType.PROCESS_ORDER} requested by ${payload.customerEmail}`,
    );
  }
}
