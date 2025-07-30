import { Id } from "../common/value-objects/id.value-object";
import { Operator } from "./entities/operator.entity";
import { Seller } from "./seller.aggregate";

describe("Seller", () => {
  describe("Creation", () => {
    it("should create a seller successfully", () => {
      // Arrange
      const input = {
        id: Id.generate(),
        name: "Camilla",
        cpf: "123456789"
      }

      // Act
      const result = Seller.create(input);

      // Assert
      expect(result).toBeInstanceOf(Seller);
    });
  });

  it("should throw if name is empty", () => {
    const input = {
      id: Id.generate(),
      name: "",
      cpf: "123123123"
    }

    const result = () => Seller.create(input);

    expect(result).toThrow("Name is required");
  });

  it("should throw if cpf is empty", () => {
    const input = {
      id: Id.generate(),
      name: "Camilla",
      cpf: ""
    }

    const result = () => Seller.create(input);

    expect(result).toThrow("Cpf is required");
  });

  it("should throw if cpf has less than 11 digits", () => {
    const input = {
      id: Id.generate(),
      name: "Camilla",
      cpf: "abc"
    }

    const result = () => Seller.create(input);

    expect(result).toThrow("Cpf must be a string of 11 digits");
  });

  describe("management of operators", () => {
    it("should create a operator successfully", () => {
      const seller = Seller.create({
        name: "Camilla",
        cpf: "123456789"
      });

      const input = {
        id: Id.generate(),
        name: "Flowers"
      }

      const result = seller.addOperator(input);

      expect(result).toBeInstanceOf(Operator);
    })

    it("should get operator by id successfully", () => {
      const seller = Seller.create({
        name: "Camilla",
        cpf: "123456789"
      });

      const operator = {
        id: Id.generate(),
        name: "Flowers"
      }

      seller.addOperator(operator);

      const result = seller.getOperatorById(operator.id);

      expect(result).toBeInstanceOf(Operator);
    });

    it("should throw when getting operator by id that does not exist", () => {
      const seller = Seller.create({
        name: "Camilla",
        cpf: "123456789"
      });

      const invalidId = Id.generate();

      const result = () => seller.getOperatorById(invalidId);

      expect(result).toThrow(`Operator not found`);
    });
  });
});