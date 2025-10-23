import {
  IsString,
  IsDateString,
  IsOptional,
  IsNotEmpty,
} from "class-validator";

export class CreateOperationInputBody {
  @IsString()
  name: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  status?: string;
}

export class AddSellerInputBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;
}
