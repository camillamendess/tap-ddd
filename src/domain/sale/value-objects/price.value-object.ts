import { ValueObject } from "../../common/value-object";

export class Price implements ValueObject {
  private readonly _amount: number;
  private readonly _currency: string;

  private constructor(
    amount: number,
    currency: string
  ) {
    if (amount < 0) {
      throw new Error("Price cannot be negative");
    }

    this._amount = amount;
    this._currency = currency;
  }

  static fromNumber(value: number, currency: string): Price {
    return new Price(value, currency);
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  valueOf(): number {
    return this._amount;
  }

  equals(other: Price): boolean {
    return (
      this._amount === other._amount &&
      this._currency === other._currency
    );
  }

  add(other: Price): Price {
    if (this.currency !== other.currency) throw new Error("Currency mismatch");
    return new Price(this._amount + other._amount, this.currency);
  }

  multiply(factor: number): Price {
    return new Price(this._amount * factor, this.currency);
  }

  toString(): string {
    return `${this.currency} ${this._amount.toFixed(2)}`;
  }
}