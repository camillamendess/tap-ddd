import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { OrderRepository } from "../../domain/order/repositories/order.repository.interface";
import { Order, OrderStatus } from "../../domain/order/order.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(order: Order): Promise<Id> {
    await this.prisma.order.upsert({
      where: { id: order.id.toString() },
      update: {
        status: order.status,
        paidAt: order.paidAt ?? null,
      },
      create: {
        id: order.id.toString(),
        operationId: order["operationId"].toString(),
        sellerId: order["sellerId"].toString(),
        catalogId: order["catalogId"].toString(),
        operatorId: order["operatorId"].toString(),
        items: JSON.stringify(order.items),
        total: order.total,
        createdAt: new Date(),
        status: order.status,
      },
    });

    return order.id;
  }

  async findById(id: Id): Promise<Order | null> {
    const record = await this.prisma.order.findUnique({
      where: { id: id.toString() },
    });

    if (!record) return null;

    return Order.create({
      id: new Id(record.id),
      operationId: new Id(record.operationId),
      sellerId: new Id(record.sellerId),
      catalogId: new Id(record.catalogId),
      operatorId: new Id(record.operatorId),
      items: record.items as any,
    });
  }

  async findAll(): Promise<Order[]> {
    const records = await this.prisma.order.findMany();

    return records.map((r) =>
      Order.create({
        id: new Id(r.id),
        operationId: new Id(r.operationId),
        sellerId: new Id(r.sellerId),
        catalogId: new Id(r.catalogId),
        operatorId: new Id(r.operatorId),
        items: r.items as any,
      })
    );
  }
}
