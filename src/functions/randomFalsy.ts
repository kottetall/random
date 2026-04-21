import { falsyValues } from "../constants/random.constant.js";
import { randomFromArray } from "./randomFromArray.js";

/**
 * Returns a falsy value
 * @returns
 */
export function randomFalsy() {
  return randomFromArray([...falsyValues]);
}
