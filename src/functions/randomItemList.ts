import { randomIntBetween } from "./randomIntBetween.js";

/**
 * Generates an array of random length filled with values produced by a callback function.
 *
 * The number of items is randomly chosen between `minItems` and `maxItems`
 * (inclusive). The provided callback `cb` is then executed once per item
 * and each returned value is added to the resulting array.
 *
 * This is useful for generating random lists of mock data such as names,
 * numbers, objects, or any other values.
 *
 * @template T
 * @param {T} cb - A callback function that generates a value for each list item.
 * @param {number} minItems - The minimum number of items to generate.
 * @param {number} maxItems - The maximum number of items to generate.
 * @returns {ReturnType<T>[]} An array containing values returned by the callback.
 *
 * @example
 * randomItemList(() => randomIntBetween(1, 10), 3, 6);
 * // Possible result: [4, 9, 2, 7]
 *
 * @example
 * randomItemList(() => randomWord(), 2, 4);
 * // Possible result: ["kex", "vudo", "pax"]
 */
export function randomItemList<T extends (...args: any) => any>(
  cb: T,
  minItems: number,
  maxItems: number,
): ReturnType<T>[] {
  const results: ReturnType<T>[] = [];
  const nOfItems = randomIntBetween(minItems, maxItems);

  for (let i = 0; i < nOfItems; i++) {
    results.push(cb());
  }

  return results;
}
