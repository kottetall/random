import { randomIntBetween } from "./randomIntBetween.js";
import { randomFromArray } from "./randomFromArray.js";
import { randomString } from "./randomString.js";
import { randomWord } from "./randomWord.js";
import { randomBoolean } from "./randomBoolean.js";
import { randomItemList } from "./randomItemList.js";
import { jsonType } from "./../constants/random.constant.js";
import { objectType } from "./../constants/random.constant.js";
import { ObjectOptions } from "../types/random.type.js";

/**
 * Returns a randomly generated object
 * @returns
 */
export function randomObject(options: ObjectOptions) {
  let { maxDepth, schema } = options;

  maxDepth ??= 2;

  const results: Record<
    string,
    string | number | Object | any[] | boolean | null
  > = {};

  if (schema) {
    for (const pair of schema) {
      switch (pair.value) {
        case objectType.STRING:
          results[pair.key] = randomString({ minLength: 5, maxLength: 15 });
          break;
        case objectType.NUMBER:
          results[pair.key] = randomIntBetween(-1000, 1000);
          break;
        case objectType.BOOLEAN:
          results[pair.key] = randomBoolean();
          break;
        case objectType.NULL:
          results[pair.key] = null;
          break;
        case objectType.OBJECT:
          // FIXME: make better
          if (maxDepth > 0) {
            results[pair.key] = randomObject({ maxDepth: maxDepth - 1 });
          }
          break;
        case objectType.ARRAY:
          // FIXME: TMP
          results[pair.key] = randomItemList(
            () => {
              return randomString({ minLength: 5, maxLength: 15 });
            },
            0,
            15,
          );
      }
    }
  } else {
    const nOfFields = randomIntBetween(1, 10);

    for (let i = 0; i < nOfFields; i++) {
      const randomKey = randomWord(3, 10);
      switch (randomFromArray(Object.values(jsonType))) {
        case objectType.STRING:
          results[randomKey] = randomString({ minLength: 5, maxLength: 15 });
          break;
        case objectType.NUMBER:
          results[randomKey] = randomIntBetween(-1000, 1000);
          break;
        case objectType.BOOLEAN:
          results[randomKey] = randomBoolean();
          break;
        case objectType.NULL:
          results[randomKey] = null;
          break;
        case objectType.OBJECT:
          // FIXME: make better
          if (maxDepth > 0) {
            results[randomKey] = randomObject({ maxDepth: maxDepth - 1 });
          }
          break;
        case objectType.ARRAY:
          // FIXME: TMP
          results[randomKey] = randomItemList(
            () => {
              return randomString({ minLength: 5, maxLength: 15 });
            },
            0,
            15,
          );
      }
    }
  }

  return results;
}
