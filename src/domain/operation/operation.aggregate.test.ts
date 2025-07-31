import { Id } from "../common/value-objects/id.value-object";
import { CatalogItem } from "./entities/catalog-item.entity";
import { Catalog, CatalogType } from "./entities/catalog.entity";
import { Sale } from "./entities/sale.entity";
import { Operation, OperationStatus } from "./operation.aggregate";
import { WorkAssignment, WorkRole } from "./value-objects/assignment.value-object";
import { Price } from "./value-objects/price.value-object";

describe("Operation", () => {
  describe("Creation", () => {
    it("should create an operation successfully", () => {
      const input = {
        sellerId: Id.generate(),
        name: "Festa",
        date: new Date("2025-08-01"),
      };

      const result = Operation.create(input);

      expect(result).toBeInstanceOf(Operation);
      expect(result.sellerId.equals(input.sellerId)).toBe(true);
    });

    it("should throw if name is missing", () => {
      const input = {
        sellerId: Id.generate(),
        name: "",
        date: new Date()
      };

      const result = () => Operation.create(input);

      expect(result).toThrow("Name is required");
    });

    it("should throw if sellerId is missing", () => {
      const input = {
        sellerId: undefined as any,
        name: "Festa",
        date: new Date()
      };

      const result = () => Operation.create(input);

      expect(result).toThrow("Seller is required");
    });

    it("should throw if date is missing", () => {
      const input = {
        sellerId: Id.generate(),
        name: "Festa",
        date: undefined as any
      };

      const result = () => Operation.create(input);

      expect(result).toThrow("Date is required");
    });

  });
});

describe("Catalog management", () => {
  it("should create a catalog successfully", () => {
    const operation = Operation.create({
      sellerId: Id.generate(),
      name: "Festival de Inverno",
      date: new Date()
    });

    const catalog = operation.createCatalog({
      id: Id.generate(),
      name: "Pista",
      type: "PISTA" as CatalogType
    });

    expect(catalog).toBeInstanceOf(Catalog);
    expect(operation.catalogs.length).toBe(1);
  });

  it("should create multiple catalogs with different types", () => {
    const operation = Operation.create({
      sellerId: Id.generate(),
      name: "Festival de Inverno",
      date: new Date("2025-08-22")
    });

    const pista = operation.createCatalog({ name: "Pista", type: CatalogType.PISTA });
    const camarote = operation.createCatalog({ name: "Camarote", type: CatalogType.CAMAROTE });

    expect(operation.catalogs.length).toBe(2);
    expect(operation.catalogs).toContainEqual(pista);
    expect(operation.catalogs).toContainEqual(camarote);
  });

  it("should throw if catalog of same type already exists", () => {
    const operation = Operation.create({
      sellerId: Id.generate(),
      name: "Festival de Inverno",
      date: new Date()
    });

    operation.createCatalog({
      id: Id.generate(),
      name: "Pista",
      type: "PISTA" as CatalogType
    });

    const result = () =>
      operation.createCatalog({
        id: Id.generate(),
        name: "Pista 2",
        type: "PISTA" as CatalogType
      });

    expect(result).toThrow("Catalog of type PISTA already exists");
  });
});

