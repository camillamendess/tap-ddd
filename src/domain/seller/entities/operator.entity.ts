import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";

// Entidade Operator: representa um operador que pode ser um funcionário/membro da equipe de um vendedor.

export class Operator implements Entity {
  constructor(
    readonly id: Id,
    private _name: string
  ) { }

  static create(input: CreateOperatorInput) {
    const id = input.id ?? Id.generate();

    const operator = new Operator(id, input.name);

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
  }

  get name(): string {
    return this._name;
  }
}

export interface CreateOperatorInput {
  id: Id;
  name: string;
}