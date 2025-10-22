import { Injectable } from "@nestjs/common";
import { Id } from "../../domain/common/value-objects/id.value-object";
import {
  CreateOperationInput,
  Operation,
  OperationStatus,
} from "../../domain/operation/operation.aggregate";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { CreateCatalogInput } from "../../domain/seller/entities/catalog.entity";
import { CreateOperatorInput } from "../../domain/seller/entities/operator.entity";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import {
  CreateSellerInput,
  Seller,
} from "../../domain/seller/seller.aggregate";
import { WorkRole } from "../../domain/seller/value-objects/assignment.value-object";
import {
  CreateOperationInputDTO,
  CreateOperationOutputDTO,
} from "./dtos/operation-service.dto";

@Injectable()
export class OperationService {
  constructor(
    private readonly operationRepository: OperationRepository,
    private readonly sellerRepository: SellerRepository
  ) {}

  // OPERATION

  async createOperation(
    dto: CreateOperationInputDTO
  ): Promise<CreateOperationOutputDTO> {
    const operation = Operation.create({
      id: Id.generate(),
      name: dto.name,
      date: new Date(dto.date),
      status: dto.status as OperationStatus,
    });
    await this.operationRepository.save(operation);
    return operation.toJSON();
  }

  async findOperationById(id: string) {
    const operation = await this.operationRepository.findById(new Id(id));
    if (!operation) throw new Error("Operation not found");
    return operation;
  }

  async activateOperation(id: string) {
    const operation = await this.findOperationById(id);
    operation.activate();
    await this.operationRepository.save(operation);
    return operation.toJSON();
  }

  // SELLER (parte do agregado)

  async addSeller(input: CreateSellerInput) {
    const operation = await this.findOperationById(
      input.operationId.toString()
    );
    const seller = Seller.create(input);

    operation.addSeller(seller.id);

    await this.sellerRepository.save(seller);
    await this.operationRepository.save(operation);

    return {
      operation: operation.toJSON(),
      seller: seller.toJSON(),
    };
  }

  async removeSeller(operationId: string, sellerId: string) {
    const operation = await this.findOperationById(operationId);

    operation.removeSeller(new Id(sellerId));
    await this.sellerRepository.remove(new Id(sellerId));
    await this.operationRepository.save(operation);

    return operation.toJSON();
  }

  // OPERATOR & CATALOG (parte do agregado vendedor) -> vai para seller.service.ts depois

  async addOperatorToSeller(input: CreateOperatorInput) {
    const seller = await this.sellerRepository.findById(input.sellerId);
    if (!seller) throw new Error("Seller not found");

    const operator = seller.addOperator(input);
    await this.sellerRepository.save(seller);

    return operator;
  }

  async createCatalogForSeller(
    sellerId: Id,
    input: Omit<CreateCatalogInput, "sellerId">
  ) {
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new Error("Seller not found");

    const catalog = seller.createCatalog(input);
    await this.sellerRepository.save(seller);

    return catalog;
  }

  async assignOperatorToCatalog(
    sellerId: Id,
    operatorId: Id,
    catalogId: Id,
    role: WorkRole
  ) {
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new Error("Seller not found");

    const assignment = seller.assignOperatorToCatalog(
      operatorId,
      catalogId,
      role
    );

    await this.sellerRepository.save(seller);

    return assignment;
  }
}
