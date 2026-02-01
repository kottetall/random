import { gender } from "../constants/name.constant";

export type Gender = (typeof gender)[keyof typeof gender];
