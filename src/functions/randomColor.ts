import { randomIntBetween } from "./randomIntBetween.js";
import { ColorOptions } from "./../types/random.type.js";

/**
 * Generates a random HEX color string.
 *
 * Each RGB channel (red, green, blue) is randomly generated between
 * the provided minimum and maximum values. If no options are specified,
 * each channel defaults to the full 0–255 range.
 *
 * The result is returned as a hexadecimal color string in the format `#RRGGBB`.
 *
 * @param {ColorOptions} [options] - Optional configuration for RGB ranges.
 * @param {{ min: number, max: number }} [options.red] - Range for the red channel (0–255).
 * @param {{ min: number, max: number }} [options.green] - Range for the green channel (0–255).
 * @param {{ min: number, max: number }} [options.blue] - Range for the blue channel (0–255).
 *
 * @returns {string} A randomly generated HEX color string.
 *
 * @example
 * Random.color();
 * // Possible result: "#3fa9d2"
 *
 * @example
 * Random.color({
 *   red: { min: 200, max: 255 },
 *   green: { min: 0, max: 50 },
 *   blue: { min: 0, max: 50 }
 * });
 * // Generates a reddish color
 */
export function randomColor(options?: ColorOptions): string {
  const redNumber = randomIntBetween(
    options?.red.min ?? 0,
    options?.red.max ?? 255,
  );
  const greenNumber = randomIntBetween(
    options?.green.min ?? 0,
    options?.green.max ?? 255,
  );
  const blueNumber = randomIntBetween(
    options?.blue.min ?? 0,
    options?.blue.max ?? 255,
  );

  const red = redNumber.toString(16);
  const green = greenNumber.toString(16);
  const blue = blueNumber.toString(16);
  return `#${red}${green}${blue}`;
}
