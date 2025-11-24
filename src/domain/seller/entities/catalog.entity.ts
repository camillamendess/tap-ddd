import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { CatalogItem } from "./catalog-item.entity";

export enum CatalogType {
  PISTA = "PISTA",
  CAMAROTE = "CAMAROTE",
}

export class Catalog implements Entity {
  constructor(
    readonly id: Id,
    private _sellerId: Id,
    private _name: string,
    private _type: string,
    private _items: CatalogItem[] = []
  ) {}

  static create(input: CreateCatalogInput) {
    const id = input.id ?? Id.generate();

    const catalog = new Catalog(
      id,
      input.sellerId,
      input.name,
      input.type,
      input.items ?? []
    );

    catalog.validate();

    return catalog;
  }

  private validate() {
    if (this._name === undefined) {
      throw new Error("Name is required");
    }

    if (this._type === undefined) {
      throw new Error("Type is required");
    }
  }

  addItem(item: CatalogItem) {
    const exists = this._items.find((_item) => _item.id.equals(item.id));

    if (exists) {
      throw new Error("Item already exists");
    }

    this._items.push(item);
  }

  setItemAvailability(itemId: Id, available: boolean) {
    const item = this._items.find((i) => i.id.equals(itemId));

    if (!item) throw new Error("Item not found");

    if (available) {
      item.markAvailable();
    } else {
      item.markUnavailable();
    }
  }

  toJSON() {
    return {
      id: this.id.toString(),
      sellerId: this._sellerId.toString(),
      name: this._name,
      type: this._type,
      items: this._items.map((item) => item.toString()),
    };
  }

  get sellerId(): Id {
    return this._sellerId;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get items(): CatalogItem[] {
    return this._items;
  }
}

export interface CreateCatalogInput {
  id?: Id;
  sellerId: Id;
  name: string;
  type: CatalogType;
  items?: CatalogItem[];
}
