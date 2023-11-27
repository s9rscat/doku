import React, { useState, useEffect } from "react";
import FormModal from "./FormModal";
import "../styles/App.scss";
import { buildDoku, getDokuFrame } from "../businessLogic/dokuBuilder";
import { getToday } from "../businessLogic/helpers";

// type DokuContainerProps = {
//   showFormModal: boolean;
//   setShowFormModal: Function;
// };

function DokuContainer({ showFormModal, setShowFormModal }: any) {
  const today = getToday();
  const { extRow, extCol } = getDokuFrame();

  const [gameState, setGameState] = useState({
    today,
    row0: extRow[0].name,
    row1: extRow[1].name,
    row2: extRow[2].name,
    col0: extCol[0].name,
    col1: extCol[1].name,
    col2: extCol[2].name,
    cell0: "???",
    cell1: "???",
    cell2: "???",
    cell3: "???",
    cell4: "???",
    cell5: "???",
    cell6: "???",
    cell7: "???",
    cell8: "???",
    ps: 9,
    score: 0,
  });

  return (
    <div className="container">
      <div className="doku-container">
        <div className="grid-group">
          <div id="ext-corner-left" className="frame"></div>
          <div id="ext-row-0" className="frame">
            {gameState.row0}
          </div>
          <div id="ext-row-1" className="frame">
            {gameState.row1}
          </div>
          <div id="ext-row-2" className="frame">
            {gameState.row2}
          </div>
          <div id="ext-corner-right" className="frame"></div>
          <div id="ext-col-0" className="frame">
            {gameState.col0}
          </div>
          <div
            id="cell-0"
            className="inside"
            onClick={() => {
              console.log("CLICKED");
              setShowFormModal(!showFormModal);
            }}
          >
            {gameState.cell0}
          </div>
          <div id="cell-1" className="inside">
            {gameState.cell1}
          </div>
          <div id="cell-2" className="inside">
            {gameState.cell2}
          </div>
          <div id="ps" className="frame"></div>
          <div id="ext-col-1" className="frame">
            {gameState.col1}
          </div>
          <div id="cell-3" className="inside">
            {gameState.cell3}
          </div>
          <div id="cell-4" className="inside">
            {gameState.cell4}
          </div>
          <div id="cell-5" className="inside">
            {gameState.cell5}
          </div>
          <div id="score" className="frame"></div>
          <div id="ext-col-2" className="frame">
            {gameState.col2}
          </div>
          <div id="cell-6" className="inside">
            {gameState.cell6}
          </div>
          <div id="cell-7" className="inside">
            {gameState.cell7}
          </div>
          <div id="cell-8" className="inside">
            {gameState.cell8}
          </div>
          <div className="frame"></div>
        </div>
      </div>
    </div>
  );
}

export default DokuContainer;
