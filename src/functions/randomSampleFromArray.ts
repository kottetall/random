import { randomIntBetween } from "./randomIntBetween.js";

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
export function randomSampleFromArray<T>(
  source: T[],
  nOfSamples?: number,
): T[] {
  nOfSamples ??= randomIntBetween(0, source.length - 1);

  if (nOfSamples > source.length - 1) {
    throw new Error(`nOfSamples needs to be smaller than the source length`);
  }

  const pool = structuredClone(source);
  const sample: T[] = [];
  for (let i = 0; i < nOfSamples; i++) {
    const randomIndex = randomIntBetween(0, pool.length - 1);
    const randomItem = pool.splice(randomIndex, 1)[0];
    sample.push(randomItem);
  }
  return sample;
}
