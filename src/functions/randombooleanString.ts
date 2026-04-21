import { randomBoolean } from "./randomBoolean.js";
import { Casing } from "../types/random.type.js";
import { booleanString, casing } from "../constants/random.constant.js";

/**
 * Returns "true" or "false" in lowercase unless casing has been specified
 * @param booleanCasing
 * @returns
 */
export function randomBooleanString(
  booleanCasing?: Casing,
  chanceOfTrue?: number,
) {
  if (!booleanCasing) booleanCasing = casing.LOWER;
  chanceOfTrue ??= 50;
  const result = randomBoolean(chanceOfTrue)
    ? booleanString.TRUE
    : booleanString.FALSE;
  return booleanCasing === casing.LOWER ? result : result.toUpperCase();
}
