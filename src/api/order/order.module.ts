import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { OrderService } from "src/application/order/order.service";
import { RegisterSaleWhenOrderPaidHandler } from "src/application/sale/events/handlers/register-sale-when-order-paid.handler";
import { SaleModule } from "../sale/sale.module"; // se já exportar o SaleService
import { OrderRepository } from "src/domain/order/repositories/order.repository.interface";
import { PrismaOrderRepository } from "src/infrastructure/repositories/prisma-order.repository";
import { PrismaService } from "src/infrastructure/prisma.service";
import { SaleService } from "src/application/sale/sale.service";
import { SellerRepository } from "src/domain/seller/repositories/seller.repository.interface";
import { PrismaSellerRepository } from "src/infrastructure/repositories/prisma-seller.repository";
import { SaleRepository } from "src/domain/sale/repositories/sale.repository.interface";
import { PrismaSaleRepository } from "src/infrastructure/repositories/prisma-sale.repository";
import { PrismaOperationRepository } from "src/infrastructure/repositories/prisma-operation.repository";
import { OperationRepository } from "src/domain/operation/repositories/operation.repository.interface";
import { OrderController } from "./order.controller";

@Module({
  imports: [CqrsModule, SaleModule],
  controllers: [OrderController],
  providers: [
    PrismaService,
    OrderService,
    SaleService,
    RegisterSaleWhenOrderPaidHandler,
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository,
    },
    {
      provide: SellerRepository,
      useClass: PrismaSellerRepository,
    },
    {
      provide: SaleRepository,
      useClass: PrismaSaleRepository,
    },
    {
      provide: OperationRepository,
      useClass: PrismaOperationRepository,
    },
  ],
  exports: [OrderService, OrderRepository],
})
export class OrderModule {}
