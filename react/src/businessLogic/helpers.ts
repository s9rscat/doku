import { DAY_MILLISECONDS } from "./constants";

export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getToday() {
  const now = new Date().getTime();
  return now - (now % DAY_MILLISECONDS);
}
