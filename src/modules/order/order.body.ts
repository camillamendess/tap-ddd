import { Type } from "class-transformer";
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator";
import { SaleItem } from "src/domain/sale/value-objects/sale-item.value-object";

export class CreateOrderBody {
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
  @Type(() => SaleItem)
  items: SaleItem[];
}
