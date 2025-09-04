import { ValueObject } from "../value-object";

export class Cpf implements ValueObject {
  private readonly _value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("CPF is required");
    }

    const cleanedCpf = value.replace(/\D/g, "");
    if (cleanedCpf.length !== 11) {
      throw new Error("CPF must be 11 digits");
    }

    this._value = cleanedCpf;
  }

  static create(value: string): Cpf {
    return new Cpf(value);
  }

  get value(): string {
    return this._value;
  }

  equals(other: Cpf): boolean {
    return this._value === other._value;
  }

  toString(): string {
    return this._value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
