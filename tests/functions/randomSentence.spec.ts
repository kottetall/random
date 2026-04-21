import { describe, test, expect } from "vitest";
import { randomSentence } from "../../src/functions/randomSentence";

describe("sentence", () => {
  test("Only returns expected values", () => {
    expect(randomSentence()).toMatch(/^[A-Z][\sa-z]+\.$/);
    expect(randomSentence()).toMatch(/^[A-Z][\sa-z]+\.$/);
    expect(randomSentence()).toMatch(/^[A-Z][\sa-z]+\.$/);
    expect(randomSentence()).toMatch(/^[A-Z][\sa-z]+\.$/);
    expect(randomSentence(2, 2)).toMatch(/^[A-Z][a-z]+\s[a-z]+\.$/);
    expect(randomSentence(2, 2)).toMatch(/^[A-Z][a-z]+\s[a-z]+\.$/);
    expect(randomSentence(3, 3)).toMatch(/^[A-Z][a-z]+\s[a-z]+\s[a-z]+\.$/);
  });
});
