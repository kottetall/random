import { randomIntBetween } from "./randomIntBetween.js";

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
export function randomShuffleArray<T>(source: T[]): T[] {
  const result = structuredClone ? structuredClone(source) : [...source];
  const sourceLength = source.length;
  for (let i = 0; i < sourceLength; i++) {
    const moveFrom = randomIntBetween(0, sourceLength - 1);
    const moveTo = randomIntBetween(0, sourceLength - 1);
    if (moveTo === moveFrom) continue;

    const [itemToMove] = result.splice(moveFrom, 1);
    result.splice(moveTo, 0, itemToMove);
  }
  return structuredClone ? structuredClone(result) : [...result];
}
