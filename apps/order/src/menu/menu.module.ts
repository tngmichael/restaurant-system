import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Module } from 'framework/dist/nestjs/common';
import { Menu } from '../entities/menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [MikroOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
