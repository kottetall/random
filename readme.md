# Random

A lightweight utility library for generating pseudo-random values in JavaScript based of `Math.random()`.

This package was originally created for personal use in my own projects, but it is published as an open tool that anyone can use. It focuses on simple, practical helpers for working with randomness, such as picking random values from arrays or objects.

## Features

- Get a random value from an array / object
- Get a random name - first, last, full
- Get a random letter
- Get a random truthy/falsy value
- And more...
- Simple and minimal API
- Zero dependencies
- Designed for everyday use in JavaScript and Node.js projects

## Installation

```bash
npm install @kottetall/random
```

## Usage

### Random names

```js
import { Random } from "@kottetall/random";

console.log(Random.firstName()); // Jack
console.log(Random.firstName("female")); // Sofia
console.log(Random.lastName()); // White
console.log(Random.fullName()); // Jack Hassan
```

### Random string from stringpattern

Generates a random string using two strings as per-character boundaries.

Instead of choosing one of the input strings, the method treats them as limits for each character position. For every index, it determines the range between the corresponding characters in the two strings and randomly selects a character within that range.

Each character in the resulting string is generated independently, which allows the method to produce combinations that do not exist in either of the original strings.

```js
import { Random } from "@kottetall/random";

const stringA = "a2";
const stringB = "b1";
const result = Random.arbitraryString(stringA, stringB);

console.log(result); // "a1" | "b1" | "a2" | "b2"
```

### Random value from an array

```js
import { Random } from "@kottetall/random";

const items = ["apple", "banana", "orange"];
const result = Random.fromArray(items);

console.log(result); // "banana"
```

### Random value from an object

```js
import { Random } from "@kottetall/random";

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const result = Random.fromObject(obj);

console.log(result); // 3
```

## Why this package?

Sometimes you just need small, reusable helpers instead of rewriting the same logic in every project.
This package aims to provide clean and simple functions for common random-related tasks.
