"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const chars_constant_1 = require("./constants/chars.constant");
class Random {
    static intBetween(min, max) {
        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    static boolean() {
        return Math.random() < 0.5;
    }
    static fromArray(source) {
        const maxIndex = source.length - 1;
        const randomIndex = Random.intBetween(0, maxIndex);
        return source[randomIndex];
    }
    static letter(casing) {
        const source = [];
        if (casing === "LOWERCASE" || casing === "ALL") {
            source.push(...chars_constant_1.alphabetLowercase);
        }
        if (casing === "UPPERCASE" || casing === "ALL") {
            source.push(...chars_constant_1.alphabetUppercase);
        }
        return Random.fromArray(source);
    }
}
exports.Random = Random;
