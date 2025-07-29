import { Id } from "./value-objects/id.value-object";

// Entidade é um objeto de domínio que possui uma identidade única, então um id é sempre necessário
export interface Entity {
  readonly id: Id;
}