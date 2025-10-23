import { Injectable } from "@nestjs/common";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { Seller } from "../../domain/seller/seller.aggregate";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { WorkRole } from "../../domain/seller/value-objects/assignment.value-object";
import {
  AddCatalogItemInputDTO,
  AddCatalogItemOutputDTO,
  AddOperatorInputDTO,
  AddOperatorOutputDTO,
  AssignOperatorInputDTO,
  AssignOperatorOutputDTO,
  CreateCatalogInputDTO,
  CreateCatalogOutputDTO,
  CreateSellerInputDTO,
  CreateSellerOutputDTO,
} from "./dtos/seller-service.dto";
import { Cpf } from "src/domain/common/value-objects/cpf.value-object";
import { Price } from "src/domain/sale/value-objects/price.value-object";

@Injectable()
export class SellerService {
  constructor(private readonly sellerRepository: SellerRepository) {}

  async createSeller(
    input: CreateSellerInputDTO
  ): Promise<CreateSellerOutputDTO> {
    const seller = Seller.create({
      operationId: new Id(input.operationId),
      name: input.name,
      cpf: new Cpf(input.cpf),
    });

    await this.sellerRepository.save(seller);

    return {
      id: seller.id.toString(),
      operationId: seller.operationId.toString(),
      name: seller.name,
      cpf: seller.cpf.toString(),
    };
  }

  async getSellerById(id: string): Promise<Seller> {
    const seller = await this.sellerRepository.findById(new Id(id));
    if (!seller) throw new Error("Seller not found");
    return seller;
  }

  async addOperatorToSeller(
    input: AddOperatorInputDTO
  ): Promise<AddOperatorOutputDTO> {
    const seller = await this.getSellerById(input.sellerId);

    const operator = seller.addOperator({
      id: Id.generate(),
      sellerId: new Id(input.sellerId),
      name: input.name,
    });

    await this.sellerRepository.save(seller);

    return {
      id: operator.id.toString(),
      sellerId: seller.id.toString(),
      name: operator.name,
    };
  }

  async getOperatorById(sellerId: string, operatorId: string) {
    const seller = await this.getSellerById(sellerId);
    const operator = seller.getOperatorById(new Id(operatorId));
    if (!operator) throw new Error("Operator not found");
    return operator;
  }

  async createCatalogForSeller(
    sellerId: string,
    input: CreateCatalogInputDTO
  ): Promise<CreateCatalogOutputDTO> {
    const seller = await this.getSellerById(sellerId);

    const catalog = seller.createCatalog({
      name: input.name,
      type: input.type,
    });

    await this.sellerRepository.save(seller);

    return {
      id: catalog.id.toString(),
      type: catalog.type,
      name: catalog.name,
    };
  }

  async addCatalogItem(
    input: AddCatalogItemInputDTO
  ): Promise<AddCatalogItemOutputDTO> {
    const seller = await this.getSellerById(input.sellerId);

    const item = seller.addCatalogItem(new Id(input.catalogId), {
      id: Id.generate(),
      name: input.name,
      price: Price.fromNumber(input.price, "BRL"),
      category: input.category,
    });

    await this.sellerRepository.save(seller);

    return {
      id: item.id.toString(),
      name: item.name,
      price: item.price.amount,
      catalogId: input.catalogId,
    };
  }

  async assignOperatorToCatalog(
    input: AssignOperatorInputDTO
  ): Promise<AssignOperatorOutputDTO> {
    const seller = await this.getSellerById(input.sellerId);

    const assignment = seller.assignOperatorToCatalog(
      new Id(input.operatorId),
      new Id(input.catalogId),
      input.role as WorkRole
    );

    await this.sellerRepository.save(seller);

    return {
      operatorId: assignment.operatorId.toString(),
      catalogId: assignment.catalogId.toString(),
      role: assignment.role as WorkRole,
    };
  }
}
