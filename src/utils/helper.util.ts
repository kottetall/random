/**
 * Normalizes two values so that the smaller value is returned as `min`
 * and the larger value is returned as `max`.
 *
 * @param {T} valueA - The first value to compare.
 * @param {T} valueB - The second value to compare.
 * @returns {{ min: T, max: T }} An object containing the normalized minimum and maximum values.
 *
 * @example
 * normalizeMinMax(10, 3);
 * // => { min: 3, max: 10 }
 */
export function normalizeMinMax<T extends string | number>(
  valueA: T,
  valueB: T,
): { min: T; max: T } {
  return {
    min: valueA < valueB ? valueA : valueB,
    max: valueA > valueB ? valueA : valueB,
  };
}
