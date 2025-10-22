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
