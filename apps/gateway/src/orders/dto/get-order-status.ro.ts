import { ApiProperty } from '@nestjs/swagger';

export class GetOrderStatusRo {
  @ApiProperty({ example: 'get_order_status_success' })
  message: string;
  @ApiProperty({
    example: {
      status: 'processed',
    },
    nullable: true,
  })
  data: {
    status: string;
  };
  @ApiProperty({ example: 'null' })
  errors: string[] | null;
}
