import { Module } from "@nestjs/common";
import { OperationModule } from "./modules/operation/operation.module";
import { PrismaService } from "./infrastructure/prisma.service";
import { SellerModule } from "./modules/seller/seller.module";
import { SaleModule } from "./modules/sale/sale.module";
import { OrderModule } from "./modules/order/order.module";

@Module({
  imports: [OperationModule, SellerModule, SaleModule, OrderModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