describe("Catalog item management", () => {
  it("should add catalog item successfully", () => {
    const operation = Operation.create({
      sellerId: Id.generate(),
      name: "Festival de Inverno",
      date: new Date()
    });

    const catalog = operation.createCatalog({
      id: Id.generate(),
      name: "Pista",
      type: "PISTA" as CatalogType
    });

    const item = operation.addCatalogItem(catalog.id, {
      id: Id.generate(),
      name: "Cerveja",
      category: "Bebida",
      price: Price.fromNumber(10, "BRL")
    });

    expect(item).toBeInstanceOf(CatalogItem);
    expect(catalog.items.length).toBe(1);
  });

  it("should throw when adding item to a non-existing catalog", () => {
    const operation = Operation.create({
      sellerId: Id.generate(),
      name: "Festival de Inverno",
      date: new Date()
    });

    const invalidCatalogId = Id.generate();

    const result = () =>
      operation.addCatalogItem(invalidCatalogId, {
        id: Id.generate(),
        name: "Cerveja",
        category: "Bebida",
        price: Price.fromNumber(10, "BRL")
      });

    expect(result).toThrow("Catalog not found");
  });

  describe("Work Assignment", () => {
    it("should assign an operator to a catalog successfully", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival de Inverno",
        date: new Date(),
      });

      const catalog = operation.createCatalog({
        id: Id.generate(),
        name: "Pista",
        type: CatalogType.PISTA
      });

      const operatorId = Id.generate();
      const assignment = operation.assignOperator(operatorId, catalog.id, WorkRole.CAIXA);

      expect(assignment).toBeInstanceOf(WorkAssignment);
      expect(operation.assignments.length).toBe(1);
      expect(operation.assignments[0].operatorId.equals(operatorId)).toBe(true);
      expect(operation.assignments[0].catalogId.equals(catalog.id)).toBe(true);
      expect(operation.assignments[0].role).toBe(WorkRole.CAIXA);
    });

    it("should throw if operator is already assigned to the same catalog and role", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival de Inverno",
        date: new Date()
      });

      const catalog = operation.createCatalog({
        id: Id.generate(),
        name: "Pista",
        type: CatalogType.PISTA
      });

      const operatorId = Id.generate();
      operation.assignOperator(operatorId, catalog.id, WorkRole.CAIXA);

      const result = () =>
        operation.assignOperator(operatorId, catalog.id, WorkRole.CAIXA);

      expect(result).toThrow("Operator already assigned to this catalog with this role");
    });

    it("should throw if catalog does not exist", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival de Inverno",
        date: new Date()
      });

      const invalidCatalogId = Id.generate();
      const operatorId = Id.generate();

      const result = () =>
        operation.assignOperator(operatorId, invalidCatalogId, WorkRole.CAIXA);

      expect(result).toThrow("Catalog not found");
    });
  });

  describe("Sales registration", () => {
    it("should register a sale successfully when the operator has the right permission", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival",
        date: new Date(),
        status: OperationStatus.ACTIVE
      });

      const catalog = operation.createCatalog({
        id: Id.generate(),
        name: "Pista",
        type: CatalogType.PISTA
      });

      const item = operation.addCatalogItem(catalog.id, {
        id: Id.generate(),
        name: "Cerveja",
        category: "Bebida",
        price: Price.fromNumber(10, "BRL")
      });

      const operatorId = Id.generate();
      operation.assignOperator(operatorId, catalog.id, WorkRole.CAIXA);

      const sale = operation.registerSale(operatorId, catalog.id, [
        { itemId: item.id, quantity: 2 }
      ]);

      expect(sale).toBeInstanceOf(Sale);
      expect(sale.total).toBe(20);
    });

    it("should not register a sale if the operator doesn't have the right permission", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival",
        date: new Date(),
        status: OperationStatus.ACTIVE
      });

      const catalog = operation.createCatalog({
        id: Id.generate(),
        name: "Pista",
        type: CatalogType.PISTA
      });

      const item = operation.addCatalogItem(catalog.id, {
        id: Id.generate(),
        name: "Cerveja",
        category: "Bebida",
        price: Price.fromNumber(10, "BRL")
      });

      const operatorId = Id.generate();

      const result = () => operation.registerSale(operatorId, catalog.id, [
        { itemId: item.id, quantity: 1 }
      ]);

      expect(result).toThrow("Operator not assigned to this catalog");
    });

    it("should not allow an operator assigned to one catalog to register sales from another catalog", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival",
        date: new Date(),
        status: OperationStatus.ACTIVE
      });

      const catalog1 = operation.createCatalog({
        id: Id.generate(),
        name: "Pista",
        type: CatalogType.PISTA
      });

      const catalog2 = operation.createCatalog({
        id: Id.generate(),
        name: "Camarote",
        type: CatalogType.CAMAROTE
      });

      const itemCamarote = operation.addCatalogItem(catalog2.id, {
        id: Id.generate(),
        name: "Whisky",
        category: "Bebida",
        price: Price.fromNumber(50, "BRL")
      });

      const operatorId = Id.generate();
      operation.assignOperator(operatorId, catalog1.id, WorkRole.BAR);

      const result = () => operation.registerSale(operatorId, catalog2.id, [
        { itemId: itemCamarote.id, quantity: 1 }
      ]);

      expect(result).toThrow("Operator not assigned to this catalog");
    });

    it("should not register a sale if the operation is not active", () => {
      const operation = Operation.create({
        sellerId: Id.generate(),
        name: "Festival",
        date: new Date(),
        status: OperationStatus.PLANNED
      });

      const catalog = operation.createCatalog({
        id: Id.generate(),
        name: "Pista",
        type: CatalogType.PISTA
      });

      const item = operation.addCatalogItem(catalog.id, {
        id: Id.generate(),
        name: "Cerveja",
        category: "Bebida",
        price: Price.fromNumber(10, "BRL")
      });

      const operatorId = Id.generate();
      operation.assignOperator(operatorId, catalog.id, WorkRole.BAR);

      const result = () => operation.registerSale(operatorId, catalog.id, [
        { itemId: item.id, quantity: 1 }
      ])

      expect(result).toThrow("Operation is not active");
    });
  });
});