import { ApiProperty } from '@nestjs/swagger';

import { IMenu } from '@restaurant-system/shared';

export class MenusRo {
  // Ro: response object
  @ApiProperty({ example: 'get_menus_success' })
  message: string;
  @ApiProperty({
    example: {
      menus: [
        {
          id: '07qMMTgAmx3d5x9cfwX1F',
          name: 'FRIED RICE',
          price: 99000,
        },
      ],
      count: 17,
    },
    nullable: true,
  })
  data: {
    menus: IMenu[];
  };
  @ApiProperty({ example: 'null' })
  errors: string[] | null;
}
