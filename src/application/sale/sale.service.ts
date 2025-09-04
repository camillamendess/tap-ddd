import { Id } from "../../domain/common/value-objects/id.value-object";
import { OperationRepository } from "../../infrastructure/repositories/operation/operation.repository.interface";
import { SaleRepository } from "../../infrastructure/repositories/sale/sale.repository.interface";
import { Sale } from "../../domain/sale/sale.aggregate";
import { SaleItem } from "../../domain/sale/value-objects/sale-item.value-object";
import { SellerRepository } from "../../infrastructure/repositories/seller/seller.repository.interface";
import { WorkAssignment, WorkRole } from "../../domain/seller/value-objects/assignment.value-object";

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

    const sellerExists = operation.sellerIds.some(sellerId => sellerId.equals(sellerId));
    if (!sellerExists) throw new Error("Seller does not belong to operation");

    // Seller deve existir
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new Error("Seller not found");

    // Verifica se o operador pertence ao seller
    const operatorExists = seller.operators.some(op => op.id.equals(operatorId));
    if (!operatorExists) {
      throw new Error("Operator does not belong to seller");
    }

    // Verifica se o catálogo pertence ao seller
    const catalogExists = seller.catalogs.some(cat => cat.id.equals(catalogId));
    if (!catalogExists) {
      throw new Error("Catalog does not belong to seller");
    }

    const hasAssignment = seller.assignments.some(a =>
      a.equals(new WorkAssignment(operatorId, catalogId, WorkRole.CAIXA))
    );
    if (!hasAssignment) throw new Error("Operator not assigned to this catalog");

    // Para mapear precisa buscar o catalogo pelo id ainda
    // const saleItems: SaleItem[] = items.map(req => {
    //   const item = catalog.items.find(i => i.id.equals(req.itemId));
    //   if (!item) throw new Error(`Item ${req.itemId.toString()} not found in catalog`);
    //   return new SaleItem(item.id, item.name, req.quantity, item.price);
    // });

    // criar Sale como aggregate root
    const sale = Sale.create({
      operationId,
      sellerId,
      catalogId,
      operatorId,
      items
    });
    await this.saleRepository.save(sale);

    // (opcional) gerar tickets e adicioná-los dentro do aggregate Sale
    // const ticket = Ticket.create({ code: generateCode(), expirationDate: ... });
    // sale.addTicket(ticket);

    return sale;
  }
}
