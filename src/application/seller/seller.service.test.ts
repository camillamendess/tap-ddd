import { SellerService } from "./seller.service";
import { SellerBuilder } from "../../tests/builders/seller.builder";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { WorkRole } from "../../domain/seller/value-objects/assignment.value-object";
import { PrismaSellerRepository } from "src/infrastructure/repositories/prisma-seller.repository";
import { CatalogType } from "src/domain/seller/entities/catalog.entity";
import { PrismaService } from "src/infrastructure/prisma.service";
import { NotFoundException } from "@nestjs/common";

const prismaMock = {
  operation: {
    create: jest.fn(),
    findUnique: jest.fn(),
  },
  seller: {
    create: jest.fn(),
    findUnique: jest.fn(),
  },
} as unknown as PrismaService;

describe("SellerService", () => {
  let service: SellerService;
  let sellerRepository: PrismaSellerRepository;

  beforeAll(() => {
    sellerRepository = new PrismaSellerRepository(prismaMock);
    service = new SellerService(sellerRepository);
  });

  // === SELLER ===
  it("should create a seller", async () => {
    const seller = await service.createSeller({
      operationId: Id.generate().toString(),
      name: "Camilla Store",
      cpf: "12345678901",
    });

    expect(seller.name).toBe("Camilla Store");
    expect(seller.cpf).toBe("12345678901");

    const stored = await sellerRepository.findById(new Id(seller.id));
    expect(stored).not.toBeNull();
  });

  it("should get a seller by id", async () => {
    const builtSeller = SellerBuilder.create().build();
    await sellerRepository.save(builtSeller);

    const seller = await service.getSellerById(builtSeller.id.toString());
    expect(seller.id.toString()).toBe(builtSeller.id.toString());
  });

  // === OPERATOR ===
  it("should add operator to seller", async () => {
    const builtSeller = SellerBuilder.create().build();
    await sellerRepository.save(builtSeller);

    const operator = await service.addOperatorToSeller({
      sellerId: builtSeller.id.toString(),
      name: "Operador 1",
    });

    expect(operator.name).toBe("Operador 1");
    const updatedSeller = await sellerRepository.findById(builtSeller.id);
    if (!updatedSeller) throw new NotFoundException("Seller not found");

    expect(updatedSeller.operators.length).toBe(1);
  });

  // === CATALOG ===
  it("should create catalog for seller", async () => {
    const seller = SellerBuilder.create().build();
    await sellerRepository.save(seller);

    const catalog = await service.createCatalogForSeller(seller.id.toString(), {
      type: CatalogType.PISTA,
      name: "Bebidas Frias",
    });

    expect(catalog.name).toBe("Bebidas Frias");

    const updatedSeller = await sellerRepository.findById(seller.id);
    if (!updatedSeller) throw new NotFoundException("Seller not found");

    expect(updatedSeller.catalogs.length).toBe(1);
  });

  it("should add catalog item to seller catalog", async () => {
    const seller = SellerBuilder.create().build();
    await sellerRepository.save(seller);

    const catalog = await service.createCatalogForSeller(seller.id.toString(), {
      type: CatalogType.PISTA,
      name: "Bebidas Frias",
    });

    const item = await service.addCatalogItem({
      sellerId: seller.id.toString(),
      catalogId: catalog.id,
      name: "Coca Cola",
      price: 5,
      category: "Refrigerante",
    });

    expect(item.name).toBe("Coca Cola");
    expect(item.price).toBe(5);
  });

  // === ASSIGNMENTS ===
  it("should assign operator to catalog", async () => {
    const seller = SellerBuilder.create().build();
    await sellerRepository.save(seller);

    const operator = await service.addOperatorToSeller({
      sellerId: seller.id.toString(),
      name: "Operador 1",
    });

    const catalog = await service.createCatalogForSeller(seller.id.toString(), {
      type: CatalogType.PISTA,
      name: "Bebidas Frias",
    });

    const assignment = await service.assignOperatorToCatalog({
      sellerId: seller.id.toString(),
      operatorId: operator.id,
      catalogId: catalog.id,
      role: WorkRole.BAR,
    });

    expect(assignment.operatorId).toBe(operator.id);
    expect(assignment.catalogId).toBe(catalog.id);
    expect(assignment.role).toBe(WorkRole.BAR);
  });
});
