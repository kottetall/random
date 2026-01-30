import {
  alphabetLowercase,
  alphabetUppercase,
} from "./constants/chars.constant";

export class Random {
  static intBetween(min: number, max: number) {
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  static boolean() {
    return Math.random() < 0.5;
  }

  static fromArray<T>(source: T[]): T {
    const maxIndex = source.length - 1;
    const randomIndex = Random.intBetween(0, maxIndex);
    return source[randomIndex];
  }

  static letter(casing: "ALL" | "UPPERCASE" | "LOWERCASE") {
    const source: string[] = [];
    if (casing === "LOWERCASE" || casing === "ALL") {
      source.push(...alphabetLowercase);
    }
    if (casing === "UPPERCASE" || casing === "ALL") {
      source.push(...alphabetUppercase);
    }

    return Random.fromArray(source);
  }
}
