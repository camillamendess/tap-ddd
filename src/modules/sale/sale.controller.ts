import { Body, Controller, Post } from "@nestjs/common";
import { SaleService } from "src/application/sale/sale.service";
import { RegisterSaleBodyDTO } from "./sale.body";

@Controller("sales")
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  async registerSale(@Body() body: RegisterSaleBodyDTO) {
    // const operationId = new Id(body.operationId);
    // const sellerId = new Id(body.sellerId);
    // const operatorId = new Id(body.operatorId);
    // const catalogId = new Id(body.catalogId);
    // const saleItems: SaleItem[] = body.items.map(
    //   (item) =>
    //     new SaleItem(new Id(item.id), item.name, item.quantity, item.price)
    // );
    // const sale = await this.saleService.registerSale(
    //   operationId,
    //   sellerId,
    //   operatorId,
    //   catalogId,
    //   saleItems
    // );
    // return sale;
  }
}
