import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { OperationService } from "../../application/operation/operation.service";
import { OperationType } from "./graphql/operation.type";
import {
  AddSellerToOperationInput,
  CreateOperationInput,
} from "./graphql/operation.input";

@Resolver(() => OperationType)
export class OperationResolver {
  constructor(private readonly operationService: OperationService) {}

  @Query(() => [OperationType])
  async operations() {
    return this.operationService.getAllOperations();
  }

  @Query(() => OperationType, { nullable: true })
  async operation(@Args("id") id: string) {
    return this.operationService.findOperationById(id);
  }

  @Mutation(() => OperationType)
  async createOperation(@Args("data") data: CreateOperationInput) {
    return this.operationService.createOperation({
      name: data.name,
      date: new Date(data.date),
      status: data.status,
    });
  }

  @Mutation(() => OperationType)
  async activateOperation(@Args("id") id: string) {
    return this.operationService.activateOperation(id);
  }

  @Mutation(() => OperationType)
  async addSellerToOperation(@Args("data") data: AddSellerToOperationInput) {
    return this.operationService.addSeller({
      operationId: data.operationId,
      name: data.name,
      cpf: data.cpf,
    });
  }

  @Mutation(() => OperationType)
  async removeSellerFromOperation(
    @Args("operationId") operationId: string,
    @Args("sellerId") sellerId: string
  ) {
    return this.operationService.removeSeller({
      operationId,
      sellerId,
    });
  }
}
