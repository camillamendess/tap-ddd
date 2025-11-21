import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SellerType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  cpf: string;
}
