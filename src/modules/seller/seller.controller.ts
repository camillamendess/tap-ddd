import { Body, Controller, Post, Param, Get } from "@nestjs/common";
import {
  AddCatalogItemInputBody,
  AddOperatorInputBody,
  AssignOperatorInputBody,
  CreateCatalogInputBody,
  CreateSellerInputBody,
} from "./seller.body";
import { SellerService } from "src/application/seller/seller.service";

@Controller("sellers")
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post()
  async createSeller(@Body() body: CreateSellerInputBody) {
    return await this.sellerService.createSeller({
      name: body.name,
      cpf: body.cpf,
      operationId: body.operationId,
    });
  }

  @Get(":sellerId")
  async getSeller(@Param("sellerId") sellerId: string) {
    return await this.sellerService.getSellerById(sellerId);
  }

  @Post(":sellerId/operators")
  async addOperator(
    @Param("sellerId") sellerId: string,
    @Body() body: AddOperatorInputBody
  ) {
    return this.sellerService.addOperatorToSeller({
      sellerId,
      name: body.name,
    });
  }

  @Get(":sellerId/operators/:operatorId")
  async getOperator(
    @Param("sellerId") sellerId: string,
    @Param("operatorId") operatorId: string
  ) {
    return this.sellerService.getOperatorById(sellerId, operatorId);
  }

  @Post(":sellerId/catalogs")
  async createCatalog(
    @Param("sellerId") sellerId: string,
    @Body() body: CreateCatalogInputBody
  ) {
    return this.sellerService.createCatalogForSeller(sellerId, {
      name: body.name,
      type: body.type,
    });
  }

  @Post(":sellerId/catalogs/:catalogId/items")
  async addCatalogItem(
    @Param("sellerId") sellerId: string,
    @Param("catalogId") catalogId: string,
    @Body() body: AddCatalogItemInputBody
  ) {
    return this.sellerService.addCatalogItem({
      sellerId,
      catalogId,
      name: body.name,
      price: body.price,
      category: body.category,
    });
  }

  @Post(":sellerId/assignments")
  async assignOperator(
    @Param("sellerId") sellerId: string,
    @Body() body: AssignOperatorInputBody
  ) {
    return this.sellerService.assignOperatorToCatalog({
      sellerId,
      operatorId: body.operatorId,
      catalogId: body.catalogId,
      role: body.role,
    });
  }
}
