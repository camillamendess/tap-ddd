import { Aggregate } from "../common/aggregate";
import { Id } from "../common/value-objects/id.value-object";
import { Catalog } from "./entities/catalog.entity";

/* 
  Agregado Operation - representa o coração do sistema, responsável por:
  Gerenciar o evento;
  Seus múltiplos catálogos;
  A escala da equipe;
  E as vendas;
*/

export class Operation extends Aggregate {
  private _catalogs: Catalog[] = [];

  constructor(
    readonly id: Id,
    readonly _sellerId: Id,
    private _name: string,
    private _date: Date
  ) {
    super();
  }

  // Método de fábrica
  static create(input: CreateOperationInput) {
    const id = input.id ?? Id.generate();
    return new Operation(id, input.sellerId, input.name, input.date);
  }

  // Criar uma Operation.

  /* Criar múltiplos cardápios (Catalogs) para esse evento, como:
    Um para a Pista
    Outro para o Camarote
    Cada um com seus próprios produtos e preços.
  */

  addCatalog(catalog: Catalog) {
    const exists = this._catalogs.find((catalog) => catalog.id.equals(catalog.id));
    if (exists) {
      throw new Error("Catalog already exists");
    }
    this._catalogs.push(catalog);
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

}

interface CreateOperationInput {
  id?: Id
  sellerId: Id;
  name: string;
  date: Date;
}