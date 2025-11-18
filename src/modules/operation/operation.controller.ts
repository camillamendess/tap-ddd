import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OperationService } from "../../application/operation/operation.service";
import { AddSellerInputBody, CreateOperationInputBody } from "./operation.body";

@Controller("operations")
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get()
  async getAllOperations() {
    return this.operationService.getAllOperations();
  }

  @Get(":operationId")
  async getOperationById(@Param("operationId") operationId: string) {
    return this.operationService.findOperationById(operationId);
  }

  @Post()
  async createOperation(@Body() body: CreateOperationInputBody) {
    return await this.operationService.createOperation({
      name: body.name,
      date: new Date(body.date),
      status: body.status,
    });
  }

  @Post()
  async activateOperation(@Param("operationId") operationId: string) {
    return await this.operationService.activateOperation(operationId);
  }

  @Post(":operationId/sellers")
  async addSeller(
    @Param("operationId") operationId: string,
    @Body() body: AddSellerInputBody
  ) {
    return await this.operationService.addSeller({
      operationId,
      name: body.name,
      cpf: body.cpf,
    });
  }

  @Delete(":operationId/sellers/:sellerId")
  async removeSeller(
    @Param("operationId") operationId: string,
    @Param("sellerId") sellerId: string
  ) {
    return await this.operationService.removeSeller({
      operationId,
      sellerId,
    });
  }
}
