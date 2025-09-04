import { Request, Response } from "express";
import { SaleService } from "../../application/sale/sale.service";
import { InMemorySellerRepository } from "../../infrastructure/repositories/seller/seller.repository.in-memory";
import { InMemorySaleRepository } from "../../infrastructure/repositories/sale/sale.repository.in-memory";
import { InMemoryOperationRepository } from "../../infrastructure/repositories/operation/operation.repository.in-memory";

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
      const sale = await this.service.registerSale(operationId, sellerId, operatorId, catalogId, items);
      res.status(201).json(sale);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
