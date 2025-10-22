import { IsString } from "class-validator";

export class CreateSellerInputBody {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  operationId: string;
}
