import { describe, expect, test } from "vitest";
import { Random } from "../src";
import {
  alphabetLowercase,
  alphabetUppercase,
} from "../src/constants/chars.constant";
import { casing } from "../src/constants/random.constant";
import { weekDays } from "../src/constants/time.constant";
import { ColorOptions } from "../src/types/random.type";

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

  describe("sampleFromArray", () => {
    test("Only returns expected values", () => {
      expect(
        Random.sampleFromArray(["a", "b", "c"], 2).sort(
          (a: string, b: string) => (a > b ? 1 : -1),
        ),
      ).toBeOneOf([
        ["a", "b"],
        ["a", "c"],
        ["b", "c"],
      ]);
      expect(Random.sampleFromArray(["a", "b", "c"], 2).length).toBe(2);
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

  describe("stringpattern", () => {
    test("Only returns expected values", () => {
      expect(Random.stringpattern("11", "13")).toBeOneOf(["11", "12", "13"]);
      expect(Random.stringpattern("11", "31")).toBeOneOf(["11", "21", "31"]);
      expect(Random.stringpattern("a2", "b1")).toBeOneOf([
        "a1",
        "b1",
        "a2",
        "b2",
      ]);
      expect(Random.stringpattern("ab", "cb")).toBeOneOf(["ab", "bb", "cb"]);
      expect(Random.stringpattern("cb", "ab")).toBeOneOf(["ab", "bb", "cb"]);
      expect(Random.stringpattern("ef", "fe")).toBeOneOf([
        "ee",
        "ff",
        "ef",
        "fe",
      ]);
      expect(Random.stringpattern("ggg", "ggg")).toBeOneOf(["ggg"]);
      expect(Random.stringpattern("9", "A")).toBeOneOf(["A", "9"]);
      expect(Random.stringpattern("8", "b")).toBeOneOf(["8", "9", "a", "b"]);
    });
  });

  describe("color", () => {
    test("Only returns expected values", () => {
      const colorRegexFull = new RegExp(/^#[\da-f]+$/);
      expect(Random.color()).toMatch(colorRegexFull);

      const colorRegexMinMax = new RegExp(/^#d[a-f]d[a-f]d[a-f]$/);
      const testOptions: ColorOptions = {
        red: {
          min: 218,
          max: 223,
        },
        green: {
          min: 218,
          max: 223,
        },
        blue: {
          min: 218,
          max: 223,
        },
      };

      expect(Random.color(testOptions)).toMatch(colorRegexMinMax);
    });
  });
});
