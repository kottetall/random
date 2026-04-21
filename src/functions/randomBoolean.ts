import { randomValueAOrValueB } from "./randomValueAorValueB.js";

export function randomBoolean(chanceOfTrue?: number) {
  chanceOfTrue ??= 50;
  return randomValueAOrValueB(true, false, chanceOfTrue);
}
