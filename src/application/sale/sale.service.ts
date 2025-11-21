import { Injectable, NotFoundException } from "@nestjs/common";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { SaleRepository } from "../../domain/sale/repositories/sale.repository.interface";
import { Sale } from "../../domain/sale/sale.aggregate";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import {
  FindSaleOutputDTO,
  RegisterSaleInputDTO,
  RegisterSaleOutputDTO,
} from "./dtos/sale-service.dto";
@Injectable()
export class SaleService {
  constructor(
    private readonly sellerRepository: SellerRepository,
    private readonly saleRepository: SaleRepository,
    private readonly operationRepository: OperationRepository
  ) {}

  async registerSale(
    input: RegisterSaleInputDTO
  ): Promise<RegisterSaleOutputDTO> {
    const operation = await this.operationRepository.findById(
      new Id(input.operationId)
    );
    if (!operation) throw new NotFoundException("Operation not found");

    const seller = await this.sellerRepository.findById(new Id(input.sellerId));

    if (!seller) throw new NotFoundException("Seller not found");

    const sale = Sale.create({
      operationId: new Id(input.operationId),
      sellerId: new Id(input.sellerId),
      operatorId: new Id(input.operatorId),
      catalogId: new Id(input.catalogId),
      orderId: new Id(input.orderId),
      items: input.items as any,
    });
    await this.saleRepository.save(sale);

    return {
      id: sale.id.toString(),
      operationId: input.operationId,
      sellerId: input.sellerId,
      operatorId: input.operatorId,
      catalogId: input.catalogId,
      orderId: input.orderId,
      items: input.items,
      total: sale.total,
      createdAt: sale.createdAt,
    };
  }

  async findSales(): Promise<FindSaleOutputDTO[]> {
    const sales = await this.saleRepository.findAll();
    return sales.map((s) => s.toJSON());
  }

  async findSaleById(id: Id): Promise<FindSaleOutputDTO | null> {
    const sale = await this.saleRepository.findById(id);
    return sale ? sale.toJSON() : null;
  }
}
