import { Entity } from "./entity";
import { Id } from "./value-objects/id.value-object";

export abstract class Aggregate implements Entity {
  abstract readonly id: Id;
}
