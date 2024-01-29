import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Controller, Get } from 'framework/dist/nestjs/common';
import { MenusRo } from './dto/menus.ro';
import { MenusService } from './menus.service';

@Controller('menus')
@ApiTags('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}

  @Get()
  @ApiOkResponse({
    type: MenusRo,
    description: 'List of food & drink menus for customers',
  })
  async getMenus(): Promise<MenusRo> {
    const data = await this.menusService.getMenus();
    return {
      message: 'get_menus_success',
      data,
      errors: null,
    };
  }
}
