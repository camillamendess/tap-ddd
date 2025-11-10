import { Controller, Post, Patch, Param, Body } from "@nestjs/common";
import { OrderService } from "src/application/order/order.service";
import { Id } from "src/domain/common/value-objects/id.value-object";
import { CreateOrderBody } from "./order.body";

@Controller("orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() body: CreateOrderBody) {
    return this.orderService.createOrder(body);
  }

  @Patch(":id/pay")
  async pay(@Param("id") id: string) {
    await this.orderService.markOrderAsPaid(new Id(id));
    return { message: "Order paid successfully" };
  }
}
