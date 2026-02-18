import {
  booleanString,
  casing,
  httpCodes,
} from "../constants/random.constant.js";

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
