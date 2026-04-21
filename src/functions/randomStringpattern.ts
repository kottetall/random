import { randomIntBetween } from "./randomIntBetween.js";
import { randomLetter } from "./randomLetter.js";
import { randomFromArray } from "./randomFromArray.js";
import { casing } from "../constants/random.constant.js";
import {
  alphabetLowercase,
  alphabetUppercase,
} from "../constants/chars.constant.js";

/**
 * Generates a random string by interpreting two input strings as per-character bounds.
 *
 * For each character position, the method computes the inclusive range between the
 * corresponding characters of `min` and `max`, then randomly selects a character
 * within that range. Each character is generated independently.
 *
 * Note: The method does not choose between the two input strings; instead, it
 * produces new strings by combining characters from the defined ranges.
 *
 * @param min - The lower bound string (per-character).
 * @param max - The upper bound string (per-character).
 * @returns A randomly generated string within the defined character ranges.
 *
 * @example
 * Random.arbitraryString("a2", "b1");
 * // Possible outputs: "a1", "b1", "a2", "b2"
 */
export function randomStringpattern(min: string, max: string) {
  if (min.length !== max.length) {
    throw new Error("min and max need to be the same character length");
  }

  const validChars = new RegExp(/^[\dA-z]+$/);
  if (!validChars.test(min) || !validChars.test(max)) {
    throw new Error(
      "Only numbers and letters - A to z - are allowed right now",
    );
  }

  let result = "";
  for (let i = 0; i < min.length; i++) {
    const charMin = min[i];
    const charMax = max[i];

    // TODO: Refactor
    const bothIsNumber = /\d/.test(charMin) && /\d/.test(charMax);
    const bothIsAlphabet = /[A-z]/.test(charMin) && /[A-z]/.test(charMax);

    // TODO: Add symbol handling
    if (bothIsNumber) {
      const numberMin = Number.parseInt(charMin, 10);
      const numberMax = Number.parseInt(charMax, 10);
      result += randomIntBetween(numberMin, numberMax);
    } else if (bothIsAlphabet) {
      const bothUppercase = /[A]/.test(charMin) && /[A]/.test(charMax);
      const oneUppercase = /[A]/.test(charMin) || /[A]/.test(charMax);
      if (bothUppercase) {
        result += randomLetter(casing.UPPER, charMin, charMax);
      } else if (oneUppercase) {
        result += randomLetter();
      } else {
        result += randomLetter(casing.LOWER, charMin, charMax);
      }
    } else {
      const pool: string[] = [];
      const num = /\d/.test(charMin) ? charMin : charMax;
      const str = !/\d/.test(charMin) ? charMin : charMax;

      for (let i = Number.parseInt(num, 10); i <= 9; i++) {
        pool.push(`${i}`);
      }

      let startIndex = alphabetLowercase.indexOf(
        str as (typeof alphabetLowercase)[number],
      );

      if (startIndex < 0) {
        startIndex = alphabetUppercase.indexOf(
          str as (typeof alphabetUppercase)[number],
        );
      }

      let strSlice: string[] = alphabetLowercase.slice(0, startIndex);

      if (/[A-Z]/.test(str)) {
        strSlice = strSlice.map((letter) => letter.toUpperCase());
      }

      pool.push(...strSlice);
      result += randomFromArray(pool);
    }
  }

  return result;
}
