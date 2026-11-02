import { randomObject } from "./randomObject.js";

/**
 * Returns a randomly generated JSON string
 * @returns
 */
export function randomJson() {
  const options = {
    maxDepth: 2,
  };
  return JSON.stringify(randomObject(options));
}
