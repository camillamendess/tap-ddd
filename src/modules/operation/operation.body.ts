import { IsString, IsDateString, IsOptional } from "class-validator";

export class CreateOperationInputBody {
  @IsString()
  name: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  status?: string;
}
