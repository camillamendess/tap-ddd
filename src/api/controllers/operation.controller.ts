import { Request, Response } from "express";
import { OperationService } from "../../application/operation/operation.service";
import { InMemoryOperationRepository } from "../../infrastructure/repositories/operation/operation.repository.in-memory";
import { InMemorySellerRepository } from "../../infrastructure/repositories/seller/seller.repository.in-memory";
import { Id } from "../../domain/common/value-objects/id.value-object";

export class OperationController {
  private service: OperationService;

  constructor() {
    const operationRepo = new InMemoryOperationRepository();
    const sellerRepo = new InMemorySellerRepository();
    this.service = new OperationService(operationRepo, sellerRepo);
  }

  async createOperation(req: Request, res: Response) {
    try {
      const operation = await this.service.createOperation(req.body);
      res.status(201).json(operation.toJSON());
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async addSeller(req: Request, res: Response) {
    try {
      const operationId = new Id(req.params.operationId);
      const seller = await this.service.addSeller(operationId, req.body);
      res.status(201).json(seller);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
