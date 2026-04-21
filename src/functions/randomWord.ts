import { randomIntBetween } from "./randomIntBetween.js";
import { randomLetter } from "./randomLetter.js";
import { casing } from "../constants/random.constant.js";
import { normalizeMinMax } from "../utils/helper.util.js";
import { capitalizeWord } from "../utils/helper.util.js";

/**
 * Generates a random lowercase word.
 *
 * The word length is randomly determined between `minLength` and `maxLength`.
 * If no values are provided, the default length range is 2–6 characters.
 * The method ensures that the minimum and maximum values are normalized
 * before generating the word length.
 *
 * @param {number} minLength - The minimum length of the generated word.
 * @param {number} maxLength - The maximum length of the generated word.
 * @returns {string} A randomly generated lowercase word.
 *
 * @example
 * Random.word();
 * // Possible result: "kqz"
 *
 * @example
 * Random.word(4, 8);
 * // Possible result: "xjtrpa"
 */
export function randomWord(
  minLength?: number,
  maxLength?: number,
  capitalize?: boolean,
) {
  minLength ??= 2;
  maxLength ??= 6;

  const normalizedLengths = normalizeMinMax(minLength, maxLength);
  minLength = normalizedLengths.min;
  maxLength = normalizedLengths.max;

  const nLetters = randomIntBetween(minLength, maxLength);

  let wordResult = "";
  for (let i = 0; i < nLetters; i++) {
    wordResult += randomLetter(casing.LOWER);
  }

  return capitalize ? capitalizeWord(wordResult) : wordResult;
}
