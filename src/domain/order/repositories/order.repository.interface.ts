import { Id } from "../../common/value-objects/id.value-object";
import { Order } from "../order.aggregate";

export abstract class OrderRepository {
  abstract save(order: Order): Promise<Id>;
  abstract findAll(): Promise<Order[]>;
  abstract findById(id: Id): Promise<Order | null>;
}
