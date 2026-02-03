import { describe, expect, test } from "vitest";
import { Random } from "../src";

describe("Random", () => {
  describe("intBetween", () => {
    test("Only returns expected values", () => {
      expect(Random.intBetween(1, 3)).toBeOneOf([1, 2, 3]);
      expect(Random.intBetween(0, 2)).toBeOneOf([0, 1, 2]);
      expect(Random.intBetween(123658, 123661)).toBeOneOf([
        123658, 123659, 123660, 123661,
      ]);
    });

    test("Handles negative numbers", () => {
      expect(Random.intBetween(-3, -1)).toBeOneOf([-3, -2, -1]);
    });

    test("Handles flipped params", () => {
      expect(Random.intBetween(3, 1)).toBeOneOf([1, 2, 3]);
    });
  });
});
