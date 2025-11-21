import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOperationInput {
  @Field()
  name: string;

  @Field()
  date: Date;

  @Field()
  status: string;
}

@InputType()
export class AddSellerToOperationInput {
  @Field()
  operationId: string;

  @Field()
  name: string;

  @Field()
  cpf: string;
}
