import { randomValueAOrValueB } from "./randomValueAorValueB.js";

/**
 * Returns either the provided value or `null` based on a given probability.
 *
 * The probability of returning `null` is controlled by `percentOfNull`,
 * expressed as a percentage between 0 and 100. If no value is provided,
 * it defaults to 50 (equal chance of returning `value` or `null`).
 *
 * Internally uses `Random.valueAOrValueB`.
 *
 * @template T
 * @param {T} value - The value that may be returned.
 * @param {number} [percentOfNull=50] - The probability (0–100) of returning `null`.
 * @returns {T | null} Either the provided value or `null`.
 *
 * @throws {Error} If `percentOfNull` is less than 0 or greater than 100.
 *
 * @example
 * Random.valueOrNull("hello");
 * // 50% chance of null
 *
 * @example
 * Random.valueOrNull(42, 20);
 * // 20% chance of null, 80% chance of 42
 */
export function randomValueOrNull<T>(
  value: T,
  percentOfNull?: number,
): T | null {
  percentOfNull ??= 50;

  if (percentOfNull < 0 || percentOfNull > 100) {
    throw new Error(
      `probabilityOfNull needs to be between 0-100 - got ${percentOfNull}`,
    );
  }

  return randomValueAOrValueB(null, value, percentOfNull);
}
