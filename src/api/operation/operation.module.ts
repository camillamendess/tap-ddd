import { Module } from "@nestjs/common";
import { OperationService } from "../../application/operation/operation.service";
import { PrismaOperationRepository } from "../../infrastructure/repositories/prisma-operation.repository";
import { OperationController } from "./operation.controller";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { SellerRepository } from "src/domain/seller/repositories/seller.repository.interface";
import { PrismaSellerRepository } from "src/infrastructure/repositories/prisma-seller.repository";
import { PrismaService } from "src/infrastructure/prisma.service";

@Module({
  controllers: [OperationController],
  providers: [
    PrismaService,
    OperationService,
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
export class OperationModule {}
