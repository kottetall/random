import { describe, test, expect } from "vitest";
import { randomParagraph } from "../../src/functions/randomParagraph";

describe("paragraph", () => {
  test("Only returns expected values", () => {
    expect(/^[A-z\.\s]+$/gi.test(randomParagraph())).toBe(true);
  });
});
