import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { Ticket } from "./entities/ticket.entity";
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
    private _tickets: Ticket[] = []
  ) {
    super();
  }

  static create(input: CreateSaleInput): Sale {
    const id = input.id ?? Id.generate();

    if (!input.items || input.items.length === 0) {
      throw new Error("Sale must have at least one item");
    }

    const total = input.items.reduce((accumulator, currentItem) => (accumulator + currentItem.total), 0);


    const sale = new Sale(
      id,
      input.operationId,
      input.sellerId,
      input.catalogId,
      input.operatorId,
      input.items,
      total,
      new Date(),
    );

    sale.validate();

    return sale;
  }

  private validate() {
    if (!(this._operationId instanceof Id)) throw new Error("Operation is required");
    if (!(this._sellerId instanceof Id)) throw new Error("Seller is required");
    if (!(this._catalogId instanceof Id)) throw new Error("Catalog is required");
    if (!(this._operatorId instanceof Id)) throw new Error("Operator is required");
    if (!this._items || this._items.length === 0) throw new Error("Sale must have at least one item");
    if (typeof this._total !== "number" || this._total <= 0) throw new Error("Total must be greater than zero");
    if (!(this._createdAt instanceof Date)) throw new Error("CreatedAt must be a valid date");
  }

  addTicket(ticketItems: SaleItem[], code: string, expirationDate: Date): Ticket {
    const ticket = Ticket.create({ code, expirationDate, items: ticketItems });
    this._tickets.push(ticket);
    return ticket;
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
}