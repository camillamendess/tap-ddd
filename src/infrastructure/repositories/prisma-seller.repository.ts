import { Injectable } from "@nestjs/common";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { Seller } from "../../domain/seller/seller.aggregate";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { Cpf } from "../../domain/common/value-objects/cpf.value-object";
import { PrismaService } from "../prisma.service";
import {
  Catalog,
  CatalogType,
} from "src/domain/seller/entities/catalog.entity";
import { Operator } from "src/domain/seller/entities/operator.entity";
import { CatalogItem } from "src/domain/seller/entities/catalog-item.entity";

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

  async findAll(): Promise<Seller[]> {
    const records = await this.prisma.seller.findMany();
    return records.map((record) =>
      Seller.create({
        id: new Id(record.id),
        operationId: new Id(record.operationId!),
        name: record.name,
        cpf: Cpf.create(record.cpf),
      })
    );
  }

  async findById(id: Id): Promise<Seller | null> {
    const record = await this.prisma.seller.findUnique({
      where: { id: id.toString() },
    });

    if (!record) return null;

    if (!record.operationId) {
      throw new Error("Seller record missing operationId");
    }

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

  async addOperator(sellerId: Id, operator: Operator): Promise<Operator> {
    await this.prisma.operator.create({
      data: {
        id: operator.id.toString(),
        sellerId: sellerId.toString(),
        name: operator.name,
      },
    });
    return operator;
  }

  async createCatalog(sellerId: Id, catalog: Catalog): Promise<Catalog> {
    await this.prisma.catalog.create({
      data: {
        id: catalog.id.toString(),
        sellerId: sellerId.toString(),
        name: catalog.name,
        type: catalog.type,
      },
    });
    return catalog;
  }

  async findCatalogById(sellerId: Id, catalogId: Id): Promise<Catalog | null> {
    const record = await this.prisma.catalog.findUnique({
      where: {
        id: catalogId.toString(),
        sellerId: sellerId.toString(),
      },
    });
    if (!record) return null;

    return Catalog.create({
      id: new Id(record.id),
      sellerId: new Id(record.sellerId),
      name: record.name,
      type: record.type as CatalogType,
    });
  }

  async addCatalogItem(
    sellerId: Id,
    catalogId: Id,
    item: CatalogItem
  ): Promise<Catalog> {
    await this.prisma.catalogItem.create({
      data: {
        catalogId: catalogId.toString(),
        name: item.name,
        price: item.price.valueOf(),
        category: item.category,
      },
    });

    const catalogRecord = await this.prisma.catalog.findUnique({
      where: {
        id: catalogId.toString(),
        sellerId: sellerId.toString(),
      },
    });

    if (!catalogRecord) {
      throw new Error("Catalog not found");
    }
    return Catalog.create({
      id: new Id(catalogRecord.id),
      sellerId: new Id(catalogRecord.sellerId),
      name: catalogRecord.name,
      type: catalogRecord.type as CatalogType,
    });
  }
}
