import { Id } from "../../../domain/common/value-objects/id.value-object";
import { SaleRepository } from "./sale.repository.interface";
import { Sale } from "../../../domain/sale/sale.aggregate";

export class InMemorySaleRepository implements SaleRepository {
  private store = new Map<string, Sale>();

  async findById(id: Id): Promise<Sale | null> {
    return this.store.get(id.toString()) ?? null;
  }
  async save(sale: Sale): Promise<Id> {
    this.store.set(sale.id.toString(), sale);
    return sale.id;
  }
  async findByOperation(operationId: Id): Promise<Sale[]> {
    return [...this.store.values()].filter(s => s.operationId.equals(operationId));
  }
}
