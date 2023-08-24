import { Coordinates } from "../types/ships";

export const compareCoordinates = (a: Coordinates, b: Coordinates): boolean => {
  return a[0] === b[0] && a[1] === b[1];
};
