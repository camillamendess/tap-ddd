import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";

// Entidade Operator: representa um operador que pode ser um funcionário/membro da equipe de um vendedor.

export class Operator implements Entity {
  constructor(
    readonly id: Id,
    private _name: string
  ) { }

  get name(): string {
    return this._name;
  }
}