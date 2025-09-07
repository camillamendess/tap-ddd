import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";

export enum OperationStatus {
  PLANNED = "PLANNED",
  ACTIVE = "ACTIVE"
}

export class Operation extends Aggregate {
  constructor(
    readonly id: Id,
    private _name: string,
    private _date: Date,
    private _status: OperationStatus = OperationStatus.PLANNED,
    private _sellers: Id[] = [],
  ) {
    super();
  }

  static create(input: CreateOperationInput) {
    const id = input.id ?? Id.generate();

    const operation = new Operation(
      id,
      input.name,
      input.date,
      input.status
    );

    operation.validate();

    return operation;
  }

  private validate() {
    if (!(this.id instanceof Id)) {
      throw new Error("Invalid ID type");
    }

    if (!this._name || this._name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!this._date) {
      throw new Error("Date is required");
    }
  }

  addSeller(sellerId: Id) {
    const exists = this._sellers.some(id => id.equals(sellerId));

    if (exists) {
      throw new Error("Seller already added to this operation");
    }

    this._sellers.push(sellerId);
  }

  removeSeller(sellerId: Id) {
    const index = this._sellers.findIndex(id => id.equals(sellerId));
    if (index === -1) {
      throw new Error("Seller not found in this operation");
    }
    this._sellers.splice(index, 1);
  }

  activate() {
    this._status = OperationStatus.ACTIVE;
  }

  toJSON() {
    return {
      id: this.id.toString(),
      name: this._name,
      date: this._date,
      status: this._status,
      sellers: this._sellers.map(s => s.toString())
    };
  }

  get name(): string {
    return this._name;
  }

  get date(): Date {
    return this._date;
  }

  get status(): OperationStatus {
    return this._status;
  }

  get sellerIds(): ReadonlyArray<Id> {
    return this._sellers;
  }
}

export interface CreateOperationInput {
  id?: Id;
  name: string;
  date: Date;
  status?: OperationStatus;
}