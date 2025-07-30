import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { CreateOperationInput, Operation } from "../operation/operation.aggregate";
import { Operator } from "./entities/operator.entity";

// Agregado Seller - Responsável por gerenciar o "pool" de funcionários (Operators).

export class Seller extends Aggregate {
  private _operators: Operator[] = [];

  constructor(
    readonly id: Id,
    private _name: string,
    private _cpf: string,
  ) {
    super();
  }

  static create(input: CreateSellerInput) {
    const id = input.id ?? Id.generate();

    const seller = new Seller(id, input.name, input.cpf);

    seller.validate();

    return seller;

    // TODO - Adicionar evento para notificar o sistema que esse agregado foi criado
  }

  private validate() {
    if (this._name === undefined) {
      throw new Error("Name is required");
    }

    if (this._cpf === undefined) {
      throw new Error("Cpf is required");
    }
  }

  addOperator(operator: Operator) {
    const exists = this._operators.find((op) => op.id.equals(operator.id));

    if (exists) {
      throw new Error("Operator already exists");
    }

    this._operators.push(operator);
  }

  createOperation(input: CreateOperationInput): Operation {
    return Operation.create({
      sellerId: this.id,
      name: input.name,
      date: input.date,
    });
  }

  get name(): string {
    return this._name;
  }

  get operators(): Operator[] {
    return this._operators;
  }

  // TODO - Adicionar toJSON() e fromJSON()
}

interface CreateSellerInput {
  id: Id;
  name: string;
  cpf: string;
}