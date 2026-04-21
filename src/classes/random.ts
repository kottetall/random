import {
  httpCodes,
  httpCodesDictionary,
} from "./../constants/random.constant.js";

import {
  firstNameFemale,
  firstNameMale,
  firstNameNeutral,
  gender,
  lastname,
} from "./../constants/name.constant.js";

import { millis, weekDays } from "./../constants/time.constant.js";

import { normalizeMinMax } from "./../utils/helper.util.js";

import { Casing, ColorOptions } from "./../types/random.type.js";
import { ObjectValues, ObjectValuesArray } from "./../types/utils.type.js";
import { Gender } from "./../types/name.type.js";
import { randomIntBetween } from "../functions/randomIntBetween.js";
import { randomValueAOrValueB } from "../functions/randomValueAorValueB.js";
import { randomValueOrNull } from "../functions/randomValueOrNull.js";
import { randomBoolean } from "../functions/randomBoolean.js";
import { randomBooleanString } from "../functions/randombooleanString.js";
import { randomBooleanInt } from "../functions/randomBooleanInt.js";
import { randomFalsy } from "../functions/randomFalsy.js";
import { randomFromArray } from "../functions/randomFromArray.js";
import { randomShuffleArray } from "../functions/randomShuffleArray.js";
import { randomSampleFromArray } from "../functions/randomSampleFromArray.js";
import { randomTruthy } from "../functions/randomTruthy.js";
import { randomLetter } from "./../functions/randomLetter.js";
import { randomWord } from "../functions/randomWord.js";
import { randomSentence } from "./../functions/randomSentence.js";
import { randomParagraph } from "./../functions/randomParagraph.js";
import { randomStringpattern } from "../functions/randomStringpattern.js";
import { randomColor } from "./../functions/randomColor.js";

export class Random {
  static intBetween(minInt: number, maxInt: number) {
    return randomIntBetween(minInt, maxInt);
  }

  static boolean(chanceOfTrue?: number) {
    return randomBoolean(chanceOfTrue);
  }

  /**
   * Returns "true" or "false" in lowercase unless casing has been specified
   * @param booleanCasing
   * @returns
   */
  static booleanString(booleanCasing?: Casing, chanceOfTrue?: number) {
    return randomBooleanString(booleanCasing, chanceOfTrue);
  }

  /**
   * Returns 1 or 0
   * @returns
   */
  static booleanInt() {
    return randomBooleanInt();
  }

  /**
   * Returns a falsy value
   * @returns
   */
  static falsy() {
    return randomFalsy();
  }

  /**
   * Returns a truthy value
   * @returns
   */
  static truthy() {
    return randomTruthy();
  }

  /**
   * Returns either `valueA` or `valueB` based on a given probability.
   *
   * The probability of returning `valueA` is controlled by `chanceOfA`,
   * expressed as a percentage between 0 and 100. If no value is provided,
   * it defaults to 50 (equal chance).
   *
   * @template T
   * @template K
   * @param {T} valueA - The first possible return value.
   * @param {K} valueB - The second possible return value.
   * @param {number} [chanceOfA=50] - The probability (0–100) of returning `valueA`.
   * @returns {T | K} Either `valueA` or `valueB` depending on the probability.
   *
   * @throws {Error} If `chanceOfA` is less than 0 or greater than 100.
   *
   * @example
   * Random.valueAOrValueB("yes", "no");
   * // 50% chance of "yes"
   *
   * @example
   * Random.valueAOrValueB(true, false, 80);
   * // 80% chance of true
   */
  static valueAOrValueB<T, K>(valueA: T, valueB: K, chanceOfA?: number): T | K {
    return randomValueAOrValueB(valueA, valueB, chanceOfA);
  }

  /**
   * Returns either the provided value or `null` based on a given probability.
   *
   * The probability of returning `null` is controlled by `percentOfNull`,
   * expressed as a percentage between 0 and 100. If no value is provided,
   * it defaults to 50 (equal chance of returning `value` or `null`).
   *
   *
   * @template T
   * @param {T} value - The value that may be returned.
   * @param {number} [percentOfNull=50] - The probability (0–100) of returning `null`.
   * @returns {T | null} Either the provided value or `null`.
   *
   * @throws {Error} If `percentOfNull` is less than 0 or greater than 100.
   *
   * @example
   * Random.valueOrNull("hello");
   * // 50% chance of null
   *
   * @example
   * Random.valueOrNull(42, 20);
   * // 20% chance of null, 80% chance of 42
   */
  static valueOrNull<T>(value: T, percentOfNull?: number): T | null {
    return randomValueOrNull(value, percentOfNull);
  }

