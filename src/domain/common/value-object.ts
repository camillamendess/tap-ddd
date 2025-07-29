// Um objeto de valor é um objeto de domínio que não possui identidade própria, mas é definido por seus atributos
export interface ValueObject {
  equals(other: this): boolean;
}
