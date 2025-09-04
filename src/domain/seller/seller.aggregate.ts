import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { CreateOperationInput, Operation } from "../operation/operation.aggregate";
import { CatalogItem, CreateCatalogItemInput } from "./entities/catalog-item.entity";
import { Catalog, CreateCatalogInput } from "./entities/catalog.entity";
import { CreateOperatorInput, Operator } from "./entities/operator.entity";
import { Sale } from "../sale/sale.aggregate";
import { WorkAssignment, WorkRole } from "./value-objects/assignment.value-object";
import { SaleItem } from "../sale/value-objects/sale-item.value-object";
import { Cpf } from "../common/value-objects/cpf.value-object";

export class Seller extends Aggregate {
  constructor(
    readonly id: Id,
    private _operationId: Id,
    private _name: string,
    private _cpf: Cpf,
    private _operators: Operator[] = [],
    private _catalogs: Catalog[] = [],
    private _assignments: WorkAssignment[] = [],
    private _sales: Id[] = []
  ) {
    super();
  }

  static create(input: CreateSellerInput) {
    const id = input.id ?? Id.generate();

    const seller = new Seller(id, input.operationId, input.name, input.cpf);

    seller.validate();

    return seller;
  }

  private validate() {
    if (!(this.id instanceof Id)) {
      throw new Error("Invalid ID type");
    }

    if (!this._name || this._name.trim() === "") {
      throw new Error("Name is required");
    }
  }

  addOperator(input: CreateOperatorInput): Operator {
    // Se o sellerId do operador não for igual ao id do seller atual (this.id), significa que ele pertence a outro Seller.s
    if (input.sellerId && !input.sellerId.equals(this.id)) {
      throw new Error("Operator belongs to another Seller");
    }

    const exists = this._operators.find(op => op.id.equals(input.id));
    if (exists) {
      throw new Error("Operator already exists");
    }

    const operator = Operator.create({ ...input, sellerId: this.id });

    this._operators.push(operator);

    return operator;
  }

  getOperatorById(operatorId: Id): Operator {
    const operator = this._operators.find(op => op.id.equals(operatorId));

    if (!operator) {
      throw new Error("Operator not found");
    }

    return operator;
  }

  // Omit<T, K> é um helper do TypeScript -> O sellerId é automaticamente injetado somente pelo Seller, mais seguro
  createCatalog(input: Omit<CreateCatalogInput, "sellerId">): Catalog {
    const exists = this._catalogs.find((_catalog) => _catalog.type == (input.type));
    if (exists) {
      throw new Error(`Catalog of type ${input.type} already exists for this seller`);
    }

    const catalog = Catalog.create({ ...input, sellerId: this.id });

    this._catalogs.push(catalog);

    return catalog;
  }


  addCatalogItem(catalogId: Id, itemInput: Omit<CreateCatalogItemInput, "catalogId">): CatalogItem {
    const catalog = this._catalogs.find(c => c.id.equals(catalogId));
    if (!catalog) {
      throw new Error("Catalog not found");
    }

    const item = CatalogItem.create({
      ...itemInput,
      catalogId: catalog.id,
    });

    catalog.addItem(item);

    return item;
  }

  assignOperatorToCatalog(operatorId: Id, catalogId: Id, role: WorkRole) {
    const catalogExists = this._catalogs.some((c) => c.id.equals(catalogId));

    if (!catalogExists) {
      throw new Error("Catalog not found for this seller");
    }

    const operatorExists = this._operators.some(o => o.id.equals(operatorId));
    if (!operatorExists) {
      throw new Error("Operator not found for this seller");
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

    // Verifica se o operador existe nesse seller
    const operator = this._operators.find(o => o.id.equals(operatorId));
    if (!operator) {
      throw new Error("Operator not found for this seller");
    }

    // Verifica se o catálogo existe nesse seller
    const catalog = this._catalogs.find(c => c.id.equals(catalogId));
    if (!catalog) {
      throw new Error("Catalog not found for this seller");
    }

    const isAssigned = this._assignments.some(a =>
      a.equals(new WorkAssignment(operatorId, catalogId, "CAIXA"))
    );

    // Verifica se o operador está atribuído ao catálogo
    if (!isAssigned) {
      throw new Error("Operator not assigned to this catalog");
    }

    // Cria os SaleItems
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

    // Cria a venda
    const sale = Sale.create({
      operationId: this._operationId,
      operatorId,
      sellerId: this.id,
      catalogId,
      items: saleItems,
    });

    this._sales.push(sale.id);
    return sale;
  }

  toJSON() {
    return {
      id: this.id.toString(),
      operationId: this._operationId.toString(),
      name: this._name,
      cpf: this._cpf.toString(),
      operators: this._operators.map(op => op.toString()),
      catalogs: this._catalogs.map(c => c.toString()),
      assignments: this._assignments.map(a => a.toString()),
      sales: this._sales.map(s => s.toString())
    };
  }

  get operationId(): Id {
    return this._operationId;
  }

  get name(): string {
    return this._name;
  }

  get cpf(): Cpf {
    return this._cpf;
  }

  get operators(): ReadonlyArray<Operator> {
    return this._operators;
  }

  get catalogs(): ReadonlyArray<Catalog> {
    return this._catalogs;
  }

  get assignments(): ReadonlyArray<WorkAssignment> {
    return this._assignments;
  }

  get sales(): ReadonlyArray<Id> {
    return this._sales;
  }

  // TODO - Adicionar toJSON() e fromJSON()
}

export interface CreateSellerInput {
  id?: Id;
  operationId: Id;
  name: string;
  cpf: Cpf;
}