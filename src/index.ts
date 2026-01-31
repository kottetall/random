import {
  alphabetLowercase,
  alphabetUppercase,
} from "./constants/chars.constant";
import {
  booleanString,
  casing,
  falsyValues,
  truthyValues,
} from "./constants/random.constant";

import { BooleanString, Casing } from "./types/random.type";
import { ObjectValues, ObjectValuesArray } from "./types/utils.type";

export class Random {
  static intBetween(min: number, max: number) {
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    if (max < min) {
      const oldMin = min;
      min = max;
      max = oldMin;
    }
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  static boolean() {
    return Math.random() < 0.5;
  }

  /**
   * Returns "true" or "false" in lowercase unless casing has been specified
   * @param booleanCasing
   * @returns
   */
  static booleanString(booleanCasing?: Casing) {
    if (!booleanCasing) booleanCasing = casing.LOWER;
    const result = Random.boolean()
      ? booleanString.TRUE_LOWERCASE
      : booleanString.FALSE_UPPERCASE;
    return booleanCasing === casing.LOWER ? result : result.toUpperCase();
  }

  /**
   * Returns 1 or 0
   * @returns
   */
  static booleanInt() {
    return Random.boolean() ? 1 : 0;
  }

  /**
   * Returns a falsy value
   * @returns
   */
  static falsy() {
    return Random.fromArray([...falsyValues]);
  }

  /**
   * Returns a truthy value
   * @returns
   */
  static truthy() {
    return Random.fromArray([...truthyValues]);
  }

  /**
   * Returns a value from the provided array
   * @param source
   * @returns
   */
  static fromArray<T>(source: T[]): T {
    const maxIndex = source.length - 1;
    const randomIndex = Random.intBetween(0, maxIndex);
    return source[randomIndex];
  }

  /**
   * Returns a value from the provided object
   * @param source
   * @returns
   */
  static fromObject<T extends Object>(source: T): ObjectValues<T> {
    const sourceValues = Object.values(source) as ObjectValuesArray<T>;
    return Random.fromArray(sourceValues);
  }

  /**
   * Returns a letter, can be either lowercase or uppercase unless specified
   * @param letterCasing
   * @returns
   */
  static letter(letterCasing?: Casing) {
    const source: string[] = [];
    if (letterCasing === casing.LOWER || !letterCasing) {
      source.push(...alphabetLowercase);
    }
    if (letterCasing === casing.UPPER || !letterCasing) {
      source.push(...alphabetUppercase);
    }

    return Random.fromArray(source);
  }

  /**
   * A wrapper for crypto.randomUUID
   * @returns
   */
  static uuid() {
    return crypto.randomUUID();
  }
}
