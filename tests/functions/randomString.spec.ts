import { describe, test, expect } from "vitest";
import { randomString } from "../../src/functions/randomString.js";

describe("randomString", () => {
  test("Only returns expected values", () => {
    expect(randomString({ minLength: 1, maxLength: 1 })).toMatch(
      /^[A-z\d]{1}$/,
    );
    expect(randomString({ minLength: 1, maxLength: 3 })).toMatch(
      /^[A-z\d]{1,3}$/,
    );
  });
});
