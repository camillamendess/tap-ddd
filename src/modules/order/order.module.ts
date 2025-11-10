import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { OrderService } from "src/application/order/order.service";
import { RegisterSaleWhenOrderPaidHandler } from "src/application/sale/events/handlers/register-sale-when-order-paid.handler";
import { SaleModule } from "../sale/sale.module"; // se já exportar o SaleService
import { OrderRepository } from "src/domain/order/repositories/order.repository.interface";
import { PrismaOrderRepository } from "src/infrastructure/repositories/prisma-order.repository";
import { PrismaService } from "src/infrastructure/prisma.service";

@Module({
  imports: [CqrsModule, SaleModule],
  providers: [
    PrismaService,
    OrderService,
    RegisterSaleWhenOrderPaidHandler,
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository,
    },
  ],
  exports: [OrderService, OrderRepository],
})
export class OrderModule {}
