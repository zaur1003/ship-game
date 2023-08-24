import { Coordinates, ShipLayout } from "../types/ships";

import { compareCoordinates } from "../utils/general.utils";
import { create } from "zustand";

type ShipStore = {
  shots: Coordinates[];
  layouts: ShipLayout[];
  makeShot: (shot: Coordinates) => void;
  cellBeenShot: (coordinates: Coordinates) => boolean;
  allShips: () => string[];
};

export const useShipStore = create<ShipStore>((set, get) => ({
  shots: [],
  layouts: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
  makeShot: (shot: Coordinates) => {
    set((state: any) => ({
      shots: [...state.shots, shot],
    }));
  },
  cellBeenShot: (coordinates: Coordinates): boolean => {
    return get().shots.some((shot: Coordinates) =>
      compareCoordinates(shot, coordinates)
    );
  },
  shipBeenShot: (coordinates: Coordinates): boolean => {
    return get().layouts.some((ship) =>
      ship.positions.some((shot) => compareCoordinates(shot, coordinates))
    );
  },
  allShips: (): string[] => {
    return get().layouts.map((layout) => layout.ship);
  },
}));
