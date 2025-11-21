import { OrderPaidEvent } from "src/application/sale/events/order-paid.event";
import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { SaleItem } from "../sale/value-objects/sale-item.value-object";

export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

export class Order extends Aggregate {
  private _paidAt?: Date;

  private constructor(
    readonly id: Id,
    private _operationId: Id,
    private _sellerId: Id,
    private _catalogId: Id,
    private _operatorId: Id,
    private _items: SaleItem[],
    private _total: number,
    private _createdAt: Date,
    private _status: OrderStatus
  ) {
    super();
    this.validate();
  }

  static create(input: CreateOrderInput): Order {
    const id = input.id ?? Id.generate();

    const total = input.items.reduce((acc, item) => acc + item.total, 0);

    return new Order(
      id,
      input.operationId,
      input.sellerId,
      input.catalogId,
      input.operatorId,
      input.items,
      total,
      new Date(),
      OrderStatus.PENDING
    );
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
      throw new Error("Order must have at least one item");
    if (this._total <= 0) throw new Error("Total must be greater than zero");
  }

  markAsPaid(): void {
    if (this._status !== "PENDING") {
      throw new Error("Order is not pending payment");
    }

    this._status = OrderStatus.PAID;
    this._paidAt = new Date();
  }

  cancel(): void {
    if (this._status === "PAID") {
      throw new Error("Cannot cancel a paid order");
    }
    this._status = OrderStatus.CANCELLED;
  }

  get operationId() {
    return this._operationId;
  }

  get sellerId() {
    return this._sellerId;
  }

  get catalogId() {
    return this._catalogId;
  }

  get operatorId() {
    return this._operatorId;
  }

  get status() {
    return this._status;
  }

  get total() {
    return this._total;
  }

  get paidAt() {
    return this._paidAt;
  }

  get createdAt() {
    return this._createdAt;
  }

  get items(): ReadonlyArray<SaleItem> {
    return this._items;
  }
}

export interface CreateOrderInput {
  id?: Id;
  operationId: Id;
  sellerId: Id;
  catalogId: Id;
  operatorId: Id;
  items: SaleItem[];
}
