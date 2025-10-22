import { Body, Controller, Post } from "@nestjs/common";
import { OperationService } from "../../application/operation/operation.service";
import { CreateOperationInputBody } from "./operation.body";

@Controller("operations")
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Post()
  async createOperation(@Body() body: CreateOperationInputBody) {
    // Mapeia o body (HTTP) → DTO da aplicação
    return await this.operationService.createOperation({
      name: body.name,
      date: new Date(body.date),
      status: body.status,
    });
  }
}
