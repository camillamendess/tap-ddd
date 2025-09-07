import { Request, Response } from "express";
import { OperationService } from "../../application/operation/operation.service";
import { InMemoryOperationRepository } from "../../infrastructure/repository-in-memory/operation.db.in-memory";
import { InMemorySellerRepository } from "../../infrastructure/repository-in-memory/seller.db.in-memory";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";

export class OperationController {
  private operationService: OperationService;

  constructor(
    operationRepository: OperationRepository,
    sellerRepository: SellerRepository
  ) {
    this.operationService = new OperationService(operationRepository, sellerRepository);
  }

  async createOperation(req: Request, res: Response) {
    try {
      const operation = await this.operationService.createOperation(req.body);
      res.status(201).json(operation.toJSON());
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async addSeller(req: Request, res: Response) {
    try {
      const seller = await this.operationService.addSeller(req.body);
      res.status(201).json(seller.toJSON());
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
