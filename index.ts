import { Id } from "./src/domain/common/value-objects/id.value-object";
import { CatalogType } from "./src/domain/operation/entities/catalog.entity";
import { Price } from "./src/domain/operation/value-objects/price.value-object";
import { Seller } from "./src/domain/seller/seller.aggregate";

async function main() {
  // Criar Seller
  const seller = Seller.create({ id: Id.generate(), name: "Camilla", cpf: "04132134532" });

  console.log("Seller criado: ", seller);

  // Criar Operation a partir do Seller
  const operation = seller.createOperation(
    {
      sellerId: seller.id,
      name: "Festa Junina",
      date: new Date("2025-08-01")
    }
  );

  console.log("Operation criado: ", operation);

  // Criar Catalog para pista
  const pistaCatalog = operation.createCatalog(
    {
      name: "Pista",
      type: CatalogType.PISTA
    });

  console.log("Catalog Pista criado: ", pistaCatalog);

  // Criar CatalogItem para Catalog
  const item1 = operation.addCatalogItem(
    pistaCatalog.id,
    {
      id: Id.generate(),
      name: "Cerveja",
      category: "Bebida",
      price: Price.fromNumber(10, "BRL"),
    }
  );

  console.log("Item criado: ", item1);
}

main();