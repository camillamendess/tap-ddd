import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { OrderPaidEvent } from "../order-paid.event";
import { SaleService } from "../../sale.service";

@EventsHandler(OrderPaidEvent)
export class RegisterSaleWhenOrderPaidHandler
  implements IEventHandler<OrderPaidEvent>
{
  constructor(private readonly saleService: SaleService) {}

  async handle(event: OrderPaidEvent): Promise<void> {
    await this.saleService.registerSale(event);
    console.log(
      `[EVENT] Sale registrada após pagamento da order ${event.orderId.toString()}`
    );
  }
}
