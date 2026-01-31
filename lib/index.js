"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const chars_constant_1 = require("./constants/chars.constant");
const random_constant_1 = require("./constants/random.constant");
class Random {
    static intBetween(min, max) {
        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        if (max < min) {
            const oldMin = min;
            min = max;
            max = oldMin;
        }
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    static boolean() {
        return Math.random() < 0.5;
    }
    /**
     * Returns "true" or "false" in lowercase unless casing has been specified
     * @param booleanCasing
     * @returns
     */
    static booleanString(booleanCasing) {
        if (!booleanCasing)
            booleanCasing = random_constant_1.casing.LOWER;
        const result = Random.boolean()
            ? random_constant_1.booleanString.TRUE_LOWERCASE
            : random_constant_1.booleanString.FALSE_UPPERCASE;
        return booleanCasing === random_constant_1.casing.LOWER ? result : result.toUpperCase();
    }
    /**
     * Returns 1 or 0
     * @returns
     */
    static booleanInt() {
        return Random.boolean() ? 1 : 0;
    }
    /**
     * Returns a falsy value
     * @returns
     */
    static falsy() {
        return Random.fromArray([...random_constant_1.falsyValues]);
    }
    /**
     * Returns a truthy value
     * @returns
     */
    static truthy() {
        return Random.fromArray([...random_constant_1.truthyValues]);
    }
    /**
     * Returns a value from the provided array
     * @param source
     * @returns
     */
    static fromArray(source) {
        const maxIndex = source.length - 1;
        const randomIndex = Random.intBetween(0, maxIndex);
        return source[randomIndex];
    }
    /**
     * Returns a value from the provided object
     * @param source
     * @returns
     */
    static fromObject(source) {
        const sourceValues = Object.values(source);
        return Random.fromArray(sourceValues);
    }
    /**
     * Returns a letter, can be either lowercase or uppercase unless specified
     * @param letterCasing
     * @returns
     */
    static letter(letterCasing) {
        const source = [];
        if (letterCasing === random_constant_1.casing.LOWER || !letterCasing) {
            source.push(...chars_constant_1.alphabetLowercase);
        }
        if (letterCasing === random_constant_1.casing.UPPER || !letterCasing) {
            source.push(...chars_constant_1.alphabetUppercase);
        }
        return Random.fromArray(source);
    }
    /**
     * A wrapper for crypto.randomUUID
     * @returns
     */
    static uuid() {
        return crypto.randomUUID();
    }
}
exports.Random = Random;
