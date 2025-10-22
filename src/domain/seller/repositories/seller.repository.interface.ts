import { Id } from "../../common/value-objects/id.value-object";
import { Seller } from "../seller.aggregate";

export abstract class SellerRepository {
  abstract findById(id: Id): Promise<Seller | null>;
  abstract save(seller: Seller): Promise<Id>;
  abstract remove(id: Id): Promise<Id>;
}
