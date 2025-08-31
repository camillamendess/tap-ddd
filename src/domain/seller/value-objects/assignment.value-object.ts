import { ValueObject } from "../../common/value-object";
import { Id } from "../../common/value-objects/id.value-object";

export enum WorkRole {
  CAIXA = "CAIXA",
  BAR = "BAR",
  SUPORTE = "SUPORTE",
}

export class WorkAssignment implements ValueObject {
  constructor(
    public readonly operatorId: Id,
    public readonly catalogId: Id,
    public readonly role: string
  ) {
    if (!operatorId || !catalogId || !role) {
      throw new Error("Invalid work assignment data");
    }
  }

  equals(other: WorkAssignment): boolean {
    if (!(other instanceof WorkAssignment)) return false;
    return (
      this.operatorId.equals(other.operatorId) &&
      this.catalogId.equals(other.catalogId) &&
      this.role === other.role
    );
  }
}