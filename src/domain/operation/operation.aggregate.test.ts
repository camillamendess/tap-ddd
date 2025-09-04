import { OperationBuilder } from "../../tests/builders/operation.builder";
import { Id } from "../common/value-objects/id.value-object";
import { OperationStatus } from "./operation.aggregate";

describe("Operation (with builder)", () => {
  it("should create operation with defaults", () => {
    const operation = OperationBuilder.create().build();

    expect(operation.name).toBe("Festa");
    expect(operation.status).toBe(OperationStatus.PLANNED);
  });

  it("should create operation with custom values", () => {
    const customId = Id.generate();
    const sellerId = Id.generate();
    const operation = OperationBuilder.create()
      .withId(customId)
      .withName("Festival de Inverno")
      .withDate(new Date("2025-08-01"))
      .withStatus(OperationStatus.ACTIVE)
      .withSeller(sellerId)
      .build();

    expect(operation.id.equals(customId)).toBe(true);
    expect(operation.name).toBe("Festival de Inverno");
    expect(operation.date).toEqual(new Date("2025-08-01"));
    expect(operation.status).toBe(OperationStatus.ACTIVE);
    expect(operation.sellerIds[0].equals(sellerId)).toBe(true);
  });

  it("should add a seller successfully", () => {
    const sellerId = Id.generate();
    const operation = OperationBuilder.create().build();

    operation.addSeller(sellerId);

    expect(operation.sellerIds.length).toBe(1);
    expect(operation.sellerIds[0].equals(sellerId)).toBe(true);
  });

  it("should remove a seller successfully", () => {
    const sellerId = Id.generate();
    const operation = OperationBuilder.create().withSeller(sellerId).build();

    operation.removeSeller(sellerId);

    expect(operation.sellerIds.length).toBe(0);
  });

  it("should throw error when adding the same seller twice", () => {
    const sellerId = Id.generate();
    const operation = OperationBuilder.create().withSeller(sellerId).build();

    expect(() => operation.addSeller(sellerId)).toThrow(
      "Seller already added to this operation"
    );
  });

  it("should throw error when removing a seller that does not exist", () => {
    const sellerId = Id.generate();
    const operation = OperationBuilder.create().build();

    expect(() => operation.removeSeller(sellerId)).toThrow(
      "Seller not found in this operation"
    );
  });

  it("should activate operation", () => {
    const operation = OperationBuilder.create().build();

    operation.activate();

    expect(operation.status).toBe(OperationStatus.ACTIVE);
  });
});
