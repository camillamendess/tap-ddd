import { Injectable } from "@nestjs/common";
import { Id } from "../../domain/common/value-objects/id.value-object";
import {
  Seller,
  CreateSellerInput,
} from "../../domain/seller/seller.aggregate";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { CreateOperatorInput } from "../../domain/seller/entities/operator.entity";
import {
  CreateCatalogInput,
  Catalog,
} from "../../domain/seller/entities/catalog.entity";
import { WorkRole } from "../../domain/seller/value-objects/assignment.value-object";

@Injectable()
export class SellerService {
  constructor(private readonly sellerRepository: SellerRepository) {}

  // === SELLER ===
  async createSeller(input: CreateSellerInput): Promise<Seller> {
    const seller = Seller.create(input);
    await this.sellerRepository.save(seller);
    return seller;
  }

  async getSellerById(id: string): Promise<Seller> {
    const seller = await this.sellerRepository.findById(new Id(id));
    if (!seller) throw new Error("Seller not found");
    return seller;
  }

  // === OPERATOR ===
  async addOperator(input: CreateOperatorInput) {
    const seller = await this.getSellerById(input.sellerId.toString());
    const operator = seller.addOperator(input);
    await this.sellerRepository.save(seller);
    return operator;
  }

  async getOperatorById(sellerId: string, operatorId: string) {
    const seller = await this.getSellerById(sellerId);
    return seller.getOperatorById(new Id(operatorId));
  }

  // === CATALOG ===
  async createCatalog(
    sellerId: string,
    input: Omit<CreateCatalogInput, "sellerId">
  ): Promise<Catalog> {
    const seller = await this.getSellerById(sellerId);
    const catalog = seller.createCatalog(input);
    await this.sellerRepository.save(seller);
    return catalog;
  }

  async addCatalogItem(
    sellerId: string,
    catalogId: string,
    itemInput: Omit<CreateCatalogInput, "sellerId">
  ) {
    const seller = await this.getSellerById(sellerId);
    const item = seller.addCatalogItem(new Id(catalogId), itemInput);
    await this.sellerRepository.save(seller);
    return item;
  }

  // === ASSIGNMENTS ===
  async assignOperatorToCatalog(
    sellerId: string,
    operatorId: string,
    catalogId: string,
    role: WorkRole
  ) {
    const seller = await this.getSellerById(sellerId);
    const assignment = seller.assignOperatorToCatalog(
      new Id(operatorId),
      new Id(catalogId),
      role
    );
    await this.sellerRepository.save(seller);
    return assignment;
  }
}
