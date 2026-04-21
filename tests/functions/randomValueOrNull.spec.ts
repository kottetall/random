import { describe, test, expect } from "vitest";
import { randomValueOrNull } from "../../src/functions/randomValueOrNull";

describe("randomValueOrNull", () => {
  test("Only returns expected values", () => {
    expect(randomValueOrNull("x", 0)).toBe("x");
    expect(randomValueOrNull("x", 100)).toBe(null);
    expect(randomValueOrNull(1, 0)).toBe(1);
    expect(randomValueOrNull(1, 100)).toBe(null);
    expect(randomValueOrNull(false, 0)).toBe(false);
    expect(randomValueOrNull(false, 100)).toBe(null);
    expect(randomValueOrNull([1], 0)).toStrictEqual([1]);
    expect(randomValueOrNull([1], 100)).toBe(null);
    expect(randomValueOrNull({ foo: 1 }, 0)).toStrictEqual({ foo: 1 });
    expect(randomValueOrNull({ foo: 1 }, 100)).toBe(null);
  });
});
