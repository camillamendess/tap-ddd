import { Id } from "../../domain/common/value-objects/id.value-object";
import { Operation } from "../../domain/operation/operation.aggregate";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";

export class InMemoryOperationRepository implements OperationRepository {
  private store = new Map<string, Operation>();

  async findById(id: Id): Promise<Operation | null> {
    return this.store.get(id.toString()) ?? null;
  }
  async save(operation: Operation): Promise<Id> {
    this.store.set(operation.id.toString(), operation);
    return operation.id;
  }
}
