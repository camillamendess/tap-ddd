import { Request, Response } from "express";
import { SaleService } from "../../application/sale/sale.service";
import { InMemorySellerRepository } from "../../infrastructure/db/seller.db.in-memory";
import { InMemorySaleRepository } from "../../infrastructure/db/sale.db.in-memory";
import { InMemoryOperationRepository } from "../../infrastructure/db/operation.db.in-memory";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { SaleItem } from "../../domain/sale/value-objects/sale-item.value-object";

export class SaleController {
  private service: SaleService;

  constructor() {
    const sellerRepository = new InMemorySellerRepository();
    const saleRepository = new InMemorySaleRepository();
    const operationRepository = new InMemoryOperationRepository();
    this.service = new SaleService(sellerRepository, saleRepository, operationRepository);
  }

  async registerSale(req: Request, res: Response) {
    try {
      const { operationId, sellerId, operatorId, catalogId, items } = req.body;

      const operationIdObj = new Id(operationId);
      const sellerIdObj = new Id(sellerId);
      const operatorIdObj = new Id(operatorId);
      const catalogIdObj = new Id(catalogId);

      const saleItems: SaleItem[] = items.map((item: any) =>
        new SaleItem(
          new Id(item.id),
          item.name,
          item.quantity,
          item.price
        )
      );

      const sale = await this.service.registerSale(
        operationIdObj,
        sellerIdObj,
        operatorIdObj,
        catalogIdObj,
        saleItems
      );

      res.status(201).json(sale);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
