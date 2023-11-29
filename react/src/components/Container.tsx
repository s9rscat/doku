import React, { useState, useEffect } from "react";
import FormModal from "./FormModal";
import DokuContainer from "./DokuContainer";
import "../styles/App.scss";
import { getDokuFrame } from "../businessLogic/mate/dokuBuilder";
import { getToday } from "../businessLogic/helpers";

function Container() {
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

  const [showFormModal, setShowFormModal] = useState(false);

  // useEffect(() => {}, [showFormModal]);

  return (
    <>
      <p>MIAOOOOOOOOOOOOOOOOOOOO</p>
      <button
        className="close-modal"
        onClick={() => setShowFormModal(!showFormModal)}
      >
        {showFormModal ? "nascondi" : "mostra"}
      </button>
      {showFormModal ? (
        <FormModal
          showFormModal={showFormModal}
          setShowFormModal={setShowFormModal}
        />
      ) : (
        <DokuContainer
          showFormModal={showFormModal}
          setShowFormModal={setShowFormModal}
        />
      )}
    </>
  );
}

export default Container;
