import { Injectable, NotFoundException } from "@nestjs/common";
import { Id } from "../../domain/common/value-objects/id.value-object";
import {
  Operation,
  OperationStatus,
} from "../../domain/operation/operation.aggregate";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import {
  CreateOperationInputDTO,
  CreateOperationOutputDTO,
  AddSellerInputDTO,
  AddSellerOutputDTO,
  RemoveSellerInputDTO,
  RemoveSellerOutputDTO,
  FindOperationOutputDTO,
} from "./dtos/operation-service.dto";
import { Cpf } from "../../domain/common/value-objects/cpf.value-object";
import { Seller } from "../../domain/seller/seller.aggregate";

@Injectable()
export class OperationService {
  constructor(
    private readonly operationRepository: OperationRepository,
    private readonly sellerRepository: SellerRepository
  ) {}

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

    return {
      id: operation.id.toString(),
      name: operation.name,
      date: operation.date,
      status: operation.status,
    };
  }

  async getAllOperations(): Promise<CreateOperationOutputDTO[]> {
    const operations = await this.operationRepository.findAll();
    return operations.map((op) => op.toJSON());
  }

  async findOperationById(
    operationId: string
  ): Promise<FindOperationOutputDTO> {
    const operation = await this.operationRepository.findById(
      new Id(operationId)
    );
    if (!operation) {
      throw new NotFoundException("Operation not found");
    }

    return operation.toJSON();
  }

  async activateOperation(
    operationId: string
  ): Promise<CreateOperationOutputDTO> {
    const operation = await this.operationRepository.findById(
      new Id(operationId)
    );
    if (!operation) {
      throw new NotFoundException("Operation not found");
    }

    operation.activate();
    await this.operationRepository.save(operation);

    return {
      id: operation.id.toString(),
      name: operation.name,
      date: operation.date,
      status: operation.status,
    };
  }

  async addSeller(input: AddSellerInputDTO): Promise<AddSellerOutputDTO> {
    const operation = await this.operationRepository.findById(
      new Id(input.operationId)
    );
    if (!operation) {
      throw new NotFoundException("Operation not found");
    }

    const seller = Seller.create({
      id: Id.generate(),
      operationId: new Id(input.operationId),
      name: input.name,
      cpf: new Cpf(input.cpf),
    });

    operation.addSeller(seller.id);

    await this.sellerRepository.save(seller);

    return {
      operation: operation.toJSON(),
      seller: seller.toJSON(),
    };
  }

  async removeSeller(
    input: RemoveSellerInputDTO
  ): Promise<RemoveSellerOutputDTO> {
    const operation = await this.operationRepository.findById(
      new Id(input.operationId)
    );
    if (!operation) {
      throw new NotFoundException("Operation not found");
    }

    operation.removeSeller(new Id(input.sellerId));
    await this.sellerRepository.remove(new Id(input.sellerId));
    await this.operationRepository.save(operation);

    return {
      operationId: input.operationId,
      removedSellerId: input.sellerId,
      updatedOperation: operation.toJSON(),
    };
  }
}
