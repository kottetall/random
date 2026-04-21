import { randomIntBetween } from "./randomIntBetween.js";

/**
 * Returns a value from the provided array
 * @param source
 * @returns
 */
export function randomFromArray<T>(source: T[]): T {
  const maxIndex = source.length - 1;
  const randomIndex = randomIntBetween(0, maxIndex);
  return source[randomIndex];
}
