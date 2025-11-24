import { Controller, Get, Param } from "@nestjs/common";
import { SaleService } from "src/application/sale/sale.service";
import { Id } from "src/domain/common/value-objects/id.value-object";

@Controller("sales")
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  async list() {
    return this.saleService.findSales();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.saleService.findSaleById(new Id(id));
  }
}
