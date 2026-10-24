import { describe, expect, test } from "vitest";
import {
  capitalizeWord,
  normalizeMinMax,
  paddNumberString,
} from "../../src/utils/helper.util";

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

describe("capitalizeWord", () => {
  test("Only returns expected values", () => {
    expect(capitalizeWord("test")).toEqual("Test");
    expect(capitalizeWord("Test")).toEqual("Test");
    expect(capitalizeWord("tesT")).toEqual("TesT");
    expect(capitalizeWord("fldkjsfjdsl dskljjdkasja")).toEqual(
      "Fldkjsfjdsl dskljjdkasja",
    );
  });
});

describe("paddNumberString", () => {
  test("Only returns expected values", () => {
    const shouldBePadded = [
      { input: "0", expectedResult: "00" },
      { input: "1", expectedResult: "01" },
      { input: "2", expectedResult: "02" },
      { input: "3", expectedResult: "03" },
      { input: "4", expectedResult: "04" },
      { input: "5", expectedResult: "05" },
      { input: "6", expectedResult: "06" },
      { input: "7", expectedResult: "07" },
      { input: "8", expectedResult: "08" },
      { input: "9", expectedResult: "09" },
    ];

    for (const data of shouldBePadded) {
      expect(paddNumberString(data.input)).toEqual(data.expectedResult);
    }

    const shouldNotBePadded = [
      { input: "10", expectedResult: "10" },
      { input: "20", expectedResult: "20" },
      { input: "30", expectedResult: "30" },
      { input: "40", expectedResult: "40" },
      { input: "50", expectedResult: "50" },
      { input: "60", expectedResult: "60" },
      { input: "70", expectedResult: "70" },
      { input: "80", expectedResult: "80" },
      { input: "90", expectedResult: "90" },
    ];

    for (const data of shouldNotBePadded) {
      expect(paddNumberString(data.input)).toEqual(data.expectedResult);
    }

    expect(paddNumberString("1", 4)).toEqual("0001");
  });
});
