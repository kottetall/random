import { describe, test, expect } from "vitest";
import { randomItemList } from "../../src/functions/randomItemList.js";

describe("randomItemList", () => {
  test("Only returns expected values", () => {
    expect(randomItemList(() => "test", 1, 1)).toContain("test");
    expect(randomItemList(() => "test", 1, 1).length).toEqual(1);
    expect(randomItemList(() => "test", 10, 10).length).toEqual(10);
  });
});
