import { describe, test, expect } from "vitest";
import { randomStringpattern } from "../../src/functions/randomStringpattern";

describe("randomStringpattern", () => {
  test("Only returns expected values", () => {
    expect(randomStringpattern("11", "13")).toBeOneOf(["11", "12", "13"]);
    expect(randomStringpattern("11", "31")).toBeOneOf(["11", "21", "31"]);
    expect(randomStringpattern("a2", "b1")).toBeOneOf(["a1", "b1", "a2", "b2"]);
    expect(randomStringpattern("ab", "cb")).toBeOneOf(["ab", "bb", "cb"]);
    expect(randomStringpattern("cb", "ab")).toBeOneOf(["ab", "bb", "cb"]);
    expect(randomStringpattern("ef", "fe")).toBeOneOf(["ee", "ff", "ef", "fe"]);
    expect(randomStringpattern("ggg", "ggg")).toBeOneOf(["ggg"]);
    expect(randomStringpattern("9", "A")).toBeOneOf(["A", "9"]);
    expect(randomStringpattern("8", "b")).toBeOneOf(["8", "9", "a", "b"]);
  });
});
