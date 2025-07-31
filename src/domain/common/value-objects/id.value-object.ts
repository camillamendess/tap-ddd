import { ValueObject } from "../value-object";

export class Id implements ValueObject {
  constructor(private readonly value: string) {
    if (value === undefined) {
      throw new Error("Id is required");
    }

    if (value.length === 0) {
      throw new Error("Id cannot be empty");
    }
  }

  static generate() {
    return new Id(crypto.randomUUID());
  }

  equals(other: this): boolean {
    return other.value === this.value;
  }

  toString(): string {
    return this.value;
  }
}