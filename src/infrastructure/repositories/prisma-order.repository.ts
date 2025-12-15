import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { OrderRepository } from "../../domain/order/repositories/order.repository.interface";
import { Order } from "../../domain/order/order.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { SaleItem } from "src/domain/sale/value-objects/sale-item.value-object";
import { Price } from "src/domain/sale/value-objects/price.value-object";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(order: Order): Promise<Order> {
    await this.prisma.order.upsert({
      where: { id: order.id.toString() },
      create: {
        id: order.id.toString(),
        sellerId: order.sellerId.toString(),
        operatorId: order.operatorId.toString(),
        catalogId: order.catalogId.toString(),
        operationId: order.operationId.toString(),
        total: order.total,
        createdAt: order.createdAt ?? new Date(),
        status: order.status,
        items: order.items.map((i) => ({
          catalogItemId: i.catalogItemId.toString(),
          name: i.name,
          quantity: i.quantity,
          price: i.price.valueOf(),
        })),
      },
      update: {
        total: order.total,
        status: order.status,
        paidAt: order.paidAt ?? undefined,
        items: order.items.map((i) => ({
          catalogItemId: i.catalogItemId.toString(),
          name: i.name,
          quantity: i.quantity,
          price: i.price.valueOf(),
        })),
      },
    });

    return order;
  }

  async findById(id: Id): Promise<Order | null> {
    const record = await this.prisma.order.findUnique({
      where: { id: id.toString() },
    });

    if (!record) return null;

    const items = (record.items as any[]).map((i) => {
      return new SaleItem(
        new Id(i.catalogItemId),
        i.name,
        i.quantity,
        Price.fromNumber(i.price, "BRL")
      );
    });

    return Order.fromJSON(record);
  }

  async findAll(): Promise<Order[]> {
    const records = await this.prisma.order.findMany();

    return records.map(Order.fromJSON);
  }
}
