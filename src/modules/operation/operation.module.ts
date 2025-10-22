import { Module } from "@nestjs/common";
import { OperationService } from "../../application/operation/operation.service";
import { PrismaOperationRepository } from "../../infrastructure/repositories/prisma-operation.repository";
import { OperationController } from "./operation.controller";
import { OperationRepository } from "../../domain/operation/repositories/operation.repository.interface";
import { PrismaService } from "../../infrastructure/prisma.service";

@Module({
  controllers: [OperationController],
  providers: [
    PrismaService, // porque o repositório depende dele
    OperationService,
    {
      provide: OperationRepository,
      useClass: PrismaOperationRepository,
    },
  ],
})
export class OperationModule {}
