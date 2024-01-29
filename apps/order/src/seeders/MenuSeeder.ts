import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { Menu, MenuCategory } from '../entities/menu.entity'; // don't use absolute path

export class MenuSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const count = await em.count(Menu);
    if (count) {
      return;
    }
    const RICE_AND_PASTA_menus = [
      { name: 'SMOKE BEEF FRIED RICE', price: 40000 },
      { name: 'SINGAPORE FRIED RICE', price: 40000 },
      { name: 'SEI PADANG RICE', price: 52500 },
      { name: 'MAREGE ROAST CHICKEN', price: 51500 },
      { name: 'BAJAWA FRIEDRICE', price: 75000 },
      { name: 'TUNA SPAGHETTI', price: 44000 },
      { name: 'BAJAWA RICE', price: 52500 },
      { name: 'JAVA FRIEDRICE', price: 65000 },
      { name: 'CHICKEN BULGOGI RICE', price: 38500 },
      { name: 'SEI MATAH RICE', price: 52500 },
      { name: 'CREAMY MUSHROOM SPAGHETTI', price: 38500 },
      { name: 'SAUSAGE FRIEDRICE', price: 40000 },
      { name: 'BEEF BULGOGI RICE', price: 70380 },
      { name: 'AGLIO FRAGRANTE', price: 28000 },
      { name: 'CHICKEN X.O FRIED RICE', price: 40000 },
      { name: 'BAJAWA ROAST CHICKEN', price: 95000 },
      { name: 'AGLIO BAJAWA', price: 57700 },
      { name: 'KETE PASTA', price: 39900 },
      { name: 'CREAMY MUSHROOM EXTRA SMOKE', price: 53500 },
      { name: 'NASI BAKAR AYAM WOKU', price: 41000 },
      { name: 'NASI BAKAR ONCOM', price: 31000 },
      { name: 'NASI BAKAR DORY MATAH', price: 41000 },
      { name: 'NASI BAKAR AYAM WOKU', price: 41000 },
      { name: 'KATSU CURRY RICE', price: 32000 },
    ];
    const NOODLE_menus = [
      { name: 'KWETIAW GORENG ALA BAJAWA', price: 50000 },
      { name: 'KWETIAW GORENG JAWA', price: 30000 },
      { name: 'KWETIAW GORENG SAUSAGE X.O', price: 30000 },
      { name: 'MIE GORENG JAWA', price: 30000 },
      { name: 'MIE GORENG ALA BAJAWA', price: 50000 },
      { name: 'MIE GORENG SAUSAGE X.O', price: 30000 },
    ];
    const BURGER_AND_TOAST_menus = [
      { name: 'KATSU CHICKEN CURRY TOAST', price: 36700 },
      { name: 'BAJAWA TOAST', price: 47000 },
      { name: 'SRIKAYA CHEESE TOAST', price: 21000 },
      { name: 'SPICY CHEESE BURGER', price: 45000 },
      { name: 'PEANUT BERRY TOAST', price: 21000 },
      { name: 'CHICKEN BULGOGI TOAST', price: 39900 },
      { name: 'PADANG BEEF TOAST', price: 47000 },
      { name: 'THAI CHICKEN TOAST', price: 35000 },
      { name: 'KATSU CHICKEN SESAME MAYO TOAST', price: 38500 },
      { name: 'THAI CHICKEN BURGER', price: 45000 },
      { name: 'PADANG BEEF BURGER', price: 50000 },
      { name: 'SWEET CINNAMON TOAST', price: 32500 },
      { name: 'GARLIC TOAST', price: 15000 },
      { name: 'BAJAWA BURGER', price: 65000 },
      { name: 'EGG MAYO TOAST', price: 28000 },
    ];
    const PIZZA_menus = [
      { name: 'BAJAWA PIZZA 24', price: 89000 },
      { name: 'TUNA PIZZA 32', price: 79000 },
      { name: 'CALZONE PIZZA 32', price: 79000 },
      { name: 'VEGETARIANA PIZZA 32', price: 84000 },
      { name: 'SUNNY BEEF PIZZA 24', price: 52500 },
      { name: 'CAPRICCIOSA PIZZA 24', price: 68500 },
      { name: 'MEAT LOVER PIZZA 32', price: 92500 },
      { name: 'BAJAWA PIZZA 32', price: 131000 },
      { name: 'CALZONE PIZZA 24', price: 68500 },
      { name: 'MARGHERITA PIZZA 24', price: 47000 },
      { name: 'MARGHERITA PIZZA 32', price: 73500 },
      { name: 'SUNNY BEEF PIZZA 32', price: 79500 },
      { name: 'DOPPIO STRATO PIZZA 24', price: 55000 },
      { name: 'TUNA PIZZA 24', price: 68500 },
      { name: 'CAPRICCIOSA PIZZA 32', price: 93500 },
      { name: 'MEAT LOVER PIZZA 24', price: 68500 },
      { name: 'VEGETARIANA PIZZA 24', price: 68500 },
    ];
    const SHARE_FOOD_menus = [
      { name: 'BAJAWA STEAK MUSHROOM', price: 95000 },
      { name: 'POTATO KATSU', price: 52500 },
      { name: 'DORI PITATA', price: 49900 },
    ];
    const COFFEE_menus = [
      { name: 'CAPPUCINO', price: 38500 },
      { name: 'BAJAWA BLENDED HAZELNUT COFFEE', price: 38500 },
      { name: 'BAJAWA BLENDED VANILLA COFFEE', price: 38500 },
      { name: 'MAUMERE DOUBLE SHAKE', price: 38500 },
      { name: 'CARAMEL ADONARA', price: 40000 },
      { name: 'NGADA KOPI SUSU', price: 27500 },
      { name: 'MALT COFFEE', price: 35000 },
      { name: 'AEROCANO', price: 22000 },
      { name: 'FLORESSO HOT/ICE', price: 20000 },
      { name: 'KALAPA BLENDED', price: 40000 },
      { name: 'FLORESIEN CINNAMON', price: 38500 },
      { name: 'MOCCA ICE', price: 31500 },
      { name: 'MOCCA HOT', price: 27500 },
      { name: 'KOPI PANTAI KOKA', price: 30800 },
      { name: 'AEROCAMELO', price: 24200 },
      { name: 'LIMERICANO', price: 35000 },
      { name: 'DRIP COFFEE BAG', price: 25000 },
      { name: 'BAJAWA BLENDED AVOCADO COFFEE', price: 38500 },
      { name: 'HITAM MANIS', price: 22000 },
      { name: 'NORA LATTE', price: 38500 },
      { name: 'BAJOFFOGATO', price: 33000 },
      { name: 'PASSION DOUBLE SHAKE', price: 33600 },
      { name: 'CARAMEL DOUBLE SHAKE', price: 33600 },
      { name: 'BAJAWA BLENDED CARAMEL COFFEE', price: 38500 },
      { name: 'KALAPA MOCKTAIL', price: 30000 },
      { name: 'ROTE PARTY', price: 38500 },
      { name: 'KOPI MANIS MADU ORANGE', price: 38000 },
      { name: 'KOPI KALAPA ORANGE', price: 38000 },
      { name: 'COFFEE MOCKTAIL RUTENG', price: 36700 },
      { name: 'COFFEE MOCKTAIL LARANTUKA', price: 36700 },
      { name: 'COCO NUTS', price: 32000 },
      { name: 'CAN - LYCHEELICIOUS', price: 35000 },
      { name: 'CAN - HONEYDEW CINNAMON', price: 35000 },
      { name: 'CAN - TROPICAL ROSE PEACH', price: 35000 },
      { name: 'COCONUT SWEET LATTE', price: 45000 },
      { name: 'CARAMEL SWEET LATTE', price: 45000 },
      { name: 'VANILLA SWEET LATTE', price: 45000 },
      { name: 'HAZELNUT SWEET LATTE', price: 45000 },
    ];
    const NON_COFFEE_menus = [
      { name: 'TARO LATTE', price: 38500 },
      { name: 'LEMON TEA', price: 35000 },
      { name: 'EL-TARO', price: 38500 },
      { name: 'BAJAWA BLENDED AVOCADO CHOCOLATE', price: 38500 },
      { name: 'CHOCO MINT', price: 39900 },
      { name: 'MATCHA LATTE', price: 38500 },
      { name: 'TEA PINK BEACH', price: 28000 },
      { name: 'MINERAL WATER 330ML', price: 10000 },
      { name: 'CHOCOLATE', price: 38500 },
      { name: 'HOT ENDE HONEY LEMON', price: 27500 },
      { name: 'JASMINE TEA', price: 35000 },
      { name: 'ICED LYCHEE TEA', price: 35000 },
      { name: 'MORINGA TEA', price: 27500 },
      { name: 'MINERAL WATER COLD 330ML', price: 10000 },
      { name: 'RED VELVET LATTE', price: 38500 },
      { name: 'ICED ENDE HONEY LEMON', price: 38500 },
      { name: 'LOTUS N CREAM BLENDED', price: 47000 },
      { name: 'BAJAWA BLENDED COOKIES AND CREAM', price: 38500 },
      { name: 'ORANGE PAPERMINT', price: 35000 },
      { name: 'SODA MOCKTAIL LIME', price: 40000 },
      { name: 'SODA MOCKTAIL PASSION', price: 40000 },
      { name: 'SODA MOCKTAIL MIX BERIES', price: 40000 },
      { name: 'SODA MOCKTAIL KIWI', price: 40000 },
      { name: 'KELIMUTU STRAWBERRY CHEESE TEA', price: 29400 },
      { name: 'KELIMUTU PANDAN CHEESE TEA', price: 29400 },
      { name: 'KELIMUTU PASSION CHEESE TEA', price: 29400 },
      { name: 'KANAWA SPARKLE', price: 40000 },
      { name: 'RUTENG SPARKLE', price: 40000 },
      { name: 'LABUAN SPARKLE', price: 40000 },
      { name: 'MARISA SPARKLE', price: 40000 },
      { name: 'PADAR SPARKLE', price: 40000 },
    ];
    const CAKE_menus = [
      { name: 'BURNT CHEESE CAKE SLICE ORIGINAL', price: 35000 },
      { name: 'LEMON SLICE CAKE', price: 18000 },
      { name: 'TRIPLE CHOCOLATE SLICE CAKE', price: 18000 },
      { name: 'FLORESSO DOUBLE CHOCO SLICE', price: 15000 },
      { name: 'SLICE CAKE CHANTILY', price: 18000 },
      { name: 'BURNT CHEESE CAKE BLUEBERRY', price: 35000 },
      { name: 'SLICE CAKE BLACK COFFEE', price: 15000 },
      { name: 'HAZELNUT SLICE CAKE', price: 18000 },
      { name: 'BLACKFOREST SLICE CAKE', price: 18000 },
      { name: 'ROTE SLICE CAKE', price: 18000 },
      { name: 'BROWNIES RED VELVET', price: 20000 },
      { name: 'BROWNIES MATCHA', price: 20000 },
      { name: 'BROWNIES CHOCO CHEESE', price: 20000 },
      { name: 'BURNT CHEESE CAKE BLUEBERRY', price: 35000 },
    ];
    const SNACK_menus = [
      { name: 'SPICY THAI QTELA', price: 25000 },
      { name: 'SWEET CHEESE QTELA', price: 26500 },
      { name: 'SWEET POTATO FRIES', price: 27500 },
      { name: 'POTATO WEDGES', price: 35000 },
      { name: 'BAJAWA WINGS', price: 48800 },
      { name: 'TAHU LADA GARAM', price: 27500 },
      { name: 'ONION RING', price: 38500 },
      { name: 'PEUYUEM GORENG', price: 28000 },
      { name: 'FRIED EDOKI', price: 31000 },
    ];
    const EXTRA_menus = [
      { name: 'EXTRA RICE', price: 10000 },
      { name: 'EXTRA SHOT ESPRESSO', price: 10000 },
      //
    ];

    for (const menu of RICE_AND_PASTA_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.RICE_AND_PASTA });
    }
    for (const menu of NOODLE_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.NOODLE });
    }
    for (const menu of BURGER_AND_TOAST_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.BURGER_AND_TOAST });
    }
    for (const menu of PIZZA_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.PIZZA });
    }
    for (const menu of SHARE_FOOD_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.SHARE_FOOD });
    }
    for (const menu of COFFEE_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.COFFEE });
    }
    for (const menu of NON_COFFEE_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.NON_COFFEE });
    }
    for (const menu of CAKE_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.CAKE });
    }
    for (const menu of SNACK_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.SNACK });
    }
    for (const menu of EXTRA_menus) {
      em.create(Menu, { ...menu, category: MenuCategory.EXTRA });
    }
  }
}
