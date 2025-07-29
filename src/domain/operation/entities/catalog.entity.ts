import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { CatalogItem } from "./catalog-item.entity";

export class Catalog implements Entity {
  private _items: CatalogItem[] = [];

  constructor(
    readonly id: Id,
    private _name: string
  ) { }

  addItem(item: CatalogItem) {
    const exists = this._items.find((item) => item.productId.equals(item.productId));

    if (exists) {
      throw new Error("Item already exists");
    }

    this._items.push(item);
  }

  get name(): string {
    return this._name;
  }

  get items(): CatalogItem[] {
    return this._items;
  }
}