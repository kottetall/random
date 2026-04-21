import { describe, test, expect } from "vitest";
import { randomWord } from "../../src/functions/randomWord";

describe("word", () => {
  test("Only returns expected values", () => {
    expect(randomWord()).toMatch(/^[A-z]{2,6}$/);
    expect(randomWord()).toMatch(/^[A-z]{2,6}$/);
    expect(randomWord()).toMatch(/^[A-z]{2,6}$/);
    expect(randomWord()).toMatch(/^[A-z]{2,6}$/);
    expect(randomWord(3, 4)).toMatch(/^[A-z]{3,4}$/);
    expect(randomWord(3, 4)).toMatch(/^[A-z]{3,4}$/);
    expect(randomWord(3, 4)).toMatch(/^[A-z]{3,4}$/);
    expect(randomWord(3, 4)).toMatch(/^[A-z]{3,4}$/);
    expect(randomWord(3, 4, true)).toMatch(/^[A-Z][a-z]{2,3}$/);
  });
});
