import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { CreateOperationInput, Operation } from "../operation/operation.aggregate";
import { CreateOperatorInput, Operator } from "./entities/operator.entity";

// Agregado Seller - Responsável por gerenciar o "pool" de funcionários (Operators).

// TODO - CFP pode ser um value-object

export class Seller extends Aggregate {
  constructor(
    readonly id: Id,
    private _name: string,
    private _cpf: string,
    private _operators: Operator[] = []
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
    if (!(this.id instanceof Id)) {
      throw new Error("Invalid ID type");
    }

    if (!this._name || this._name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!this._cpf || this._cpf.trim() === "") {
      throw new Error("Cpf is required");
    }

    if (this._cpf.trim().length < 11) {
      throw new Error("Cpf must be a string of 11 digits");
    }
  }

  addOperator(input: CreateOperatorInput): Operator {
    const exists = this._operators.find(op => op.id.equals(input.id));
    if (exists) {
      throw new Error("Operator already exists");
    }

    const operator = Operator.create(input);

    this._operators.push(operator);

    return operator;
  }

  getOperatorById(operatorId: Id): Operator {
    const operator = this._operators.find(op => op.id.equals(operatorId));

    if (!operator) {
      throw new Error("Operator not found");
    }

    return operator;
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

  get cpf(): string {
    return this._cpf;
  }

  get operators(): ReadonlyArray<Operator> {
    return this._operators;
  }

  // TODO - Adicionar toJSON() e fromJSON()
}

interface CreateSellerInput {
  id?: Id;
  name: string;
  cpf: string;
}