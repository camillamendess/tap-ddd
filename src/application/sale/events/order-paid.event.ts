import { IEvent } from "@nestjs/cqrs";
import { SaleItemOutputDTO } from "../dtos/sale-service.dto";

export class OrderPaidEvent implements IEvent {
  constructor(
    public readonly orderId: string,
    public readonly operationId: string,
    public readonly sellerId: string,
    public readonly operatorId: string,
    public readonly catalogId: string,
    public readonly items: SaleItemOutputDTO[]
  ) {}
}
