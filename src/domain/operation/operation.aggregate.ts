import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { CatalogItem, CreateCatalogItemInput } from "./entities/catalog-item.entity";
import { Catalog, CreateCatalogInput } from "./entities/catalog.entity";
import { WorkAssignment, WorkRole } from "./value-objects/Assignment.value-object";

export enum OperationStatus {
  PLANNED = "PLANNED",
  ACTIVE = "ACTIVE"
}

export class Operation extends Aggregate {

  constructor(
    readonly id: Id,
    readonly _sellerId: Id,
    private _name: string,
    private _date: Date,
    private _status: OperationStatus = OperationStatus.PLANNED,
    private _catalogs: Catalog[] = [],
    private _assignments: WorkAssignment[] = []
  ) {
    super();
  }

  static create(input: CreateOperationInput) {
    const id = input.id ?? Id.generate();

    const operation = new Operation(
      id,
      input.sellerId,
      input.name,
      input.date,
      input.status
    );

    operation.validate();

    return operation;
  }

  private validate() {
    if (!(this.id instanceof Id)) {
      throw new Error("Invalid ID type");
    }

    if (!this._name || this._name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!this._sellerId) {
      throw new Error("Seller is required");
    }

    if (!this._date) {
      throw new Error("Date is required");
    }
  }

  createCatalog(input: CreateCatalogInput) {
    const exists = this._catalogs.find((_catalog) => _catalog.type == (input.type));
    if (exists) {
      throw new Error(`Catalog of type ${input.type} already exists`);
    }

    const catalog = Catalog.create(input);

    this._catalogs.push(catalog);

    return catalog;
  }

  addCatalogItem(catalogId: Id, itemInput: CreateCatalogItemInput) {
    const catalog = this._catalogs.find(c => c.id.equals(catalogId));
    if (!catalog) {
      throw new Error("Catalog not found");
    }

    const item = CatalogItem.create(itemInput);

    catalog.addItem(item);

    return item;
  }

  assignOperator(operatorId: Id, catalogId: Id, role: WorkRole) {
    const catalogExists = this._catalogs.some((c) => c.id.equals(catalogId)); // Se retornar true existe

    if (!catalogExists) {
      throw new Error("Catalog not found");
    }

    const newAssignment = new WorkAssignment(operatorId, catalogId, role);

    const alreadyAssigned = this._assignments.some((a) => a.equals(newAssignment));
    if (alreadyAssigned) {
      throw new Error("Operator already assigned to this catalog with this role");
    }

    this._assignments.push(newAssignment);

    return newAssignment;
  }

  activate() {
    if (this._catalogs.length === 0) {
      throw new Error("Cannot activate operation without at least one catalog");
    }

    const hasItems = this._catalogs.some((c) => c.items.length > 0);
    if (!hasItems) {
      throw new Error("Cannot activate operation without at least one catalog containing items");
    }

    this._status = OperationStatus.ACTIVE;
  }

  // Ter um funcionário no caixa registrando todas as vendas de fichas, para que ele possa ver o faturamento em tempo real.

  get sellerId(): Id {
    return this._sellerId;
  }

  get name(): string {
    return this._name;
  }

  get date(): Date {
    return this._date;
  }

  get catalogs(): Catalog[] {
    return this._catalogs;
  }

  get status(): OperationStatus {
    return this._status;
  }

  get assignments(): WorkAssignment[] {
    return this._assignments;
  }

}

export interface CreateOperationInput {
  id?: Id
  sellerId: Id;
  name: string;
  date: Date;
  status?: OperationStatus;
}