  /**
   * Returns either the provided value or `undefined` based on a given probability.
   *
   * The probability of returning `undefined` is controlled by
   * `percentOfUndefined`, expressed as a percentage between 0 and 100.
   * If no value is provided, it defaults to 50 (equal chance of returning
   * `value` or `undefined`).
   *
   * @template T
   * @param {T} value - The value that may be returned.
   * @param {number} [percentOfUndefined=50] - The probability (0–100) of returning `undefined`.
   * @returns {T | undefined} Either the provided value or `undefined`.
   *
   * @throws {Error} If `percentOfUndefined` is less than 0 or greater than 100.
   *
   * @example
   * Random.valueOrUndefined("hello");
   * // 50% chance of undefined
   *
   * @example
   * Random.valueOrUndefined(42, 10);
   * // 10% chance of undefined, 90% chance of 42
   */
  static valueOrUndefined<T>(
    value: T,
    percentOfUndefined?: number,
  ): T | undefined {
    return randomValueAOrValueB(undefined, value, percentOfUndefined);
  }

  /**
   * Returns a value from the provided array
   * @param source
   * @returns
   */
  static fromArray<T>(source: T[]): T {
    return randomFromArray(source);
  }

  /**
   * Returns a shuffled copy of the provided array.
   *
   * The original array is never modified. Instead, the method creates a copy
   * of the source array and randomly reorders its elements before returning it.
   *
   * The shuffle process randomly moves elements to new positions within the
   * array, resulting in a randomized ordering of the original values.
   *
   * @template T
   * @param {T[]} source - The array to shuffle.
   * @returns {T[]} A new array containing the same elements as `source`,
   * but in a random order.
   *
   * @example
   * Random.shuffleArray([1, 2, 3, 4]);
   * // Possible result: [3, 1, 4, 2]
   *
   * @example
   * const letters = ["a", "b", "c"];
   * const shuffled = Random.shuffleArray(letters);
   *
   * console.log(letters);
   * // ["a", "b", "c"] (unchanged)
   *
   * console.log(shuffled);
   * // ["c", "a", "b"]
   */
  static shuffleArray<T>(source: T[]): T[] {
    return randomShuffleArray(source);
  }

  /**
   * Returns a random subset of unique elements from an array.
   *
   * The method creates a shallow clone of the source array and randomly
   * selects elements without replacement. This means the same element
   * will never appear more than once in the returned result.
   *
   * If `nOfSamples` is not provided, a random number between 0 and
   * `source.length - 1` will be used.
   *
   * @template T
   * @param {T[]} source - The array to sample values from.
   * @param {number} [nOfSamples] - The number of unique elements to return.
   * @returns {T[]} An array containing randomly selected unique elements.
   *
   * @example
   * Random.sampleFromArray([1, 2, 3, 4], 2);
   * // Possible result: [3, 1]
   *
   * @example
   * Random.sampleFromArray(["a", "b", "c"]);
   * // Returns a random number of unique elements
   */
  static sampleFromArray<T>(source: T[], nOfSamples?: number): T[] {
    return randomSampleFromArray(source, nOfSamples);
  }

  /**
   * Returns a value from the provided object
   * @param source
   * @returns
   */
  static fromObject<T extends Object>(source: T): ObjectValues<T> {
    const sourceValues = Object.values(source) as ObjectValuesArray<T>;
    return randomFromArray(sourceValues);
  }

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
  static letter(letterCasing?: Casing, start?: string, end?: string) {
    return randomLetter(letterCasing, start, end);
  }

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
  static word(minLength?: number, maxLength?: number, capitalize?: boolean) {
    return randomWord(minLength, maxLength, capitalize);
  }

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
  static sentence(minWords?: number, maxWords?: number) {
    return randomSentence(minWords, maxWords);
  }

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
  static paragraph(minSentence?: number, maxSentence?: number) {
    return randomParagraph(minSentence, maxSentence);
  }

  /**
   * A wrapper for crypto.randomUUID
   * @returns
   */
  static uuid() {
    return crypto.randomUUID();
  }

