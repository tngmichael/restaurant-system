import { Inject, Injectable, Logger } from 'framework/dist/nestjs/common';
import { ClientProxy, RpcException } from 'framework/dist/nestjs/microservices';
import {
  catchError,
  firstValueFrom,
  throwError,
  timeout,
} from 'framework/dist/rxjs';
import { IEventType, MenusDto } from '@restaurant-system/shared';

@Injectable()
export class MenusService {
  private readonly logger = new Logger(MenusService.name);

  constructor(@Inject('ORDER_BUS') private client: ClientProxy) {}

  async getMenus(): Promise<MenusDto> {
    this.logger.debug(`${IEventType.GET_MENUS} requested by`);
    return firstValueFrom(
      this.client
        .send(IEventType.GET_MENUS, {})
        .pipe(timeout(5000))
        .pipe(
          catchError((error) =>
            throwError(() => new RpcException(error.response)),
          ),
        ),
    );
  }
}
