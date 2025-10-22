import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested, IsNumber } from "class-validator";

class SaleItemDTO {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}

export class RegisterSaleBodyDTO {
  @IsString()
  operationId: string;

  @IsString()
  sellerId: string;

  @IsString()
  operatorId: string;

  @IsString()
  catalogId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDTO)
  items: SaleItemDTO[];
}
