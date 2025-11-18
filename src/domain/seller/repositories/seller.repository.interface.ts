import { Id } from "../../common/value-objects/id.value-object";
import { Seller } from "../seller.aggregate";

export abstract class SellerRepository {
  abstract findAll(): Promise<Seller[]>;
  abstract findById(id: Id): Promise<Seller | null>;
  abstract save(seller: Seller): Promise<Id>;
  abstract remove(id: Id): Promise<Id>;
  abstract addOperator(sellerId: Id, operator: any): Promise<Id>;
  abstract createCatalog(sellerId: Id, catalog: any): Promise<Id>;
}
