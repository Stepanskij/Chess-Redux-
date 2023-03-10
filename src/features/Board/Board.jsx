import React, { useState } from "react";
import block from "bem-cn";
import { useSelector } from "react-redux";

import BoardCell from "features/BoardCell";

import "./Board.scss";

const b = block("board");

const Board = () => {
  const cellsFigure = useSelector((state) => state.dataBoard.cells);

  const cells = [];
  ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((item1, index, arr) => {
    arr.forEach((item2) => {
      const id = item1 + item2;
      cells.push(<BoardCell id={id} key={id} figureType={cellsFigure[id]} />);
    });
  });

  return <div className={b()}>{cells}</div>;
};

export default Board;
