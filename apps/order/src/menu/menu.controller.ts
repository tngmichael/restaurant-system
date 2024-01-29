import { Controller } from 'framework/dist/nestjs/common';
import { MessagePattern } from 'framework/dist/nestjs/microservices';
import { IEventType, MenusDto } from '@restaurant-system/shared';
import { MenuService } from './menu.service';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @MessagePattern(IEventType.GET_MENUS)
  async getMenus(): Promise<MenusDto> {
    return this.menuService.getMenus();
  }
}
