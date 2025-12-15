import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";

export class Operator implements Entity {
  constructor(readonly id: Id, private _sellerId: Id, private _name: string) {}

  static create(input: CreateOperatorInput) {
    const id = input.id ?? Id.generate();

    const operator = new Operator(id, input.sellerId, input.name);

    operator.validate();

    return operator;
  }

  private validate() {
    if (!(this.id instanceof Id)) {
      throw new Error("Invalid ID type");
    }

    if (!this._name || this._name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!this._sellerId || this._sellerId === null) {
      throw new Error("Seller is required");
    }
  }

  static fromJSON(input: any): Operator {
    return new Operator(new Id(input.id), new Id(input.sellerId), input.name);
  }

  get name(): string {
    return this._name;
  }
}

export interface CreateOperatorInput {
  id: Id;
  sellerId: Id;
  name: string;
}
