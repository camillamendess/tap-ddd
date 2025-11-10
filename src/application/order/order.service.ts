import { Injectable } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { OrderPaidEvent } from "../sale/events/order-paid.event";
import { OrderRepository } from "src/domain/order/repositories/order.repository.interface";
import { Order } from "src/domain/order/order.aggregate";
import {
  CreateOrderInputDTO,
  CreateOrderOutputDTO,
} from "./dtos/order-service.dto";

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly eventBus: EventBus
  ) {}

  async createOrder(input: CreateOrderInputDTO): Promise<CreateOrderOutputDTO> {
    const order = Order.create({
      operationId: new Id(input.operationId),
      sellerId: new Id(input.sellerId),
      operatorId: new Id(input.operatorId),
      catalogId: new Id(input.catalogId),
      items: input.items,
    });

    await this.orderRepository.save(order);

    return {
      id: order.id.toString(),
      operationId: input.operationId,
      sellerId: input.sellerId,
      operatorId: input.operatorId,
      catalogId: input.catalogId,
      items: input.items,
      paid: false,
    };
  }

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
