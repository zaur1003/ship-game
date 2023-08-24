import React, { ReactNode } from "react";

import BoardCell from "../boardCell/BoardCell.component";
import { useEffect } from "react";
import { useState } from "react";

function GameBoard() {
  const [cells, setCells] = useState<ReactNode[]>([]);

  useEffect(() => {
    populateGame();
  }, []);

  const populateGame = () => {
    let newCells: ReactNode[] = [];
    for (let y = 9; y >= 0; y--) {
      for (let x = 9; x >= 0; x--) {
        newCells.push(<BoardCell x={x} y={y} key={`${x}-${y}`} />);
      }
    }
    setCells([...newCells]);
  };

  return <div className="board">{cells}</div>;
}

export default GameBoard;
