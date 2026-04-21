/**
 * Returns either `valueA` or `valueB` based on a given probability.
 *
 * The probability of returning `valueA` is controlled by `chanceOfA`,
 * expressed as a percentage between 0 and 100. If no value is provided,
 * it defaults to 50 (equal chance).
 *
 * @template T
 * @template K
 * @param {T} valueA - The first possible return value.
 * @param {K} valueB - The second possible return value.
 * @param {number} [chanceOfA=50] - The probability (0–100) of returning `valueA`.
 * @returns {T | K} Either `valueA` or `valueB` depending on the probability.
 *
 * @throws {Error} If `chanceOfA` is less than 0 or greater than 100.
 *
 * @example
 * Random.valueAOrValueB("yes", "no");
 * // 50% chance of "yes"
 *
 * @example
 * Random.valueAOrValueB(true, false, 80);
 * // 80% chance of true
 */
export function randomValueAOrValueB<T, K>(
  valueA: T,
  valueB: K,
  chanceOfA?: number,
): T | K {
  chanceOfA ??= 50;

  if (chanceOfA < 0 || chanceOfA > 100) {
    throw new Error(`chanceOfA needs to be between 0-100 - got ${chanceOfA}`);
  }

  chanceOfA = chanceOfA / 100;

  return Math.random() <= chanceOfA ? valueA : valueB;
}
