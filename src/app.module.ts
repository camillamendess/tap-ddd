import { Module } from "@nestjs/common";
import { OperationModule } from "./modules/operation/operation.module";
import { PrismaService } from "./infrastructure/prisma.service";
import { SellerModule } from "./modules/seller/seller.module";

@Module({
  imports: [OperationModule, SellerModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
