import { IsString, IsNumber, IsEnum } from "class-validator";
import { CatalogType } from "src/domain/seller/entities/catalog.entity";
import { WorkRole } from "src/domain/seller/value-objects/assignment.value-object";

export class CreateSellerInputBody {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  operationId: string;
}

export class AddOperatorInputBody {
  @IsString()
  name: string;
}

export class CreateCatalogInputBody {
  @IsString()
  name: string;

  @IsEnum(CatalogType)
  type: CatalogType;
}

export class AddCatalogItemInputBody {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;
}

export class AssignOperatorInputBody {
  @IsString()
  operatorId: string;

  @IsString()
  catalogId: string;

  @IsEnum(WorkRole)
  role: WorkRole;
}
