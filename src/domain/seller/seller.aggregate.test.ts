import { Id } from "../common/value-objects/id.value-object";
import { Operator } from "./entities/operator.entity";
import { Seller } from "./seller.aggregate";
import { SellerBuilder } from "../../tests/builders/seller.builder";
import { CatalogType } from "./entities/catalog.entity";
import { WorkRole } from "./value-objects/assignment.value-object";

describe("Seller", () => {
  describe("Creation", () => {
    it("should create a seller successfully", () => {
      const seller = SellerBuilder.create().build();
      expect(seller).toBeInstanceOf(Seller);
      expect(seller.name).toBe("Camilla Store");
    });

    it("should throw if name is empty", () => {
      const builder = SellerBuilder.create().withName("");
      expect(() => builder.build()).toThrow("Name is required");
    });

    it("should throw if cpf is empty", () => {
      const builder = SellerBuilder.create().withCpf("");
      expect(() => builder.build()).toThrow("CPF is required");
    });

    it("should throw if cpf has less than 11 digits", () => {
      const builder = SellerBuilder.create().withCpf("123");
      expect(() => builder.build()).toThrow("CPF must be 11 digits");
    });
  });

  describe("management of operators", () => {
    it("should create an operator successfully", () => {
      const seller = SellerBuilder.create().build();

      const input = {
        id: Id.generate(),
        sellerId: seller.id,
        name: "Flowers",
      };

      const result = seller.addOperator(input);

      expect(result).toBeInstanceOf(Operator);
    });

    it("should get operator by id successfully", () => {
      const seller = SellerBuilder.create().build();

      const operator = {
        id: Id.generate(),
        sellerId: seller.id,
        name: "Flowers",
      };

      seller.addOperator(operator);

      const result = seller.getOperatorById(operator.id);

      expect(result).toBeInstanceOf(Operator);
    });

    it("should throw when getting operator by id that does not exist", () => {
      const seller = SellerBuilder.create().build();
      const invalidId = Id.generate();

      expect(() => seller.getOperatorById(invalidId)).toThrow("Operator not found");
    });
  });

  describe("management of catalogs and assignments", () => {
    it("each seller can create their own catalogs in a operation", () => {
      const operationId = Id.generate();

      const sellerA = SellerBuilder.create()
        .withOperationId(operationId)
        .withName("Store A")
        .withCpf("12345678901")
        .build();

      const sellerB = SellerBuilder.create()
        .withOperationId(operationId)
        .withName("Store B")
        .withCpf("98765432100")
        .build();

      const catalogA = sellerA.createCatalog({
        name: "Pista Store A",
        type: CatalogType.PISTA,
      });

      const catalogB = sellerB.createCatalog({
        name: "Pista Store B",
        type: CatalogType.PISTA,
      });

      expect(catalogA).toBeDefined();
      expect(catalogB).toBeDefined();
      expect(catalogA).not.toEqual(catalogB);
    });

    it("operators from a seller cannot create catalogs in another seller", () => {
      const sellerA = SellerBuilder.create().build();
      const sellerB = SellerBuilder.create().withName("Outro Seller").build();

      const operatorA = sellerA.addOperator({
        id: Id.generate(),
        sellerId: sellerA.id,
        name: "Operador A",
      });

      const catalogB = sellerB.createCatalog({
        name: "Camarote B",
        type: CatalogType.CAMAROTE,
      });

      expect(() =>
        sellerB.assignOperatorToCatalog(operatorA.id, catalogB.id, WorkRole.CAIXA)
      ).toThrow("Operator not found for this seller");
    });

    it("should assign operator to catalog successfully", () => {
      const seller = SellerBuilder.create().build();

      const operator = seller.addOperator({
        id: Id.generate(),
        sellerId: seller.id,
        name: "Operador A",
      });

      const catalog = seller.createCatalog({
        name: "Camarote A",
        type: CatalogType.CAMAROTE,
      });
      const assignment = seller.assignOperatorToCatalog(
        operator.id,
        catalog.id,
        WorkRole.CAIXA
      );

      expect(assignment.operatorId.equals(operator.id)).toBe(true);
      expect(assignment.catalogId.equals(catalog.id)).toBe(true);
      expect(assignment.role).toBe(WorkRole.CAIXA);
    });

    it("should throw when assigning operator to a catalog that does not exist", () => {
      const seller = SellerBuilder.create().build();
      const operator = seller.addOperator({
        id: Id.generate(),
        sellerId: seller.id,
        name: "Operador A",
      });

      expect(() =>
        seller.assignOperatorToCatalog(operator.id, Id.generate(), WorkRole.CAIXA)
      ).toThrow("Catalog not found");
    });
  });
});
