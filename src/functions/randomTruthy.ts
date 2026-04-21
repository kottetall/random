import { truthyValues } from "../constants/random.constant.js";
import { randomFromArray } from "./randomFromArray.js";

/**
 * Returns a truthy value
 * @returns
 */
export function randomTruthy() {
  return randomFromArray([...truthyValues]);
}
