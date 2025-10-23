import { OperationService } from "./operation.service";
import { OperationBuilder } from "../../tests/builders/operation.builder";
import { SellerBuilder } from "../../tests/builders/seller.builder";
import { PrismaOperationRepository } from "../../infrastructure/repositories/prisma-operation.repository";
import { PrismaSellerRepository } from "../../infrastructure/repositories/prisma-seller.repository";
import { Id } from "../../domain/common/value-objects/id.value-object";
import {
  AddSellerInputDTO,
  CreateOperationInputDTO,
  RemoveSellerInputDTO,
} from "./dtos/operation-service.dto";
import { PrismaService } from "src/infrastructure/prisma.service";

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

describe("OperationService", () => {
  let service: OperationService;
  let operationRepository: PrismaOperationRepository;
  let sellerRepository: PrismaSellerRepository;

  beforeAll(() => {
    operationRepository = new PrismaOperationRepository(prismaMock);
    sellerRepository = new PrismaSellerRepository(prismaMock);
    service = new OperationService(operationRepository, sellerRepository);
  });

  it("should create an operation", async () => {
    const input: CreateOperationInputDTO = {
      name: "Festival de Inverno",
      date: new Date("2025-09-01"),
      status: "ACTIVE",
    };

    const operation = await service.createOperation(input);

    expect(operation).toHaveProperty("id");
    expect(operation.name).toBe("Festival de Inverno");

    const stored = await operationRepository.findById(new Id(operation.id));
    expect(stored).not.toBeNull();
  });

  it("should add a seller to an existing operation", async () => {
    const operation = OperationBuilder.create()
      .withName("Festa Junina")
      .build();
    await operationRepository.save(operation);

    const sellerInput: AddSellerInputDTO = {
      name: "Camilla Seller",
      cpf: "12345678901",
      operationId: operation.id.toString(),
    };

    const result = await service.addSeller(sellerInput);

    expect(result.seller.name).toBe("Camilla Seller");
    expect(result.operation.sellers).toContain(result.seller.id);

    const updatedOperation = await operationRepository.findById(operation.id);
    expect(
      updatedOperation?.sellerIds.some((id) =>
        id.equals(new Id(result.seller.id))
      )
    ).toBe(true);
  });

  it("should remove a seller from an operation", async () => {
    const operation = OperationBuilder.create()
      .withName("Feira de Tecnologia")
      .build();
    await operationRepository.save(operation);

    const seller = SellerBuilder.create()
      .withOperationId(operation.id)
      .withCpf("98765432100")
      .build();
    await sellerRepository.save(seller);
    operation.addSeller(seller.id);
    await operationRepository.save(operation);

    const input: RemoveSellerInputDTO = {
      operationId: operation.id.toString(),
      sellerId: seller.id.toString(),
    };

    const result = await service.removeSeller(input);

    expect(result.updatedOperation.sellers).toHaveLength(0);

    const deletedSeller = await sellerRepository.findById(seller.id);
    expect(deletedSeller).toBeNull();
  });
});
