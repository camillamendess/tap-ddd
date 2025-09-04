import { Request, Response } from "express";
import { OperationService } from "../../application/operation/operation.service";
import { InMemoryOperationRepository } from "../../infrastructure/db/operation.db.in-memory";
import { InMemorySellerRepository } from "../../infrastructure/db/seller.db.in-memory";

export class OperationController {
  private operetionService: OperationService;

  constructor() {
    const operationRepositoryInMemory = new InMemoryOperationRepository();
    const sellerRepositoryInMemory = new InMemorySellerRepository();
    this.operetionService = new OperationService(operationRepositoryInMemory, sellerRepositoryInMemory);
  }

  async createOperation(req: Request, res: Response) {
    try {
      const operation = await this.operetionService.createOperation(req.body);
      res.status(201).json(operation.toJSON());
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async addSeller(req: Request, res: Response) {
    try {
      const seller = await this.operetionService.addSeller(req.body);
      res.status(201).json(seller.toJSON());
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
