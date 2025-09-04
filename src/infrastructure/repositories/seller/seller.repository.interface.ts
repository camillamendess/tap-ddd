import { Id } from "../../../domain/common/value-objects/id.value-object";
import { Seller } from "../../../domain/seller/seller.aggregate";

export interface SellerRepository {
  findById(id: Id): Promise<Seller | null>;
  save(seller: Seller): Promise<Id>;
  delete(id: Id): Promise<Id>;
}