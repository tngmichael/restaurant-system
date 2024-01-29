import { Entity, ManyToOne, Property } from '@mikro-orm/core';

import { Menu } from './menu.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @ManyToOne({ entity: () => Order, primary: true })
  order!: Order;

  @ManyToOne({ entity: () => Menu, primary: true })
  menu!: Menu;

  @Property()
  quantity: number = 1;

  constructor(menu: Menu, quantity: number) {
    this.menu = menu;
    this.quantity = quantity;
  }
}
