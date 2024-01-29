import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import { nanoid } from '../utils/nanoid';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryKey()
  id: string = nanoid();

  @Property()
  customerEmail!: string;

  @OneToMany({ entity: () => OrderItem, mappedBy: 'order' })
  items = new Collection<OrderItem>(this);

  @Property()
  tableNumber!: string;

  @Enum(() => OrderStatus)
  status!: OrderStatus;

  @Property()
  createdAt = new Date();

  /*
    later, another possible attributes:
      restaurantBranch
      deviceType
      account (registered customer/device/tablet)
  */

  constructor(customerEmail: string, tableNumber: string) {
    this.customerEmail = customerEmail;
    this.tableNumber = tableNumber;
    this.status = OrderStatus.PENDING;
  }
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSED = 'processed',
  FINISHED = 'finished',
  CANCEL = 'cancel',
}
