import { describe, test, expect } from "vitest";
import { randomIntBetween } from "../../src/functions/randomIntBetween";

describe("randomIntBetween", () => {
  test("Only returns expected values", () => {
    expect(randomIntBetween(1, 3)).toBeOneOf([1, 2, 3]);
    expect(randomIntBetween(0, 2)).toBeOneOf([0, 1, 2]);
    expect(randomIntBetween(123658, 123661)).toBeOneOf([
      123658, 123659, 123660, 123661,
    ]);
  });

  test("Handles negative numbers", () => {
    expect(randomIntBetween(-3, -1)).toBeOneOf([-3, -2, -1]);
  });

  test("Handles flipped params", () => {
    expect(randomIntBetween(3, 1)).toBeOneOf([1, 2, 3]);
  });
});
