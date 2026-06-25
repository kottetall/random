import {
  alphabetLowercase,
  alphabetUppercase,
  numbers,
} from "../constants/chars.constant.js";
import { RandomStringParams } from "../types/randomString.type.js";
import { randomIntBetween } from "../functions/randomIntBetween.js";
import { randomFromArray } from "../functions/randomFromArray.js";

export function randomString(params: RandomStringParams): string {
  const { minLength, maxLength } = params;
  const charPool = [...alphabetLowercase, ...alphabetUppercase, ...numbers];
  const targetLength = randomIntBetween(minLength, maxLength);
  let result = "";

  for (let i = 0; i < targetLength; i++) {
    const randomChar = randomFromArray(charPool);
    result += randomChar;
  }

  return result;
}
