import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { Price } from "../value-objects/price.value-object";

export class CatalogItem implements Entity {
  constructor(
    readonly id: Id,
    readonly productId: Id,
    readonly price: Price
  ) { }
}