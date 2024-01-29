import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';

import { Injectable } from 'framework/dist/nestjs/common';
import { MenusDto } from '@restaurant-system/shared';
import { Menu } from '../entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: EntityRepository<Menu>,
    private readonly _em: EntityManager,
  ) {}

  private get em(): EntityManager {
    return this._em.fork();
  }

  async getMenus(): Promise<MenusDto> {
    const [menus, count] = await this.em.findAndCount(
      Menu,
      {},
      { limit: 10, offset: 0 },
    );

    return {
      menus,
      count: count,
    };
  }
}
