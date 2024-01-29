import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

import { IsUniqueNested } from '../../validation/is-unique-nested.validation';
import { OrderItemDto } from './order-item.dto';

export class CreateOrderDto {
  @ApiProperty({ example: 'sukamakan@gmail.com' })
  @IsEmail()
  readonly customerEmail: string;

  @ApiProperty({
    example: [
      {
        menuId: '0JzXYWWWSHVJHBj80o66Y',
        quantity: 1,
      },
    ],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsUniqueNested('menuId')
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  readonly items: OrderItemDto[];

  @ApiProperty({ example: '002' })
  @IsString()
  @IsNotEmpty()
  readonly tableNumber: string;
}
