import { gender } from "../constants/name.constant.js";

export type Gender = (typeof gender)[keyof typeof gender];
