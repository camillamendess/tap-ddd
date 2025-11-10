import { IEvent } from "@nestjs/cqrs";
import { Id } from "../../../domain/common/value-objects/id.value-object";
import { SaleItem } from "../../../domain/sale/value-objects/sale-item.value-object";

export class OrderPaidEvent implements IEvent {
  constructor(
    public readonly orderId: Id,
    public readonly operationId: Id,
    public readonly sellerId: Id,
    public readonly operatorId: Id,
    public readonly catalogId: Id,
    public readonly items: SaleItem[]
  ) {}
}
