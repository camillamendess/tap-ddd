import { Id } from "../../domain/common/value-objects/id.value-object";
import { Operation } from "../../domain/operation/operation.aggregate";

export interface OperationRepository {
  findById(id: Id): Promise<Operation | null>;
  save(operation: Operation): Promise<Id>;
}