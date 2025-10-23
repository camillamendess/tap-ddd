import { Injectable } from "@nestjs/common";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { Seller } from "../../domain/seller/seller.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { Cpf } from "../../domain/common/value-objects/cpf.value-object";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaSellerRepository implements SellerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(seller: Seller): Promise<Id> {
    await this.prisma.seller.create({
      data: {
        id: seller.id.toString(),
        name: seller.name,
        cpf: seller.cpf.toString(),
        operationId: seller.operationId.toString(),
      },
    });

    return seller.id;
  }

  async findById(id: Id): Promise<Seller | null> {
    const record = await this.prisma.seller.findUnique({
      where: { id: id.toString() },
    });

    if (!record) return null;

    if (!record.operationId) {
      throw new Error("Seller record missing operationId");
    }

    // Reconstrói o aggregate e retorna
    return Seller.create({
      id: new Id(record.id),
      operationId: new Id(record.operationId),
      name: record.name,
      cpf: Cpf.create(record.cpf),
    });
  }

  async remove(id: Id): Promise<Id> {
    await this.prisma.seller.delete({
      where: { id: id.toString() },
    });

    return id;
  }
}
