import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { SaleItem } from "./value-objects/sale-item.value-object";

export class Sale extends Aggregate {
  private constructor(
    readonly id: Id,
    private _operationId: Id,
    private _sellerId: Id,
    private _catalogId: Id,
    private _operatorId: Id,
    private _items: SaleItem[],
    private _total: number,
    private _createdAt: Date,
    private _orderId: Id
  ) {
    super();
  }

  static create(input: CreateSaleInput): Sale {
    const id = input.id ?? Id.generate();

    const total = input.items.reduce(
      (accumulator, currentItem) => accumulator + currentItem.total,
      0
    );

    const sale = new Sale(
      id,
      input.operationId,
      input.sellerId,
      input.catalogId,
      input.operatorId,
      input.items,
      total,
      new Date(),
      input.orderId
    );

    sale.validate();

    return sale;
  }

  private validate() {
    if (!(this._operationId instanceof Id))
      throw new Error("Operation is required");
    if (!(this._sellerId instanceof Id)) throw new Error("Seller is required");
    if (!(this._catalogId instanceof Id))
      throw new Error("Catalog is required");
    if (!(this._operatorId instanceof Id))
      throw new Error("Operator is required");
    if (!this._items || this._items.length === 0)
      throw new Error("Sale must have at least one item");
    if (typeof this._total !== "number" || this._total <= 0)
      throw new Error("Total must be greater than zero");
    if (!(this._createdAt instanceof Date))
      throw new Error("CreatedAt must be a valid date");
  }

  toJSON() {
    return {
      id: this.id.toString(),
      operationId: this.operationId.toString(),
      sellerId: this.sellerId.toString(),
      operatorId: this.operatorId.toString(),
      catalogId: this.catalogId.toString(),
      orderId: this.orderId.toString(),
      items: this.items.map((item) => ({
        id: item.catalogItemId.toString(),
        name: item.name,
        quantity: item.quantity,
        price: item.price.valueOf(),
        total: item.total.valueOf(),
      })),
      total: this.total,
      createdAt: this.createdAt,
    };
  }

  get operationId(): Id {
    return this._operationId;
  }

  get sellerId(): Id {
    return this._sellerId;
  }

  get catalogId(): Id {
    return this._catalogId;
  }

  get operatorId(): Id {
    return this._operatorId;
  }

  get orderId(): Id {
    return this._orderId;
  }

  get items(): ReadonlyArray<SaleItem> {
    return this._items;
  }

  get total(): number {
    return this._total;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}

export interface CreateSaleInput {
  id?: Id;
  operationId: Id;
  sellerId: Id;
  catalogId: Id;
  operatorId: Id;
  items: SaleItem[];
  orderId: Id;
}
