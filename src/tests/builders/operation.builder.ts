import { Id } from "../../domain/common/value-objects/id.value-object";
import { Operation, OperationStatus } from "../../domain/operation/operation.aggregate";

export class OperationBuilder {
  private _id: Id = Id.generate();
  private _name: string = "Festa";
  private _date: Date = new Date();
  private _status: OperationStatus = OperationStatus.PLANNED;
  private _sellers: Id[] = [];

  static create() {
    return new OperationBuilder();
  }

  withId(id: Id) {
    this._id = id;
    return this;
  }

  withName(name: string) {
    this._name = name;
    return this;
  }

  withDate(date: Date) {
    this._date = date;
    return this;
  }

  withStatus(status: OperationStatus) {
    this._status = status;
    return this;
  }

  withSeller(sellerId: Id) {
    this._sellers.push(sellerId);
    return this;
  }

  build() {
    const operation = Operation.create({
      id: this._id,
      name: this._name,
      date: this._date,
      status: this._status,
    });

    // adiciona sellers depois da criação
    this._sellers.forEach(sellerId => operation.addSeller(sellerId));

    return operation;
  }
}
