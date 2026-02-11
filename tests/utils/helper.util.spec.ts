import { describe, expect, test } from "vitest";
import { normalizeMinMax } from "../../src/utils/helper.util";

describe("normalizeMinMax", () => {
  test("Only returns expected values", () => {
    expect(normalizeMinMax(1, 2)).toStrictEqual({ min: 1, max: 2 });
    expect(normalizeMinMax(2, 1)).toStrictEqual({ min: 1, max: 2 });
    expect(normalizeMinMax(1, 1)).toStrictEqual({ min: 1, max: 1 });
    expect(normalizeMinMax(0, 0)).toStrictEqual({ min: 0, max: 0 });
    expect(normalizeMinMax(-3, -1)).toStrictEqual({ min: -3, max: -1 });
    expect(normalizeMinMax(-1, -3)).toStrictEqual({ min: -3, max: -1 });
    expect(normalizeMinMax("a", "b")).toStrictEqual({ min: "a", max: "b" });
    expect(normalizeMinMax("b", "a")).toStrictEqual({ min: "a", max: "b" });
    expect(normalizeMinMax("ba", "ab")).toStrictEqual({ min: "ab", max: "ba" });
  });
});
