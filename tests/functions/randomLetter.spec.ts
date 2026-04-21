import { describe, test, expect } from "vitest";
import { randomLetter } from "../../src/functions/randomLetter";
import { casing } from "../../src/constants/random.constant";

describe("randomLetter", () => {
  test("Only returns expected values", () => {
    expect(randomLetter()).toMatch(/^[A-z]$/);
    expect(randomLetter(casing.UPPER)).toMatch(/^[A-Z]$/);
    expect(randomLetter(casing.LOWER)).toMatch(/^[a-z]$/);
    expect(randomLetter(casing.LOWER, "b", "d")).toMatch(/^[b-d]$/);
    expect(randomLetter(casing.LOWER, "b", "d")).toMatch(/^[b-d]$/);
    expect(randomLetter(casing.LOWER, "b", "d")).toMatch(/^[b-d]$/);
    expect(randomLetter(casing.LOWER, "b", "d")).toMatch(/^[b-d]$/);
  });
});
