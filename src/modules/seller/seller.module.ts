import { Module } from "@nestjs/common";
import { SellerController } from "./seller.controller";
import { SellerService } from "src/application/seller/seller.service";
import { PrismaSellerRepository } from "src/infrastructure/repositories/prisma-seller.repository";
import { SellerRepository } from "src/domain/seller/repositories/seller.repository.interface";
import { PrismaService } from "src/infrastructure/prisma.service";

@Module({
  controllers: [SellerController],
  providers: [
    PrismaService,
    SellerService,
    {
      provide: SellerRepository,
      useClass: PrismaSellerRepository,
    },
  ],
  exports: [SellerService],
})
export class SellerModule {}
