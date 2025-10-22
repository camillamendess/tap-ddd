import { OperationService } from "./operation.service";
import { OperationBuilder } from "../../tests/builders/operation.builder";
import { SellerBuilder } from "../../tests/builders/seller.builder";
import { PrismaOperationRepository } from "../../infrastructure/repositories/prisma-operation.repository";
import { PrismaSellerRepository } from "../../infrastructure/repositories/prisma-seller.repository";
import { Cpf } from "../../domain/common/value-objects/cpf.value-object";
import { Id } from "../../domain/common/value-objects/id.value-object";

describe("OperationService", () => {
  let service: OperationService;
  let operationRepository: PrismaOperationRepository;
  let sellerRepository: PrismaSellerRepository;

  beforeEach(() => {
    operationRepository = new PrismaOperationRepository();
    sellerRepository = new PrismaSellerRepository();
    service = new OperationService(operationRepository, sellerRepository);
  });

  it("should create an operation", async () => {
    const operation = await service.createOperation({
      name: "Festival",
      date: new Date("2025-09-01"),
    });

    expect(operation.name).toBe("Festival");
    const stored = await operationRepository.findById(operation.id);
    expect(stored).not.toBeNull();
  });

  it("should add seller to operation", async () => {
    const operation = OperationBuilder.create()
      .withName("Festa Junina")
      .build();
    await operationRepository.save(operation);

    const seller = await service.addSeller({
      name: "Seller A",
      operationId: operation.id,
      cpf: Cpf.create("12345678901"),
    });

    expect(seller.name).toBe("Seller A");
    const updatedOperation = await operationRepository.findById(operation.id);
    expect(updatedOperation?.sellerIds.some((id) => id.equals(seller.id))).toBe(
      true
    );
  });

  it("should remove seller from operation", async () => {
    const operation = OperationBuilder.create().build();
    await operationRepository.save(operation);

    const seller = SellerBuilder.create().withOperationId(operation.id).build();
    await sellerRepository.save(seller);
    operation.addSeller(seller.id);
    await operationRepository.save(operation);

    await service.removeSeller(operation.id, seller.id);

    const updatedOperation = await operationRepository.findById(operation.id);
    expect(updatedOperation?.sellerIds.length).toBe(0);
    expect(await sellerRepository.findById(seller.id)).toBeNull();
  });

  it("should add operator to seller", async () => {
    const operation = OperationBuilder.create().build();
    await operationRepository.save(operation);

    const seller = SellerBuilder.create().withOperationId(operation.id).build();
    await sellerRepository.save(seller);

    const operator = await service.addOperatorToSeller({
      id: Id.generate(),
      sellerId: seller.id,
      name: "Operador 1",
    });

    expect(operator.name).toBe("Operador 1");
  });
});
