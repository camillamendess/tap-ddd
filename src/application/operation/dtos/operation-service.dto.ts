export interface CreateOperationInputDTO {
  name: string;
  date: Date;
  status?: string;
}

export interface CreateOperationOutputDTO {
  id: string;
  name: string;
  date: Date;
  status: string;
}

export interface FindOperationOutputDTO {
  id: string;
  name: string;
  date: Date;
  status: string;
  sellers: string[];
}

export interface AddSellerInputDTO {
  operationId: string;
  name: string;
  cpf: string;
}

export interface AddSellerOutputDTO {
  operation: {
    id: string;
    name: string;
    date: Date;
    status: string;
    sellers: string[];
  };
  seller: {
    id: string;
    operationId: string;
    name: string;
    cpf: string;
  };
}

export interface RemoveSellerInputDTO {
  operationId: string;
  sellerId: string;
}

export interface RemoveSellerOutputDTO {
  operationId: string;
  removedSellerId: string;
  updatedOperation: {
    id: string;
    name: string;
    date: Date;
    status: string;
    sellers: string[];
  };
}
