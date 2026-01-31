import { booleanString, casing } from "../constants/random.constant";

export type Casing = (typeof casing)[keyof typeof casing];

export type BooleanString = (typeof booleanString)[keyof typeof booleanString];
