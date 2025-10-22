import { Body, Controller, Post, Param, Get } from "@nestjs/common";
import { CreateSellerInputBody } from "./seller.body";
import { SellerService } from "src/application/seller/seller.service";

@Controller("sellers")
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post()
  async createSeller(@Body() body: CreateSellerInputBody) {
    return await this.sellerService.createSeller({
      name: body.name,
      cpf: { value: body.cpf }, // Assuming Cpf object constructor
      operationId: body.operationId,
    });
  }

  @Get(":id")
  async getSeller(@Param("id") id: string) {
    return await this.sellerService.getSellerById(id);
  }
}
