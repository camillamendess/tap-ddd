import { Seller } from "../../domain/seller/seller.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { Cpf } from "../../domain/common/value-objects/cpf.value-object";
import { Operator } from "../../domain/seller/entities/operator.entity";

export class SellerBuilder {
  private _id: Id = Id.generate();
  private _operationId: Id = Id.generate();
  private _name: string = "Camilla Store";
  private _cpf: Cpf = new Cpf("12345678901");
  private _operators: Operator[] = [];

  static create() {
    return new SellerBuilder();
  }

  withId(id: Id) {
    this._id = id;
    return this;
  }

  withOperationId(operationId: Id) {
    this._operationId = operationId;
    return this;
  }

  withName(name: string) {
    this._name = name;
    return this;
  }

  withCpf(cpf: string) {
    this._cpf = new Cpf(cpf);
    return this;
  }

  withOperator(operator: Operator) {
    this._operators.push(operator);
    return this;
  }

  build(): Seller {
    return Seller.create({
      id: this._id,
      operationId: this._operationId,
      name: this._name,
      cpf: this._cpf,
    });
  }
}
