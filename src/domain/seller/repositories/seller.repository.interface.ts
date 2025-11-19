import { Id } from "../../common/value-objects/id.value-object";
import { CatalogItem } from "../entities/catalog-item.entity";
import { Catalog } from "../entities/catalog.entity";
import { Operator } from "../entities/operator.entity";
import { Seller } from "../seller.aggregate";

export abstract class SellerRepository {
  abstract save(seller: Seller): Promise<Id>;
  abstract findAll(): Promise<Seller[]>;
  abstract findById(id: Id): Promise<Seller | null>;
  abstract remove(id: Id): Promise<Id>;
  abstract addOperator(sellerId: Id, operator: Operator): Promise<Operator>;
  abstract createCatalog(sellerId: Id, catalog: Catalog): Promise<Catalog>;
  abstract findCatalogById(
    sellerId: Id,
    catalogId: Id
  ): Promise<Catalog | null>;
  abstract addCatalogItem(
    sellerId: Id,
    catalogId: Id,
    item: CatalogItem
  ): Promise<Catalog>;
}
