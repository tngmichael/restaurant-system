import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';

import { nanoid } from '../utils/nanoid';

@Entity()
export class Menu {
  @PrimaryKey()
  id: string = nanoid();

  @Property()
  name!: string;

  @Property()
  price: number = 0;

  @Enum(() => MenuCategory)
  category!: MenuCategory;

  constructor(name: string, price: number, category: MenuCategory) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

export enum MenuCategory {
  RICE_AND_PASTA = 'rice_and_pasta',
  NOODLE = 'noodle',
  BURGER_AND_TOAST = 'burger_and_toast',
  PIZZA = 'pizza',
  SHARE_FOOD = 'share_food',
  COFFEE = 'coffee',
  NON_COFFEE = 'non_coffee',
  CAKE = 'cake',
  SNACK = 'snack',
  EXTRA = 'extra',
}
