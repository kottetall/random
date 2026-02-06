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
   * Returns a letter, can be either lowercase or uppercase unless specified
   * @param letterCasing
   * @returns
   */
  static letter(letterCasing?: Casing, min?: string, max?: string) {
    const pool: string[] = [...alphabetLowercase];

    // TODO: Refactor min/max logic
    let minIndex = 0;
    if (min) {
      minIndex = pool.indexOf(min.toLowerCase());
    }

    let maxIndex = pool.length - 1;
    if (max) {
      maxIndex = pool.indexOf(max.toLowerCase());
    }

    if (minIndex > maxIndex) {
      const tmpMin = minIndex;
      minIndex = maxIndex;
      maxIndex = tmpMin;
    }

    const source: string[] = [];
    if (letterCasing === casing.LOWER || !letterCasing) {
      const letters = pool.slice(minIndex, maxIndex + 1);
      source.push(...letters);
    }
    if (letterCasing === casing.UPPER || !letterCasing) {
      const letters = pool
        .slice(minIndex, maxIndex)
        .map((letter) => letter.toUpperCase());
      source.push(...letters);
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
   * Get a random string based on the strings provided. Min and max needs to have the same length since
   * the method loops through each character and uses them as the range to randomly pick from -
   * min="ac" max="cd" -> "ac" | "bc" | "cc" | "ad" | "bd" | "cd"
   * @param min
   * @param max
   * @returns
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
      }
    }

    return result;
  }
}
