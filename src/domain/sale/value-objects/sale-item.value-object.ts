import { ValueObject } from "../../common/value-object";
import { Id } from "../../common/value-objects/id.value-object";
import { Price } from "./price.value-object";

export class SaleItem implements ValueObject {
  constructor(
    public readonly itemId: Id,
    public readonly name: string,
    public readonly quantity: number,
    public readonly price: Price
  ) {
    if (quantity <= 0) throw new Error("Quantity must be greater than 0");
  }

  equals(other: SaleItem): boolean {
    return (
      this.itemId.equals(other.itemId) &&
      this.name === other.name &&
      this.quantity === other.quantity &&
      this.price.equals(other.price)
    );
  }

  get total(): number {
    return this.price.multiply(this.quantity).valueOf();
  }
}