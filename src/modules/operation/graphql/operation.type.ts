import { Field, ID, ObjectType } from "@nestjs/graphql";
import { SellerType } from "./seller.type";

@ObjectType()
export class OperationType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  date: Date;

  @Field()
  status: string;

  @Field(() => [SellerType], { nullable: true })
  sellers?: SellerType[];
}
