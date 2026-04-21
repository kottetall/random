import { randomBoolean } from "./randomBoolean.js";

/**
 * Returns 1 or 0
 * @returns
 */
export function randomBooleanInt() {
  return randomBoolean() ? 1 : 0;
}
