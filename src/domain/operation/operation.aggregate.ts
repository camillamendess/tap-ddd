import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { CatalogItem, CreateCatalogItemInput } from "./entities/catalog-item.entity";
import { Catalog, CreateCatalogInput } from "./entities/catalog.entity";
import { Sale } from "./entities/sale.entity";
import { WorkAssignment, WorkRole } from "./value-objects/assignment.value-object";
import { SaleItem } from "./value-objects/sale-item.value-object";

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
    private _assignments: WorkAssignment[] = [],
    private _sales: Sale[] = []
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
    const catalogExists = this._catalogs.some((c) => c.id.equals(catalogId));

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

  registerSale(operatorId: Id, catalogId: Id, items: { itemId: Id, quantity: number }[]): Sale {
    if (this._status !== OperationStatus.ACTIVE) {
      throw new Error("Operation is not active");
    }

    const isAssigned = this._assignments.some(a =>
      a.equals(new WorkAssignment(operatorId, catalogId, "CAIXA"))
    );

    if (!isAssigned) {
      throw new Error("Operator not assigned to this catalog");
    }

    const catalog = this._catalogs.find(c => c.id.equals(catalogId));
    if (!catalog) {
      throw new Error("Catalog not found");
    }

    const saleItems = items.map(inputItem => {
      const catalogItem = catalog.items.find(i => i.id.equals(inputItem.itemId));
      if (!catalogItem) {
        throw new Error(`Item ${inputItem.itemId.toString()} not found in catalog`);
      }

      return new SaleItem(
        catalogItem.id,
        catalogItem.name,
        inputItem.quantity,
        catalogItem.price,
      );
    });

    const sale = Sale.create({
      operatorId,
      catalogId,
      items: saleItems,
    });

    this._sales.push(sale);
    return sale;
  }

  get sellerId(): Id {
    return this._sellerId;
  }

  get name(): string {
    return this._name;
  }

  get date(): Date {
    return this._date;
  }

  get status(): OperationStatus {
    return this._status;
  }

  get catalogs(): ReadonlyArray<Catalog> {
    return this._catalogs;
  }

  get assignments(): ReadonlyArray<WorkAssignment> {
    return this._assignments;
  }

  get sales(): ReadonlyArray<Sale> {
    return this._sales;
  }
}

export interface CreateOperationInput {
  id?: Id
  sellerId: Id;
  name: string;
  date: Date;
  status?: OperationStatus;
}