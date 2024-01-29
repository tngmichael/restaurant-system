import { MikroORM } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Module, OnModuleInit } from 'framework/dist/nestjs/common';
import { APP_FILTER } from 'framework/dist/nestjs/core';
import { MenuModule } from './menu/menu.module';
import { MikroOrmValidationErrorFilter } from './mikro-orm-validation-error.filter';
import mikroOrmConfig from './mikro-orm.config';
import { OrderModule } from './order/order.module';
import { DatabaseSeeder } from './seeders/DatabaseSeeder';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), OrderModule, MenuModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: MikroOrmValidationErrorFilter,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
    await this.orm.getSeeder().seed(DatabaseSeeder);
  }
}
