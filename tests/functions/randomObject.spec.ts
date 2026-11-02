import { describe, test, expect } from "vitest";
import { randomObject } from "../../src/functions/randomObject";
import { objectType } from "../../src/constants/random.constant";

describe("randomObject", () => {
  test("Returns a object", () => {
    for (let i = 0; i < 10; i++) {
      const options = {
        maxDepth: 2,
      };
      expect(typeof randomObject(options)).toBe("object");
    }
  });

  test("Returns schema", () => {
    for (let i = 0; i < 10; i++) {
      const options = {
        maxDepth: 2,
        schema: [
          {
            key: "foo",
            value: objectType.NUMBER,
          },
          {
            key: "bar",
            value: objectType.STRING,
          },
        ],
      };
      const result = randomObject(options);
      expect("foo" in result).toBe(true);
      expect(typeof result.foo).toBe("number");
      expect("bar" in result).toBe(true);
      expect(typeof result.bar).toBe("string");
    }
  });
});
