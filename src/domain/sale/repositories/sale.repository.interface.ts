import { Id } from "../../common/value-objects/id.value-object";
import { Sale } from "../sale.aggregate";

export abstract class SaleRepository {
  abstract findById(id: Id): Promise<Sale | null>;
  abstract save(sale: Sale): Promise<Id>;
}
