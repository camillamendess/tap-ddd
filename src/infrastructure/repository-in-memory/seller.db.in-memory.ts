import { Id } from "../../domain/common/value-objects/id.value-object";
import { SellerRepository } from "../../domain/seller/repositories/seller.repository.interface";
import { Seller } from "../../domain/seller/seller.aggregate";

export class InMemorySellerRepository implements SellerRepository {
  private store = new Map<string, Seller>();

  async findById(id: Id): Promise<Seller | null> {
    return this.store.get(id.toString()) ?? null;
  }
  async save(seller: Seller): Promise<Id> {
    this.store.set(seller.id.toString(), seller);
    return seller.id;
  }
  async delete(id: Id): Promise<Id> {
    this.store.delete(id.toString());
    return id;
  }
}
