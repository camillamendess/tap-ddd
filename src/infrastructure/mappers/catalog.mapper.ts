import { Catalog } from "src/domain/seller/entities/catalog.entity";
import { Id } from "../../domain/common/value-objects/id.value-object";
import { Price } from "../../domain/sale/value-objects/price.value-object";
import { CatalogItem } from "src/domain/seller/entities/catalog-item.entity";

export class CatalogMapper {
  static toDomain(record: any): Catalog {
    return Catalog.create({
      id: new Id(record.id),
      sellerId: new Id(record.sellerId),
      name: record.name,
      type: record.type,
      items:
        record.items?.map((item: any) =>
          CatalogItem.create({
            id: new Id(item.id),
            catalogId: new Id(item.catalogId),
            name: item.name,
            price: Price.fromNumber(item.price, "BRL"),
            category: item.category,
          })
        ) ?? [],
    });
  }

  static toResponse(entity: Catalog) {
    return {
      id: entity.id.toString(),
      sellerId: entity.sellerId.toString(),
      name: entity.name,
      type: entity.type,
      items: entity.items.map((item) => ({
        id: item.id.toString(),
        name: item.name,
        price: item.price.valueOf(),
        category: item.category,
      })),
    };
  }
}
