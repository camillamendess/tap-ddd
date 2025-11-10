import { Injectable } from "@nestjs/common";
import { SaleRepository } from "../../domain/sale/repositories/sale.repository.interface";
import { Sale } from "../../domain/sale/sale.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaSaleRepository implements SaleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(sale: Sale): Promise<Id> {
    await this.prisma.sale.create({
      data: {
        id: sale.id.toString(),
        operationId: sale.operationId.toString(),
        sellerId: sale.sellerId.toString(),
        catalogId: sale.catalogId.toString(),
        operatorId: sale.operatorId.toString(),
        orderId: sale["orderId"].toString(),
        total: sale.total,
        createdAt: sale.createdAt,
        items: JSON.stringify(sale.items), // armazenamos JSON para simplificar
      },
    });
    return sale.id;
  }

  async findById(id: Id): Promise<Sale | null> {
    const record = await this.prisma.sale.findUnique({
      where: { id: id.toString() },
    });

    if (!record) return null;

    return Sale.create({
      id: new Id(record.id),
      operationId: new Id(record.operationId),
      sellerId: new Id(record.sellerId),
      catalogId: new Id(record.catalogId),
      operatorId: new Id(record.operatorId),
      orderId: new Id(record.orderId),
      items: record.items as any,
    });
  }

  async findByOperation(operationId: Id): Promise<Sale[]> {
    const records = await this.prisma.sale.findMany({
      where: { operationId: operationId.toString() },
    });

    return records.map((r) =>
      Sale.create({
        id: new Id(r.id),
        operationId: new Id(r.operationId),
        sellerId: new Id(r.sellerId),
        catalogId: new Id(r.catalogId),
        operatorId: new Id(r.operatorId),
        orderId: new Id(r.orderId),
        items: r.items as any,
      })
    );
  }

  async findAll(): Promise<Sale[]> {
    const records = await this.prisma.sale.findMany();

    return records.map((r) =>
      Sale.create({
        id: new Id(r.id),
        operationId: new Id(r.operationId),
        sellerId: new Id(r.sellerId),
        catalogId: new Id(r.catalogId),
        operatorId: new Id(r.operatorId),
        orderId: new Id(r.orderId),
        items: r.items as any,
      })
    );
  }
}
