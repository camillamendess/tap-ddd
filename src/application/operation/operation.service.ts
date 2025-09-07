import { Id } from "../../domain/common/value-objects/id.value-object";
import { CreateOperationInput, Operation } from "../../domain/operation/operation.aggregate";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { CreateCatalogInput } from "../../domain/seller/entities/catalog.entity";
import { CreateOperatorInput } from "../../domain/seller/entities/operator.entity";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { CreateSellerInput, Seller } from "../../domain/seller/seller.aggregate";
import { WorkRole } from "../../domain/seller/value-objects/assignment.value-object";

export class OperationService {
  constructor(
    private readonly operationRepository: OperationRepository,
    private readonly sellerRepository: SellerRepository
  ) { }

  async createOperation(input: CreateOperationInput): Promise<Operation> {
    const operation = Operation.create(input);
    await this.operationRepository.save(operation);
    return operation;
  }

  async addSeller(sellerInput: CreateSellerInput) {
    const operation = await this.operationRepository.findById(sellerInput.operationId);
    if (!operation) throw new Error("Operation not found");

    const seller = Seller.create(sellerInput);
    operation.addSeller(seller.id);

    await this.sellerRepository.save(seller);
    await this.operationRepository.save(operation);

    return seller;
  }

  async removeSeller(operationId: Id, sellerId: Id) {
    const operation = await this.operationRepository.findById(operationId);
    if (!operation) throw new Error("Operation not found");

    operation.removeSeller(sellerId);
    await this.sellerRepository.delete(sellerId);
    await this.operationRepository.save(operation);
  }

  async addOperatorToSeller(input: CreateOperatorInput) {
    const seller = await this.sellerRepository.findById(input.sellerId);
    if (!seller) throw new Error("Seller not found");

    const operator = seller.addOperator(input);
    await this.sellerRepository.save(seller);

    return operator;
  }

  async createCatalogForSeller(sellerId: Id, input: Omit<CreateCatalogInput, "sellerId">) {
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new Error("Seller not found");

    const catalog = seller.createCatalog(input);
    await this.sellerRepository.save(seller);

    return catalog;
  }

  async assignOperatorToCatalog(sellerId: Id, operatorId: Id, catalogId: Id, role: WorkRole) {
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new Error("Seller not found");

    const assignment = seller.assignOperatorToCatalog(operatorId, catalogId, role);

    await this.sellerRepository.save(seller);

    return assignment;
  }


}
