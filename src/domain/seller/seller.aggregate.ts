import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { Operator } from "./entities/operator.entity";

// Agregado Seller - Responsável por gerenciar o "pool" de funcionários (Operators).

export class Seller extends Aggregate {
  private _operators: Operator[] = [];

  constructor(
    readonly id: Id,
    private _name: string,
  ) {
    super();
  }

  // Função de criação do vendendor - Método de fabrica
  static create(input: CreateSellerInput) {
    const id = input.id ?? Id.generate();
    return new Seller(id, input.name);

    // Adicionar evento para notificar o sistema que esse agregado foi criado
  }

  // Adicionar operator
  addOperator(operator: Operator) {
    const exists = this._operators.find((op) => op.id.equals(operator.id));

    if (exists) {
      throw new Error("Operator already exists");
    }

    this._operators.push(operator);
  }

  get operators(): Operator[] {
    return this._operators;
  }

  // TODO - Adicionar toJSON() e fromJSON()
}

interface CreateSellerInput {
  id: Id;
  name: string;
}