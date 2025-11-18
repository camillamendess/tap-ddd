export interface SaleItemOutputDTO {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface RegisterSaleInputDTO {
  operationId: string;
  sellerId: string;
  operatorId: string;
  catalogId: string;
  orderId: string;
  items: SaleItemOutputDTO[];
}

export interface RegisterSaleOutputDTO {
  id: string;
  operationId: string;
  sellerId: string;
  operatorId: string;
  catalogId: string;
  orderId: string;
  items: SaleItemOutputDTO[];
  total: number;
  createdAt: Date;
}

export interface FindSaleOutputDTO extends RegisterSaleOutputDTO {}
