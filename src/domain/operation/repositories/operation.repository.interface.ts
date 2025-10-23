import { Id } from "../../common/value-objects/id.value-object";
import { Operation } from "../operation.aggregate";

export abstract class OperationRepository {
  abstract findAll(): Promise<Operation[]>;
  abstract findById(id: Id): Promise<Operation | null>;
  abstract save(operation: Operation): Promise<Id>;
}
