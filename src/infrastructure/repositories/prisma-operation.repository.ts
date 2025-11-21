import { Injectable } from "@nestjs/common";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import {
  Operation,
  OperationStatus,
} from "../../domain/operation/operation.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaOperationRepository implements OperationRepository {
  constructor(private prisma: PrismaService) {}

  async save(operation: Operation): Promise<Id> {
    await this.prisma.operation.create({
      data: {
        id: operation.id.toString(),
        name: operation.name,
        date: operation.date,
        status: operation.status,
        sellers: {
          connect: operation.sellerIds.map((id) => ({ id: id.toString() })),
        },
      },
    });
    return operation.id;
  }

  async findById(id: Id): Promise<Operation | null> {
    const record = await this.prisma.operation.findUnique({
      where: { id: id.toString() },
      include: {
        sellers: true,
      },
    });

    if (!record) return null;

    const operation = Operation.create({
      id: new Id(record.id),
      name: record.name,
      date: record.date,
      status: record.status as OperationStatus,
    });

    record.sellers.forEach((seller) => {
      operation.addSeller(new Id(seller.id));
    });

    return operation;
  }

  async findAll(): Promise<Operation[]> {
    const records = await this.prisma.operation.findMany({
      include: { sellers: true },
    });

    return records.map((record) => {
      const operation = Operation.create({
        id: new Id(record.id),
        name: record.name,
        date: record.date,
        status: record.status as OperationStatus,
      });

      record.sellers.forEach((s) => operation.addSeller(new Id(s.id)));

      return operation;
    });
  }
}
