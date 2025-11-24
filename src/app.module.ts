import { Module } from "@nestjs/common";
import { OperationModule } from "./api/operation/operation.module";
import { PrismaService } from "./infrastructure/prisma.service";
import { SellerModule } from "./api/seller/seller.module";
import { SaleModule } from "./api/sale/sale.module";
import { OrderModule } from "./api/order/order.module";

@Module({
  imports: [OperationModule, SellerModule, SaleModule, OrderModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
