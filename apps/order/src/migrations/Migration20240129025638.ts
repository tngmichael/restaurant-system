import { Migration } from '@mikro-orm/migrations';

export class Migration20240129025638 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      "create table `menu` (`id` varchar(255) not null, `name` varchar(255) not null, `price` int not null, `category` enum('rice_and_pasta', 'noodle', 'burger_and_toast', 'pizza', 'share_food', 'coffee', 'non_coffee', 'cake', 'snack', 'extra') not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;",
    );

    this.addSql(
      "create table `order` (`id` varchar(255) not null, `customer_email` varchar(255) not null, `table_number` varchar(255) not null, `status` enum('pending', 'processed', 'finished', 'cancel') not null default 'pending', `created_at` datetime not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;",
    );

    this.addSql(
      'create table `order_item` (`order_id` varchar(255) not null, `menu_id` varchar(255) not null, `quantity` int not null, primary key (`order_id`, `menu_id`)) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `order_item` add index `order_item_order_id_index`(`order_id`);',
    );
    this.addSql(
      'alter table `order_item` add index `order_item_menu_id_index`(`menu_id`);',
    );

    this.addSql(
      'alter table `order_item` add constraint `order_item_order_id_foreign` foreign key (`order_id`) references `order` (`id`) on update cascade;',
    );
    this.addSql(
      'alter table `order_item` add constraint `order_item_menu_id_foreign` foreign key (`menu_id`) references `menu` (`id`) on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table `order_item` drop foreign key `order_item_menu_id_foreign`;',
    );

    this.addSql(
      'alter table `order_item` drop foreign key `order_item_order_id_foreign`;',
    );

    this.addSql('drop table if exists `menu`;');

    this.addSql('drop table if exists `order`;');

    this.addSql('drop table if exists `order_item`;');
  }
}
