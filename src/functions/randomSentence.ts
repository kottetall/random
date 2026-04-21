import { normalizeMinMax, capitalizeWord } from "./../utils/helper.util.js";
import { randomIntBetween } from "./randomIntBetween.js";
import { randomWord } from "./randomWord.js";

/**
 * Generates a random lowercase sentence.
 *
 * The number of words in the sentence is randomly determined between
 * `minWords` and `maxWords`. If no values are provided, the default
 * range is 2–6 words. The minimum and maximum values are normalized
 * before generating the sentence length.
 *
 * Each word is generated using `Random.word()` and the final sentence
 * is trimmed and ends with a period.
 *
 * @param {number} minWords - The minimum number of words in the sentence.
 * @param {number} maxWords - The maximum number of words in the sentence.
 * @returns {string} A randomly generated lowercase sentence ending with a period.
 *
 * @example
 * Random.sentence();
 * // Possible result: "lorem ipsum dolor."
 *
 * @example
 * Random.sentence(3, 5);
 * // Possible result: "xkf abcd pqrs."
 */
export function randomSentence(minWords?: number, maxWords?: number) {
  minWords ??= 2;
  maxWords ??= 6;

  const normalizedWordLengths = normalizeMinMax(minWords, maxWords);
  minWords = normalizedWordLengths.min;
  maxWords = normalizedWordLengths.max;

  const nOfWords = randomIntBetween(minWords, maxWords);

  let sentenceBase = "";
  for (let i = 0; i < nOfWords; i++) {
    sentenceBase = `${sentenceBase} ${randomWord()}`;
  }

  return `${capitalizeWord(sentenceBase.trim())}.`;
}
