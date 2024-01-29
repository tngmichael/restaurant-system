import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class OrderItemDto {
  @IsNotEmpty()
  @IsString()
  readonly menuId: string;

  @IsNumber()
  @Min(1)
  readonly quantity: number;
}
