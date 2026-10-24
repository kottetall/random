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

export function capitalizeWord(word: string): string {
  const letterArray = word.split("");
  letterArray[0] = letterArray[0].toUpperCase();
  return letterArray.join("");
}

export function paddNumberString(input: string, minLength = 2): string {
  if (input.length >= minLength) return input;
  const neededPadding = minLength - input.length;
  let paddedstring = input;
  for (let i = 0; i < neededPadding; i++) {
    paddedstring = `0${paddedstring}`;
  }
  return paddedstring;
}
