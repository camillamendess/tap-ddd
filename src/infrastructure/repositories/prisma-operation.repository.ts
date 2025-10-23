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

  // Salva uma operação no banco
  async save(operation: Operation): Promise<Id> {
    await this.prisma.operation.create({
      data: {
        id: operation.id.toString(), // convertendo Id para string
        name: operation.name,
        date: operation.date,
        status: operation.status,
      },
    });
    return operation.id; // retorna o Id da operação criada
  }

  async findById(id: Id): Promise<Operation | null> {
    const record = await this.prisma.operation.findUnique({
      where: { id: id.toString() },
    });

    if (!record) return null;

    return Operation.create({
      id: new Id(record.id),
      name: record.name,
      date: record.date,
      status: record.status as OperationStatus,
    });
  }

  async findAll(): Promise<Operation[]> {
    const records = await this.prisma.operation.findMany();

    return records.map((r) =>
      Operation.create({
        id: new Id(r.id),
        name: r.name,
        date: r.date,
        status: r.status as OperationStatus,
      })
    );
  }
}
