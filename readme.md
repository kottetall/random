# Random

A lightweight utility library for generating random values in **JavaScript and TypeScript**.

`@kottetall/Random` provides a collection of helpers for generating random:

- numbers
- booleans
- text (words, sentences, paragraphs)
- array values and samples
- shuffled arrays
- names
- colors
- dates and times
- HTTP statuses
- probabilistic values
- UUIDs
- pattern-based strings

The library is **dependency-free** and designed for **testing, prototyping, mock data generation, and general utility usage**.

---

# Installation

```bash
npm install @kottetall/random
```

---

# Usage

```ts
import { Random } from "@kottetall/random";
```

---

# Features

- Random numbers and booleans
- Array utilities (pick, sample, shuffle)
- Random text generation
- Random names
- Random colors
- Random dates and times
- Random HTTP status codes
- Probability helpers
- Testing utilities
- Zero dependencies
- TypeScript support

---

# Numbers

### Integer between values

```ts
Random.intBetween(1, 10);
// 7
```

---

# Booleans

```ts
Random.boolean();
// true
```

### Boolean string

```ts
Random.booleanString();
// "true"

Random.booleanString("upper");
// "TRUE"
```

### Boolean integer

```ts
Random.booleanInt();
// 0 or 1
```

---

# Probability Utilities

### Choose between two values

```ts
Random.valueAOrValueB("yes", "no", 70);
// 70% chance of "yes"
```

---

### Value or null

```ts
Random.valueOrNull("hello", 30);
// 30% chance of null
```

---

### Value or undefined

```ts
Random.valueOrUndefined(42, 20);
// 20% chance of undefined
```

---

# Arrays

### Random value from array

```ts
Random.fromArray(["apple", "banana", "orange"]);
// "banana"
```

---

### Random sample from array

```ts
Random.sampleFromArray([1, 2, 3, 4], 2);
// [3,1]
```

Sampling is **without replacement**.

---

### Shuffle an array

Returns a shuffled copy of the array without modifying the original.

```ts
Random.shuffleArray([1, 2, 3, 4]);
// [3,1,4,2]
```

Example:

```ts
const original = [1, 2, 3, 4];
const shuffled = Random.shuffleArray(original);

console.log(original);
// [1,2,3,4]

console.log(shuffled);
// random order
```

---

### Random value from object

```ts
Random.fromObject({
  a: 1,
  b: 2,
  c: 3,
});
// 2
```

---

# Text Generation

### Random letter

```ts
Random.letter();
// "g"

Random.letter("upper");
// "Q"
```

---

### Random word

```ts
Random.word();
// "qex"

Random.word(4, 8);
// "kdlwpa"
```

Capitalize the result:

```ts
Random.word(3, 6, true);
// "Jexa"
```

---

### Random sentence

```ts
Random.sentence();
// "Lera domax pelu."
```

---

### Random paragraph

```ts
Random.paragraph();
// "Llrxhw rpe orj kyy ozcq. Zjut uuppa dha slq sbrq izjb. Gsvfhe vprdl. Cx su vewd th oemuui. Ccmyc ho zpl ybb sgdu qkfm. Lyqxfm jjqcud nh nrfwm zw. Xlhax nsvy lm. Nyuaj poj sythpm uxpgw ccqmr mypfd."
```

---

# Pattern Based Strings

Generate strings within character ranges.

```ts
Random.stringpattern("a1", "c3");
```

Possible results:

```
a1
b2
c3
a3
```

---

# Names

### First name

```ts
Random.firstName();
// "Jordan"
```

Specify gender:

```ts
Random.firstName("male");
```

---

### Last name

```ts
Random.lastName();
// "Andersson"
```

---

### Full name

```ts
Random.fullName();
// "Ash Johnson"
```

---

# HTTP

### Status code

```ts
Random.httpStatusCode();
// 404
```

---

### Status text

```ts
Random.httpStatus();
// "Not Found"
```

---

# Date & Time

### Random time

```ts
Random.time();
// "14:23:51"
```

---

### Random date within range

```ts
Random.date(new Date("2020-01-01"), new Date("2024-01-01"));
```

---

### Random weekday

```ts
Random.day();
// "Tuesday"
```

---

# Colors

### Random HEX color

```ts
Random.color();
// "#3fa9d2"
```

---

### Limit RGB ranges

```ts
Random.color({
  red: { min: 200, max: 255 },
  green: { min: 0, max: 50 },
  blue: { min: 0, max: 50 },
});
```

Example output:

```
#e32a1f
```

---

# UUID

```ts
Random.uuid();
// "f3c4e9e1-90a6-4f2a-9c44-6c7f5a4b5a1d"
```

Wrapper around:

```
crypto.randomUUID()
```

---

# Async Utilities

### Random delay

```ts
await Random.delay(100, 1000);
```

Optional return value:

```ts
await Random.delay(100, 500, "done");
```

---

# Testing Utilities

### Random errors

Useful when testing error handling.

```ts
Random.throwError(0.2);
```

20% chance of throwing an error.

---

# Truthy / Falsy Values

### Truthy

```ts
Random.truthy();
// true | {} | [] | 42 | "0" | "false" | new Date() | -42 | 12n | 3.14 | -3.14 | Infinity | -Infinity
```

---

### Falsy

```ts
Random.falsy();
// null | undefined | false | NaN | 0 | -0 | 0n | ""
```

Useful for testing edge cases.

---

# Why Random?

✔ Lightweight
✔ Dependency-free
✔ TypeScript friendly
✔ Useful for testing and prototyping

---

# License

MIT
