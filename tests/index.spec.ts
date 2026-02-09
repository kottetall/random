import { describe, expect, test } from "vitest";
import { Random } from "../src";
import {
  alphabetLowercase,
  alphabetUppercase,
} from "../src/constants/chars.constant";
import { casing } from "../src/constants/random.constant";
import { weekDays } from "../src/constants/time.constant";

describe("Random", () => {
  describe("intBetween", () => {
    test("Only returns expected values", () => {
      expect(Random.intBetween(1, 3)).toBeOneOf([1, 2, 3]);
      expect(Random.intBetween(0, 2)).toBeOneOf([0, 1, 2]);
      expect(Random.intBetween(123658, 123661)).toBeOneOf([
        123658, 123659, 123660, 123661,
      ]);
    });

    test("Handles negative numbers", () => {
      expect(Random.intBetween(-3, -1)).toBeOneOf([-3, -2, -1]);
    });

    test("Handles flipped params", () => {
      expect(Random.intBetween(3, 1)).toBeOneOf([1, 2, 3]);
    });
  });

  describe("day", () => {
    test("Only returns expected values", () => {
      expect(Random.day()).toBeOneOf(Object.values(weekDays));
    });
  });

  describe("letter", () => {
    test("Only returns expected values", () => {
      expect(Random.letter()).toBeOneOf([
        ...alphabetLowercase,
        ...alphabetUppercase,
      ]);
      expect(Random.letter(casing.LOWER)).toBeOneOf([...alphabetLowercase]);
      expect(Random.letter(casing.UPPER)).toBeOneOf([...alphabetUppercase]);
      expect(Random.letter(casing.LOWER, "a", "c")).toBeOneOf(["a", "b", "c"]);
      expect(Random.letter(casing.LOWER, "c", "a")).toBeOneOf(["a", "b", "c"]);
      expect(Random.letter(undefined, "a", "c")).toBeOneOf([
        "a",
        "b",
        "c",
        "A",
        "B",
        "C",
      ]);
      expect(Random.letter(casing.LOWER, undefined, "c")).toBeOneOf([
        "a",
        "b",
        "c",
      ]);
      expect(Random.letter(casing.LOWER, "x", undefined)).toBeOneOf([
        "x",
        "y",
        "z",
      ]);
    });
  });

  describe("word", () => {
    test("Only returns expected values", () => {
      expect(/^[A-z]+$/gi.test(Random.word())).toBe(true);
      expect(/^[A-z]+$/gi.test(Random.word())).toBe(true);
      expect(/^[A-z]+$/gi.test(Random.word())).toBe(true);
      expect(Random.word(2, 3).length).toBeOneOf([2, 3]);
      expect(Random.word(2, 3).length).toBeOneOf([2, 3]);
      expect(Random.word(2, 3).length).toBeOneOf([2, 3]);
      expect(Random.word(3, 2).length).toBeOneOf([2, 3]);
    });
  });

  describe("sentence", () => {
    test("Only returns expected values", () => {
      expect(/^[A-z\.\s]+$/gi.test(Random.sentence())).toBe(true);
    });
  });

  describe("paragraph", () => {
    test("Only returns expected values", () => {
      expect(/^[A-z\.\s]+$/gi.test(Random.paragraph())).toBe(true);
    });
  });

  describe("arbitraryString", () => {
    test("Only returns expected values", () => {
      expect(Random.arbitraryString("11", "13")).toBeOneOf(["11", "12", "13"]);
      expect(Random.arbitraryString("11", "31")).toBeOneOf(["11", "21", "31"]);
      expect(Random.arbitraryString("a2", "b1")).toBeOneOf([
        "a1",
        "b1",
        "a2",
        "b2",
      ]);
      expect(Random.arbitraryString("ab", "cb")).toBeOneOf(["ab", "bb", "cb"]);
      expect(Random.arbitraryString("cb", "ab")).toBeOneOf(["ab", "bb", "cb"]);
      expect(Random.arbitraryString("ef", "fe")).toBeOneOf([
        "ee",
        "ff",
        "ef",
        "fe",
      ]);
      expect(Random.arbitraryString("ggg", "ggg")).toBeOneOf(["ggg"]);
      expect(Random.arbitraryString("9", "A")).toBeOneOf(["A", "9"]);
      expect(Random.arbitraryString("8", "b")).toBeOneOf(["8", "9", "a", "b"]);
    });
  });
});
