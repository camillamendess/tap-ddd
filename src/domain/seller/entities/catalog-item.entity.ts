import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { Price } from "../../sale/value-objects/price.value-object";

export class CatalogItem implements Entity {
  constructor(
    readonly id: Id,
    private _catalogId: Id,
    private _name: string,
    private _price: Price,
    private _category: string,
  ) { }

  static create(input: CreateCatalogItemInput) {
    const id = input.id ?? Id.generate();

    const catalogItem = new CatalogItem(
      id,
      input.catalogId,
      input.name,
      input.price,
      input.category
    );

    catalogItem.validate();

    return catalogItem;
  }

  private validate() {
    if (!this._catalogId) throw new Error("Catalog is required");
    if (!this._name) throw new Error("Name is required");
    if (!this._category) throw new Error("Category is required");
    if (!this._price) throw new Error("Price is required");
  }

  get catalogId(): Id {
    return this._catalogId;
  }

  get name(): string {
    return this._name;
  }

  get price(): Price {
    return this._price;
  }

  get category(): string {
    return this._category;
  }

  // TODO - toJSON, fromJSON
}

export interface CreateCatalogItemInput {
  id: Id;
  catalogId: Id;
  name: string;
  category: string;
  price: Price;
}