import React from "react";
import { useShipStore } from "../../storage/ships.store";

function ShipList() {
  const ships = useShipStore((state) => state.allShips());
  return (
    <div>
      <ul>
        {ships.map((ship) => (
          <li>{ship}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShipList;
