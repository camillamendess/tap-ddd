import { Module } from "@nestjs/common";
import { PrismaSaleRepository } from "src/infrastructure/repositories/prisma-sale.repository";
import { SaleController } from "./sale.controller";
import { SaleService } from "src/application/sale/sale.service";
import { OperationRepository } from "src/domain/operation/repositories/operation.repository.interface";
import { SellerRepository } from "src/domain/seller/repositories/seller.repository.interface";
import { PrismaOperationRepository } from "src/infrastructure/repositories/prisma-operation.repository";
import { PrismaSellerRepository } from "src/infrastructure/repositories/prisma-seller.repository";
import { SaleRepository } from "src/domain/sale/repositories/sale.repository.interface";
import { PrismaService } from "src/infrastructure/prisma.service";

@Module({
  controllers: [SaleController],
  providers: [
    PrismaService,
    SaleService,
    {
      provide: SaleRepository,
      useClass: PrismaSaleRepository,
    },
    {
      provide: OperationRepository,
      useClass: PrismaOperationRepository,
    },
    {
      provide: SellerRepository,
      useClass: PrismaSellerRepository,
    },
  ],
})
export class SaleModule {}
