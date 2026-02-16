import {
  booleanString,
  casing,
  httpCodes,
} from "../constants/random.constant.js";

export type Casing = (typeof casing)[keyof typeof casing];

export type BooleanString = (typeof booleanString)[keyof typeof booleanString];

export type HttpCodes = (typeof httpCodes)[number];
