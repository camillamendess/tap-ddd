import { SaleItem } from "../../../domain/sale/value-objects/sale-item.value-object";

export interface CreateOrderInputDTO {
  operationId: string;
  sellerId: string;
  operatorId: string;
  catalogId: string;
  items: SaleItem[];
}

export interface CreateOrderOutputDTO {
  id: string;
  operationId: string;
  sellerId: string;
  operatorId: string;
  catalogId: string;
  items: {
    catalogItemId: string;
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  paid: boolean;
}
