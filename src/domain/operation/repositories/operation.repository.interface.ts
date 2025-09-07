import { Id } from "../../common/value-objects/id.value-object";
import { Operation } from "../operation.aggregate";

export interface OperationRepository {
  findById(id: Id): Promise<Operation | null>;
  save(operation: Operation): Promise<Id>;
}