import { Id } from "../common/value-objects/id.value-object";
import { Operator } from "./entities/operator.entity";
import { Seller } from "./seller.aggregate";
import { SellerBuilder } from "../../tests/builders/seller.builder";
import { Cpf } from "../common/value-objects/cpf.value-object";

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
});
