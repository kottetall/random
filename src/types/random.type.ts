import {
  booleanString,
  casing,
  httpCodes,
  objectType,
  jsonType,
} from "../constants/random.constant.js";

export type ObjectType = (typeof objectType)[keyof typeof objectType];
export type JsonType = (typeof jsonType)[keyof typeof jsonType];

export type Casing = (typeof casing)[keyof typeof casing];

export type BooleanString = (typeof booleanString)[keyof typeof booleanString];

export type HttpCodes = (typeof httpCodes)[number];

export type ColorOptions = {
  red: {
    min: number;
    max: number;
  };
  green: {
    min: number;
    max: number;
  };
  blue: {
    min: number;
    max: number;
  };
};

export type ObjectOptions = {
  maxDepth?: number;
  schema?: { key: string; value: ObjectType }[];
};
