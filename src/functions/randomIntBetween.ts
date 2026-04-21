import { normalizeMinMax } from "../utils/helper.util.js";

export function randomIntBetween(minInt: number, maxInt: number): number {
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const { min, max } = normalizeMinMax(minInt, maxInt);
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