  /**
   * Has a n% chance of throwing a error
   * @param probabilityOfError - The probability of a error beeing thrown - i.e 0.2 = 20% chance
   * @param errorMessage - The errormessage to be used instead of the default one
   * @param callback - The callback that should be run if there's no error
   * @returns
   */
  static throwError(
    probabilityOfError: number,
    errorMessage?: string,
    callback?: Function,
  ): void {
    if (probabilityOfError < 0 || probabilityOfError > 1) {
      // Trying a warning instead of throwing a error since it would probably
      // be masked by the actual intent - throwing a error sometimes
      console.warn("The probability needs to be between 0 and 1");
      return;
    }

    if (Math.random() < probabilityOfError) {
      errorMessage ??= "This is a randomly triggered error";
      throw new Error(errorMessage);
    }

    if (callback) {
      callback();
    }
  }

  /**
   *
   * @param minMs - Minimum milliseconds to delay
   * @param maxMs - Maximum milliseconds to delay
   * @param value - Optional return value
   * @returns
   */
  static async delay<T>(minMs: number, maxMs: number, value?: T) {
    return new Promise<T | undefined>((resolve, reject) => {
      const delayInMs = randomIntBetween(minMs, maxMs);
      setTimeout(() => {
        resolve(value);
      }, delayInMs);
    });
  }

  /**
   * Returns a name
   * @param nameGender - Only male, female or unisex. If omitted, the name could be either one
   * @returns
   */
  static firstName(nameGender?: Gender) {
    const namePool: string[] = [];
    if (!nameGender || nameGender === gender.UNISEX) {
      namePool.push(...firstNameNeutral);
    }
    if (!nameGender || nameGender === gender.MALE) {
      namePool.push(...firstNameMale);
    }
    if (!nameGender || nameGender === gender.FEMALE) {
      namePool.push(...firstNameFemale);
    }

    return randomFromArray(namePool);
  }

  /**
   * Gives a surname/last name
   * @returns
   */
  static lastName() {
    return randomFromArray([...lastname]);
  }

  /**
   * Gives a full name - first and last name
   * @param nameGender
   * @returns
   */
  static fullName(nameGender?: Gender) {
    return `${Random.firstName(nameGender)} ${Random.lastName()}`;
  }

  /**
   * Get a http code i.e 200, 400
   * @returns
   */
  static httpStatusCode() {
    return randomFromArray([...httpCodes]);
  }

  /**
   * Get a http status i.e Created, Accepted
   * @returns
   */
  static httpStatus() {
    const randomStatusCode = Random.httpStatusCode();
    return httpCodesDictionary[randomStatusCode];
  }

  /**
   * Returns a specific time as a localeTimeString
   * @returns
   */
  static time() {
    const randomMillis = randomIntBetween(0, millis.DAY);
    return new Date(randomMillis).toLocaleTimeString();
  }

  /**
   * Returns a date (and time) within the given range
   * @param min - first date in range
   * @param max - last date in range
   * @returns
   */
  static date(minDate: Date, maxDate: Date) {
    const { min, max } = normalizeMinMax(minDate.getTime(), maxDate.getTime());
    const randomDate = randomIntBetween(min, max);
    return new Date(randomDate);
  }

  static day() {
    return Random.fromObject(weekDays);
  }

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
  static stringpattern(min: string, max: string) {
    return randomStringpattern(min, max);
  }

  /**
   * Generates a random HEX color string.
   *
   * Each RGB channel (red, green, blue) is randomly generated between
   * the provided minimum and maximum values. If no options are specified,
   * each channel defaults to the full 0–255 range.
   *
   * The result is returned as a hexadecimal color string in the format `#RRGGBB`.
   *
   * @param {ColorOptions} [options] - Optional configuration for RGB ranges.
   * @param {{ min: number, max: number }} [options.red] - Range for the red channel (0–255).
   * @param {{ min: number, max: number }} [options.green] - Range for the green channel (0–255).
   * @param {{ min: number, max: number }} [options.blue] - Range for the blue channel (0–255).
   *
   * @returns {string} A randomly generated HEX color string.
   *
   * @example
   * Random.color();
   * // Possible result: "#3fa9d2"
   *
   * @example
   * Random.color({
   *   red: { min: 200, max: 255 },
   *   green: { min: 0, max: 50 },
   *   blue: { min: 0, max: 50 }
   * });
   * // Generates a reddish color
   */
  static color(options?: ColorOptions): string {
    return randomColor(options);
  }
}
