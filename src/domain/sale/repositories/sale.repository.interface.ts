import { Id } from "../../common/value-objects/id.value-object";
import { Sale } from "../sale.aggregate";

export abstract class SaleRepository {
  abstract save(sale: Sale): Promise<Id>;
  abstract findById(id: Id): Promise<Sale | null>;
  abstract findAll(): Promise<Sale[]>;
}
