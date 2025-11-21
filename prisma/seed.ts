import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Limpando banco...");

  await prisma.sale.deleteMany();
  await prisma.order.deleteMany();
  await prisma.catalogItem.deleteMany();
  await prisma.catalog.deleteMany();
  await prisma.operator.deleteMany();
  await prisma.seller.deleteMany();
  await prisma.operation.deleteMany();

  console.log("✨ Criando seeds...");

  // -------------------------
  // Create Operation
  // -------------------------
  const operationId = randomUUID();
  const operation = await prisma.operation.create({
    data: {
      id: operationId,
      name: "Default Operation",
      date: new Date(),
      status: "ACTIVE",
    },
  });

  // -------------------------
  // Create Seller
  // -------------------------
  const sellerId = randomUUID();
  const seller = await prisma.seller.create({
    data: {
      id: sellerId,
      operationId: operation.id,
      name: "Loja Exemplo",
      cpf: "74861704006",
    },
  });

  // -------------------------
  // Create Operator
  // -------------------------
  const operatorId = randomUUID();
  const operator = await prisma.operator.create({
    data: {
      id: operatorId,
      sellerId: seller.id,
      name: "Admin Operator",
    },
  });

  // -------------------------
  // Create Catalog
  // -------------------------
  const catalogId = randomUUID();
  const catalog = await prisma.catalog.create({
    data: {
      id: catalogId,
      sellerId: seller.id,
      name: "Catálogo Principal",
      type: "PISTA",
    },
  });

  // -------------------------
  // Create Catalog Items
  // -------------------------
  const items = await prisma.catalogItem.createMany({
    data: [
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Cerveja Heineken 600ml",
        price: 19,
        category: "Cervejas 600ml",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Cerveja Budweiser 600ml",
        price: 16.9,
        category: "Cervejas 600ml",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Cerveja Stella Artois 600ml",
        price: 17.6,
        category: "Cervejas 600ml",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Cachaça Serra das Almas 1L",
        price: 39.9,
        category: "Destilados",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Vodka Smirnoff 1L",
        price: 59.9,
        category: "Destilados",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Whisky Red Label 1L",
        price: 129.9,
        category: "Destilados",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Cachaça Serra das Almas - Dose Única",
        price: 5,
        category: "Doses",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Vodka Smirnoff - Dose Única",
        price: 8,
        category: "Doses",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Whisky Red Label - Dose Única",
        price: 15,
        category: "Doses",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Água Mineral",
        price: 3.0,
        category: "Bebidas Não Alcoólicas",
      },
      {
        id: randomUUID(),
        catalogId: catalog.id,
        name: "Coxinha",
        price: 7.5,
        category: "Salgado",
      },
    ],
  });

  console.log("🎉 Seed finalizado com sucesso!");
  console.log({
    operationId,
    sellerId,
    operatorId,
    catalogId,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
