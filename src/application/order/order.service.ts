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
import { SaleItemOutputDTO } from "../sale/dtos/sale-service.dto";
import { SaleItem } from "src/domain/sale/value-objects/sale-item.value-object";

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

    const eventItems: SaleItemOutputDTO[] = order.items.map(
      (item: SaleItem) => ({
        name: item.name,
        price: item.price.valueOf(),
        quantity: item.quantity,
        total: item.total,
      })
    );

    this.eventBus.publish(
      new OrderPaidEvent(
        order.id.toString(),
        order.operationId.toString(),
        order.sellerId.toString(),
        order.operatorId.toString(),
        order.catalogId.toString(),
        eventItems
      )
    );
  }
}
