import { describe, test, expect } from "vitest";
import { randomValueAOrValueB } from "../../src/functions/randomValueAorValueB.js";

describe("randomValueAOrValueB", () => {
  test("Only returns expected values", () => {
    expect(randomValueAOrValueB("x", 1, 0)).toBe(1);
    expect(randomValueAOrValueB("x", 1, 100)).toBe("x");
    expect(randomValueAOrValueB(1, "x", 0)).toBe("x");
    expect(randomValueAOrValueB(1, "x", 100)).toBe(1);
    expect(randomValueAOrValueB([1], { foo: 1 }, 0)).toStrictEqual({
      foo: 1,
    });
    expect(randomValueAOrValueB([1], { foo: 1 }, 100)).toStrictEqual([1]);
  });
});
