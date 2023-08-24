import React from "react";
import { useShipStore } from "../../storage/ships.store";

interface BoardCellProps {
  x: number;
  y: number;
}

function BoardCell({ x, y }: BoardCellProps) {
  const cellBeenShot = useShipStore((state: any) => state.cellBeenShot([x, y]));
  const shipBeenShot = useShipStore((state: any) => state.shipBeenShot([x, y]));
  const makeShot = useShipStore((state: any) => state.makeShot);

  return (
    <div
      className={`cell ${cellBeenShot ? "cell-shot" : ""} ${
        shipBeenShot ? "cell-ship" : ""
      }`}
      onClick={() => makeShot([x, y])}
    >
      x-{x} - y-{y}
    </div>
  );
}

export default BoardCell;
