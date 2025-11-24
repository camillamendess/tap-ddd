import { CatalogType } from "src/domain/seller/entities/catalog.entity";
import { WorkRole } from "src/domain/seller/value-objects/assignment.value-object";

export interface CreateSellerInputDTO {
  operationId: string;
  name: string;
  cpf: string;
}

export interface CreateSellerOutputDTO {
  id: string;
  operationId: string;
  name: string;
  cpf: string;
}

export interface AddOperatorInputDTO {
  id?: string;
  sellerId: string;
  name: string;
}

export interface AddOperatorOutputDTO {
  id: string;
  sellerId: string;
  name: string;
}

export interface CreateCatalogInputDTO {
  name: string;
  type: CatalogType;
}

export interface CreateCatalogOutputDTO {
  id: string;
  name: string;
  type: string;
}

export interface AddCatalogItemInputDTO {
  sellerId: string;
  catalogId: string;
  name: string;
  price: number;
  category: string;
}

export interface AddCatalogItemOutputDTO {
  id: string;
  name: string;
  price: number;
  catalogId: string;
}

export interface SetCatalogItemAvailabilityInputDTO {
  sellerId: string;
  catalogId: string;
  itemId: string;
  available: boolean;
}

export interface SetCatalogItemAvailabilityOutputDTO {
  itemId: string;
  catalogId: string;
  available: boolean;
}

export interface AssignOperatorInputDTO {
  sellerId: string;
  operatorId: string;
  catalogId: string;
  role: WorkRole;
}

export interface AssignOperatorOutputDTO {
  operatorId: string;
  catalogId: string;
  role: WorkRole;
}
