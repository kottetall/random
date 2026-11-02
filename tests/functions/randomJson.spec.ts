import { describe, test, expect } from "vitest";
import { randomJson } from "../../src/functions/randomJson";

describe("randomJson", () => {
  test("Returns string", () => {
    for (let i = 0; i < 10; i++) {
      expect(typeof randomJson()).toBe("string");
    }
  });

  test("Returns valid JSON", () => {
    for (let i = 0; i < 10; i++) {
      expect(JSON.parse(randomJson())).toBeTruthy();
    }
  });
});
