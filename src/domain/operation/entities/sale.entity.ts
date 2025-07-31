import { Entity } from "../../common/entity";
import { Id } from "../../common/value-objects/id.value-object";
import { SaleItem } from "../value-objects/sale-item.value-object";

export class Sale implements Entity {
  private constructor(
    public readonly id: Id,
    public readonly operatorId: Id,
    public readonly catalogId: Id,
    public readonly items: SaleItem[],
    public readonly total: number,
    public readonly createdAt: Date
  ) { }

  static create(input: CreateSaleInput): Sale {
    if (!input.items || input.items.length === 0) {
      throw new Error("Sale must have at least one item");
    }

    const total = input.items.reduce((accumulator, currentItem) => (accumulator + currentItem.total), 0);

    const sale = new Sale(
      Id.generate(),
      input.operatorId,
      input.catalogId,
      input.items,
      total,
      new Date()
    );

    return sale;
  }
}

export interface CreateSaleInput {
  operatorId: Id;
  catalogId: Id;
  items: SaleItem[];
}