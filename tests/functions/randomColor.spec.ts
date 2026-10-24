import { describe, test, expect } from "vitest";
import { randomColor } from "../../src/functions/randomColor";
import { ColorOptions } from "../../src/types/random.type";

describe("randomColor", () => {
  const regExpMatch = /^#[a-f\d]{6}$/gi;
  test("Only returns expected values, without options set", () => {
    for (let i = 0; i < 100; i++) {
      expect(randomColor()).toBeTruthy();
      expect(randomColor()).toMatch(regExpMatch);
    }
  });

  test("Only returns expected values, with red at 0", () => {
    const regExpMatchNoRed = /^#00[a-f\d]{2}[a-f\d]{2}$/gi;
    const options: ColorOptions = {
      red: { min: 0, max: 0 },
      green: { min: 0, max: 255 },
      blue: { min: 0, max: 255 },
    };
    for (let i = 0; i < 100; i++) {
      expect(randomColor()).toBeTruthy();
      expect(randomColor(options)).toMatch(regExpMatchNoRed);
    }
  });

  test("Only returns expected values, with green at 0", () => {
    const regExpMatchNoGreen = /^#[a-f\d]{2}00[a-f\d]{2}$/gi;
    const options: ColorOptions = {
      red: { min: 0, max: 255 },
      green: { min: 0, max: 0 },
      blue: { min: 0, max: 255 },
    };
    for (let i = 0; i < 100; i++) {
      expect(randomColor()).toBeTruthy();
      expect(randomColor(options)).toMatch(regExpMatchNoGreen);
    }
  });
  test("Only returns expected values, with blue at 0", () => {
    const regExpMatchNoBlue = /^#[a-f\d]{2}[a-f\d]{2}00$/gi;
    const options: ColorOptions = {
      red: { min: 0, max: 255 },
      green: { min: 0, max: 255 },
      blue: { min: 0, max: 0 },
    };
    for (let i = 0; i < 100; i++) {
      expect(randomColor()).toBeTruthy();
      expect(randomColor(options)).toMatch(regExpMatchNoBlue);
    }
  });

  test("Only returns expected values, with all at 0", () => {
    const regExpMatchNoColor = /^#000000$/gi;
    const options: ColorOptions = {
      red: { min: 0, max: 0 },
      green: { min: 0, max: 0 },
      blue: { min: 0, max: 0 },
    };
    for (let i = 0; i < 10; i++) {
      expect(randomColor()).toBeTruthy();
      expect(randomColor(options)).toMatch(regExpMatchNoColor);
    }
  });

  test("Only returns expected values, with all at 255", () => {
    const regExpMatchFullColor = /^#ffffff$/gi;
    const options: ColorOptions = {
      red: { min: 255, max: 255 },
      green: { min: 255, max: 255 },
      blue: { min: 255, max: 255 },
    };
    for (let i = 0; i < 10; i++) {
      expect(randomColor()).toBeTruthy();
      expect(randomColor(options)).toMatch(regExpMatchFullColor);
    }
  });
});
