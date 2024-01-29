import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderRo {
  @ApiProperty({ example: 'create_order_success' })
  message: string;
  @ApiProperty({
    example: {
      id: '07qMMTgAmx3d5x9cfwX1F',
    },
    nullable: true,
  })
  data: {
    id: string;
  };
  @ApiProperty({ example: 'null' })
  errors: string[] | null;
}
