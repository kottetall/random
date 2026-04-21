import { casing } from "./../constants/random.constant.js";
import { Casing } from "./../types/random.type.js";
import { alphabetLowercase } from "./../constants/chars.constant.js";
import { normalizeMinMax } from "./../utils/helper.util.js";
import { randomFromArray } from "./randomFromArray.js";

/**
 * Generates a random letter within a specified alphabetical range.
 *
 * The method allows you to define the first and last letters of the range,
 * as well as whether the generated letter should be uppercase or lowercase.
 * The selection is inclusive, meaning both boundary letters can appear in the result.
 *
 * @param letterCasing - "upper" returns an uppercase letter; "lower" returns a lowercase letter. undefined/ommitted can give either
 * @param start - The first letter in the range.
 * @param end - The last letter in the range.
 * @returns A randomly generated letter within the specified range.
 *
 * @example
 * Random.letter("lower", "a", "f");
 * // Possible outputs: "a", "b", "c", "d", "e", "f"
 *
 * @example
 * Random.letter("upper", "A", "Z");
 * // Possible outputs: "A" ... "Z"
 */
export function randomLetter(
  letterCasing?: Casing,
  start?: string,
  end?: string,
) {
  const pool: string[] = [...alphabetLowercase];

  // TODO: Refactor min/max logic
  let startIndex = 0;
  if (start) {
    startIndex = pool.indexOf(start.toLowerCase());
  }

  let endIndex = pool.length - 1;
  if (end) {
    endIndex = pool.indexOf(end.toLowerCase());
  }

  const normalizedIndexes = normalizeMinMax(startIndex, endIndex);
  startIndex = normalizedIndexes.min;
  endIndex = normalizedIndexes.max;

  const source: string[] = [];
  if (letterCasing === casing.LOWER || !letterCasing) {
    const letters = pool.slice(startIndex, endIndex + 1);
    source.push(...letters);
  }
  if (letterCasing === casing.UPPER || !letterCasing) {
    const letters = pool
      .slice(startIndex, endIndex)
      .map((letter) => letter.toUpperCase());
    source.push(...letters);
  }

  return randomFromArray(source);
}
