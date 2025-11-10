import { Injectable } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { OrderPaidEvent } from "../sale/events/order-paid.event";
import { OrderRepository } from "src/domain/order/repositories/order.repository.interface";

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly eventBus: EventBus
  ) {}

  async markOrderAsPaid(orderId: Id): Promise<void> {
    const order = await this.orderRepository.findById(orderId);
    if (!order) throw new Error("Order not found");

    order.markAsPaid();

    await this.orderRepository.save(order);

    this.eventBus.publish(
      new OrderPaidEvent(
        order.id,
        order["operationId"],
        order["sellerId"],
        order["operatorId"],
        order["catalogId"],
        [...order.items]
      )
    );
  }
}
