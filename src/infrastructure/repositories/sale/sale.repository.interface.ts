import { Id } from "../../../domain/common/value-objects/id.value-object";
import { Sale } from "../../../domain/sale/sale.aggregate";

export interface SaleRepository {
  findById(id: Id): Promise<Sale | null>;
  save(sale: Sale): Promise<Id>;
}
