# Random

A lightweight utility library for generating random values in **JavaScript and TypeScript**.

`Random` provides a collection of helpers for generating:

- numbers
- booleans
- text (words, sentences, paragraphs)
- names
- dates and times
- HTTP statuses
- colors
- probabilistic values
- array sampling
- pattern-based strings
- UUIDs
- and more

It is designed to be **simple, dependency-free, and useful for testing, prototyping, mock data, and utilities**.

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
- Array sampling utilities
- Random text generation
- Random names
- Random colors
- Random dates and times
- Random HTTP status codes
- Probability helpers
- Useful for testing and mock data
- Zero dependencies

---

# Examples

## Random Numbers

### Integer between values

```ts
Random.intBetween(1, 10);
// 4
```

---

## Booleans

```ts
Random.boolean();
// true
```

### Boolean as string

```ts
Random.booleanString();
// "true"

Random.booleanString("upper");
// "TRUE"
```

### Boolean as integer

```ts
Random.booleanInt();
// 0 or 1
```

---

## Probabilistic Values

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

## Arrays

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

## Random Letter

```ts
Random.letter();
// "g"

Random.letter("upper");
// "Q"
```

---

## Random Word

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

## Random Sentence

```ts
Random.sentence();
// "Lera domax pelu."
```

---

## Random Paragraph

```ts
Random.paragraph();
// "Lorem ipsum dolo. Seta lumar pel."
```

---

# Pattern Based Strings

Generate a string based on **character bounds**.

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

# Names

### First name

```ts
Random.firstName();
// "Alex"
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
// "Alex Johnson"
```

---

# HTTP

### Status Code

```ts
Random.httpStatusCode();
// 404
```

### Status Text

```ts
Random.httpStatus();
// "Not Found"
```

---

# Time & Date

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

# Random Errors (Testing)

Useful for **testing error handling**.

```ts
Random.throwError(0.2);
```

20% chance of throwing an error.

---

# Truthy / Falsy values

### Truthy

```ts
Random.truthy();
```

### Falsy

```ts
Random.falsy();
```

Useful for **testing edge cases**.

---

# Why Random?

Many libraries focus on generating **realistic fake data** (like Faker).
`Random` focuses instead on **simple, composable random utilities**.

✔ Lightweight
✔ Dependency-free
✔ TypeScript friendly
✔ Useful for testing and prototyping

---

# License

MIT
