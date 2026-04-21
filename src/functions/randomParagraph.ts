import { normalizeMinMax } from "./../utils/helper.util.js";
import { randomIntBetween } from "./randomIntBetween.js";
import { randomSentence } from "./randomSentence.js";

/**
 * Generates a random paragraph consisting of multiple sentences.
 *
 * The number of sentences in the paragraph is randomly determined
 * between `minSentence` and `maxSentence`. If no values are provided,
 * the default range is 6–15 sentences. The minimum and maximum values
 * are normalized before generating the paragraph length.
 *
 * Each sentence is generated using `Random.sentence()`. The final
 * paragraph is trimmed to remove leading whitespace.
 *
 * @param {number} [minSentence] - The minimum number of sentences in the paragraph.
 * @param {number} [maxSentence] - The maximum number of sentences in the paragraph.
 * @returns {string} A randomly generated paragraph.
 *
 * @example
 * Random.paragraph();
 * // Possible result:
 * // "abc def ghi. jkl mno. pqr stu vwx. ..."
 *
 * @example
 * Random.paragraph(3, 5);
 * // Generates a paragraph with 3–5 sentences.
 */
export function randomParagraph(minSentence?: number, maxSentence?: number) {
  minSentence ??= 6;
  maxSentence ??= 15;

  const normalizedSentenceLengths = normalizeMinMax(minSentence, maxSentence);
  minSentence = normalizedSentenceLengths.min;
  maxSentence = normalizedSentenceLengths.max;

  const nOfSentences = randomIntBetween(minSentence, maxSentence);
  let result = "";
  for (let i = 0; i < nOfSentences; i++) {
    result = `${result} ${randomSentence()}`;
  }
  return result.trim();
}
