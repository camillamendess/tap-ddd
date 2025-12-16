import { Injectable, NotFoundException } from "@nestjs/common";
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
import { Price } from "src/domain/sale/value-objects/price.value-object";
import { SellerRepository } from "src/domain/seller/repositories/seller.repository.interface";

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly sellerRepository: SellerRepository,
    private readonly eventBus: EventBus
  ) {}

  async createOrder(input: CreateOrderInputDTO): Promise<CreateOrderOutputDTO> {
    const catalog = await this.sellerRepository.findCatalogById(
      new Id(input.sellerId),
      new Id(input.catalogId)
    );

    if (!catalog) {
      throw new NotFoundException("Catalog not found");
    }

    const items = input.items.map((item) => {
      const catalogItem = catalog.items.find(
        (i) => i.id.toString() === item.catalogItemId.toString()
      );

      if (!catalogItem) {
        throw new NotFoundException(
          `Catalog item not found: ${item.catalogItemId}`
        );
      }

      return new SaleItem(
        new Id(catalogItem.id.toString()),
        catalogItem.name,
        item.quantity,
        Price.fromNumber(catalogItem.price.valueOf(), "BRL")
      );
    });

    const order = Order.create({
      operationId: new Id(input.operationId),
      sellerId: new Id(input.sellerId),
      operatorId: new Id(input.operatorId),
      catalogId: new Id(input.catalogId),
      items: items,
    });

    await this.orderRepository.save(order);

    return {
      id: order.id.toString(),
      operationId: input.operationId,
      sellerId: input.sellerId,
      operatorId: input.operatorId,
      catalogId: input.catalogId,
      items: order.items.map((i) => ({
        catalogItemId: i.catalogItemId.toString(),
        name: i.name,
        quantity: i.quantity,
        price: i.price.valueOf(),
        total: i.total,
      })),
      paid: false,
    };
  }

  async markOrderAsPaid(orderId: Id): Promise<void> {
    const order = await this.orderRepository.findById(orderId);
    if (!order) throw new NotFoundException("Order not found");

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
