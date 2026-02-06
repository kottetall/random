import {
  alphabetLowercase,
  alphabetUppercase,
} from "./constants/chars.constant";
import {
  booleanString,
  casing,
  falsyValues,
  httpCodes,
  httpCodesDictionary,
  truthyValues,
} from "./constants/random.constant";

import {
  firstNameFemale,
  firstNameMale,
  firstNameNeutral,
  gender,
  lastname,
} from "./constants/name.constant";

import { millis } from "./constants/time.constant";

import { BooleanString, Casing } from "./types/random.type";
import { ObjectValues, ObjectValuesArray } from "./types/utils.type";
import { Gender } from "./types/name.type";

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
    const result = Random.boolean() ? booleanString.TRUE : booleanString.FALSE;
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

    if (startIndex > endIndex) {
      const tmpStart = startIndex;
      startIndex = endIndex;
      endIndex = tmpStart;
    }

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

    return Random.fromArray(source);
  }

  static word(minLength?: number, maxLength?: number) {
    minLength ??= 2;
    maxLength ??= 6;
    if (maxLength < minLength) {
      const tmpMinLength = minLength;
      minLength = maxLength;
      maxLength = tmpMinLength;
    }

    const nLetters = Random.intBetween(minLength, maxLength);

    let wordResult = "";
    for (let i = 0; i < nLetters; i++) {
      wordResult += Random.letter(casing.LOWER);
    }

    return wordResult;
  }

  static sentence(minWords?: number, maxWords?: number) {
    minWords ??= 2;
    maxWords ??= 6;
    if (maxWords < minWords) {
      const tmpMinWords = minWords;
      minWords = maxWords;
      maxWords = tmpMinWords;
    }

    const nOfWords = Random.intBetween(minWords, maxWords);

    let sentenceBase = "";
    for (let i = 0; i < nOfWords; i++) {
      sentenceBase = `${sentenceBase} ${Random.word()}`;
    }

    return `${sentenceBase.trim()}.`;
  }

  static paragraph(minSentence?: number, maxSentence?: number) {
    minSentence ??= 6;
    maxSentence ??= 15;
    if (maxSentence < minSentence) {
      const tmpMinSentence = minSentence;
      minSentence = maxSentence;
      maxSentence = tmpMinSentence;
    }

    const nOfSentences = Random.intBetween(minSentence, maxSentence);
    let result = "";
    for (let i = 0; i < nOfSentences; i++) {
      result = `${result} ${Random.sentence()}`;
    }
    return result.trim();
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
      const delayInMs = Random.intBetween(minMs, maxMs);
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

    return Random.fromArray(namePool);
  }

  /**
   * Gives a surname/last name
   * @returns
   */
  static lastName() {
    return Random.fromArray([...lastname]);
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
    return Random.fromArray([...httpCodes]);
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
    const randomMillis = Random.intBetween(0, millis.DAY);
    return new Date(randomMillis).toLocaleTimeString();
  }

  /**
   * Returns a date (and time) within the given range
   * @param min - first date in range
   * @param max - last date in range
   * @returns
   */
  static date(min: Date, max: Date) {
    if (max.getTime() < min.getTime()) {
      const oldMin = min;
      min = max;
      max = oldMin;
    }

    const randomDate = Random.intBetween(min.getTime(), max.getTime());
    return new Date(randomDate);
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
  static arbitraryString(min: string, max: string) {
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
        result += Random.intBetween(numberMin, numberMax);
      } else if (bothIsAlphabet) {
        const bothUppercase = /[A]/.test(charMin) && /[A]/.test(charMax);
        const oneUppercase = /[A]/.test(charMin) || /[A]/.test(charMax);
        if (bothUppercase) {
          result += Random.letter(casing.UPPER, charMin, charMax);
        } else if (oneUppercase) {
          result += Random.letter();
        } else {
          result += Random.letter(casing.LOWER, charMin, charMax);
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
        result += Random.fromArray(pool);
      }
    }

    return result;
  }
}
