import GameBoard from "../../components/board/Board.component";
import PageComponent from "../../components/page/Page.component";
import React from "react";
import ShipList from "../../components/shipList/ShipList.component";

function HomePage() {
  return (
    <PageComponent>
      <div>
        <GameBoard />
      </div>
      <div>
        <ShipList />
      </div>
    </PageComponent>
  );
}

export default HomePage;
