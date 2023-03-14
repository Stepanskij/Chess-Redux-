import React, { useState } from "react";
import block from "bem-cn";
import { useSelector } from "react-redux";

import BoardCell from "../BoardCell";

import "./Board.scss";

const b = block("board");

const Board = () => {
  const cells = useSelector((state) => state.dataBoard.cells);

  const cellsArr = Object.entries(cells);
  const cellElements = cellsArr.map(([key, value]) => {
    const [x, y] = key.split("").map((item) => {
      return Number(item);
    });

    return <BoardCell figure={value} x={x} y={y} key={key} />;
  });
  /* (1, 2, 3, 4, 5, 6, 7, 8).forEach((item1, index, arr) => {
    arr.forEach((item2) => {
      const id = String(item1) + String(item2);
      cells.push(<BoardCell x={item1} y={item2} key={id} />);
    });
  }); */

  return <div className={b()}>{cellElements}</div>;
};

export default Board;
