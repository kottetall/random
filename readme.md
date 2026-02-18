# Random

A lightweight utility library for generating random values in JavaScript and TypeScript.

This package was originally created for personal use in my own projects but is published as an open-source utility for anyone who needs simple, reusable random helpers.

It focuses on practical randomness utilities such as:

- Picking random values
- Generating random text
- Creating random colors
- Probabilistic value selection
- Sampling without replacement

Zero dependencies. Minimal API. Easy to use.

---

## Installation

```bash
npm install @kottetall/random
```

---

## Usage

```ts
import { Random } from "@kottetall/random";
```

---

# API

---

## Arrays

### `sampleFromArray<T>(source: T[], nOfSamples?: number): T[]`

Returns a random subset of unique elements from an array (without replacement).

If `nOfSamples` is not provided, a random number between `0` and `source.length - 1` will be used.

```ts
Random.sampleFromArray([1, 2, 3, 4], 2);
// Possible result: [3, 1]

Random.sampleFromArray(["a", "b", "c"]);
// Random number of unique elements
```

---

## Text Generation

### `word(minLength?: number, maxLength?: number): string`

Generates a random lowercase nonsense word.

Default length: 2–6 characters.

```ts
Random.word();
// "kqz"

Random.word(4, 8);
// "xjtrpa"
```

---

### `sentence(minWords?: number, maxWords?: number): string`

Generates a random lowercase nonsense sentence ending with a period.

Default length: 2–6 words.

```ts
Random.sentence();
// "lorem ipsum dolor."

Random.sentence(3, 5);
// "xkf abcd pqrs."
```

---

### `paragraph(minSentence?: number, maxSentence?: number): string`

Generates a paragraph consisting of multiple nonsense sentences.

Default length: 6–15 sentences.

```ts
Random.paragraph();
// "abc def ghi. jkl mno. pqr stu vwx."
```

---

## Colors

### `color(options?: ColorOptions): string`

Generates a random HEX color string (`#RRGGBB`).

By default, each RGB channel ranges from `0–255`, but you can customize the range per channel.

```ts
Random.color();
// "#3fa9d2"

Random.color({
  red: { min: 200, max: 255 },
  green: { min: 0, max: 50 },
  blue: { min: 0, max: 50 },
});
// Generates a reddish color
```

---

## Probabilistic Utilities

### `valueAOrValueB<T, K>(valueA: T, valueB: K, chanceOfA?: number): T | K`

Returns either `valueA` or `valueB` based on probability.

Default: 50% chance for `valueA`.

```ts
Random.valueAOrValueB("yes", "no");
// 50% chance of "yes"

Random.valueAOrValueB(true, false, 80);
// 80% chance of true
```

---

### `valueOrNull<T>(value: T, percentOfNull?: number): T | null`

Returns either the provided value or `null` based on probability.

Default: 50% chance of `null`.

```ts
Random.valueOrNull("hello");
// 50% chance of null

Random.valueOrNull(42, 20);
// 20% chance of null
```

---

### `valueOrUndefined<T>(value: T, percentOfUndefined?: number): T | undefined`

Returns either the provided value or `undefined` based on probability.

Default: 50% chance of `undefined`.

```ts
Random.valueOrUndefined("hello");
// 50% chance of undefined

Random.valueOrUndefined(42, 10);
// 10% chance of undefined
```

---

# Why Random?

Instead of rewriting small random helpers in every project, this package provides a clean and consistent API for common randomness-related tasks.

It is intentionally lightweight and focused on simplicity.
