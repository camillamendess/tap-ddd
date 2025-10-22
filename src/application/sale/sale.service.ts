import { Id } from "../../domain/common/value-objects/id.value-object";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { SaleRepository } from "../../domain/sale/repositories/sale.repository.interface";
import { Sale } from "../../domain/sale/sale.aggregate";
import { SaleItem } from "../../domain/sale/value-objects/sale-item.value-object";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { WorkRole } from "../../domain/seller/value-objects/assignment.value-object";

export class SaleService {
  constructor(
    private readonly sellerRepository: SellerRepository,
    private readonly saleRepository: SaleRepository,
    private readonly operationRepository: OperationRepository
  ) { }

  async registerSale(
    operationId: Id,
    sellerId: Id,
    operatorId: Id,
    catalogId: Id,
    items: SaleItem[]
  ): Promise<Sale> {
    // Operation deve existir e conter o seller
    const operation = await this.operationRepository.findById(operationId);
    if (!operation) throw new Error("Operation not found");

    const sellerExists = operation.sellerIds.some(id => id.equals(sellerId));
    if (!sellerExists) throw new Error("Seller does not belong to operation");

    // Seller deve existir
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new Error("Seller not found");

    // Verifica se o operador pertence ao seller
    const operatorExists: boolean = seller.operators.some((op: { id: Id }) => op.id.equals(operatorId));
    if (!operatorExists) {
      throw new Error("Operator does not belong to seller");
    }

    // Verifica se o catálogo pertence ao seller
    const catalogExists: boolean = seller.catalogs.some((cat: { id: Id }) => cat.id.equals(catalogId));
    if (!catalogExists) {
      throw new Error("Catalog does not belong to seller");
    }

    // criar Sale 
    const sale = Sale.create({
      operationId,
      sellerId,
      catalogId,
      operatorId,
      items
    });
    await this.saleRepository.save(sale);

    return sale;
  }
}
