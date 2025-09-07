import { Id } from "../../common/value-objects/id.value-object";
import { Sale } from "../sale.aggregate";

export interface SaleRepository {
  findById(id: Id): Promise<Sale | null>;
  save(sale: Sale): Promise<Id>;
}
