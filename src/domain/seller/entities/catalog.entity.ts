import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { CatalogItem } from "./catalog-item.entity";

export enum CatalogType {
  PISTA = "PISTA",
  CAMAROTE = "CAMAROTE",
}

export class Catalog implements Entity {
  private _items: CatalogItem[] = [];

  constructor(
    readonly id: Id,
    private sellerId: Id,
    private _name: string,
    private _type: string
  ) { }

  static create(input: CreateCatalogInput) {
    const id = input.id ?? Id.generate();

    const catalog = new Catalog(
      id,
      input.sellerId,
      input.name,
      input.type
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
}