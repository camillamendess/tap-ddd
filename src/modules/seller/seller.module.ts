import { Module } from "@nestjs/common";
import { SellerController } from "./seller.controller";
import { SellerService } from "src/application/seller/seller.service";
import { Prisma } from "@prisma/client";
import { PrismaSellerRepository } from "src/infrastructure/repositories/prisma-seller.repository";

@Module({
  controllers: [SellerController],
  providers: [
    SellerService,
    {
      provide: "SellerRepository",
      useClass: PrismaSellerRepository,
    },
  ],
  exports: [SellerService],
})
export class SellerModule {}
