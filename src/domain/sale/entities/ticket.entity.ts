import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { SaleItem } from "../value-objects/sale-item.value-object";

export class Ticket implements Entity {
  constructor(
    readonly id: Id,
    private _code: string,
    private _expirationDate: Date,
    private _items: SaleItem[] = []
  ) { }

  static create(input: CreateTicketInput) {
    const id = input.id ?? Id.generate();

    const ticket = new Ticket(id, input.code, input.expirationDate);

    ticket.validate();

    return ticket;
  }

  private validate() {
    if (!(this.id instanceof Id)) {
      throw new Error("Invalid ID type");
    }

    if (!this._code || this._code.trim() === "") {
      throw new Error("Code is required");
    }

    if (!this._expirationDate || this._expirationDate === null) {
      throw new Error("Expiration date is required");
    }
  }

  get code(): string {
    return this._code;
  }

  get expirationDate(): Date {
    return this._expirationDate;
  }

  get items(): ReadonlyArray<SaleItem> {
    return this._items;
  }

}

export interface CreateTicketInput {
  id?: Id;
  code: string;
  expirationDate: Date;
  items: SaleItem[]
}