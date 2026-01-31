export const casing = {
  LOWER: "lower",
  UPPER: "upper",
} as const;

export const booleanString = {
  TRUE_LOWERCASE: "true",
  FALSE_LOWERCASE: "false",
  TRUE_UPPERCASE: "TRUE",
  FALSE_UPPERCASE: "FALSE",
} as const;

export const falsyValues = [
  // Based on https://developer.mozilla.org/en-US/docs/Glossary/Falsy
  null,
  undefined,
  false,
  NaN,
  0,
  -0,
  0n,
  "",
] as const;

export const truthyValues = [
  // Based on https://developer.mozilla.org/en-US/docs/Glossary/Truthy
  true,
  {},
  [],
  42,
  "0",
  "false",
  new Date(),
  -42,
  12n,
  3.14,
  -3.14,
  Infinity,
  -Infinity,
] as const;
