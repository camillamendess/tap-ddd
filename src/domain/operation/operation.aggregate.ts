import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { CatalogItem, CreateCatalogItemInput } from "./entities/catalog-item.entity";
import { Catalog, CreateCatalogInput } from "./entities/catalog.entity";

/* 
  Agregado Operation - representa o coração do sistema, responsável por:
  Gerenciar o evento;
  Seus múltiplos catálogos;
  A escala da equipe;
  E as vendas;
*/

export class Operation extends Aggregate {

  constructor(
    readonly id: Id,
    readonly _sellerId: Id,
    private _name: string,
    private _date: Date,
    private _catalogs: Catalog[] = []
  ) {
    super();
  }

  static create(input: CreateOperationInput) {
    const id = input.id ?? Id.generate();

    const operation = new Operation(id, input.sellerId, input.name, input.date);

    operation.validate();

    return operation;
  }

  private validate() {
    if (this._name === undefined) {
      throw new Error("Name is required");
    }

    if (this._sellerId === undefined) {
      throw new Error("Seller is required");
    }

    if (this._date === undefined) {
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

  // “Escalar” sua equipe para trabalhar em pontos de venda específicos (associados a um catálogo).

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

}

export interface CreateOperationInput {
  id?: Id
  sellerId: Id;
  name: string;
  date: Date;
}