import React, { useState } from "react";
import block from "bem-cn";
import { shallowEqual, useSelector } from "react-redux";

import BoardCell from "../BoardCell";

import "./Board.scss";

const b = block("board");

const Board = () => {
  const { cells, possibleMovesCells } = useSelector(
    (state) => state.board,
    shallowEqual
  );

  const cellsArr = Object.entries(cells);
  const cellElements = cellsArr.map(([key, value]) => {
    const [x, y] = key.split("").map((item) => {
      return Number(item);
    });
    const typeMove = possibleMovesCells.find((item) => {
      return item.key === key;
    });

    return (
      <BoardCell
        figure={value}
        typeMove={typeMove ? typeMove.typeMove : null}
        x={x}
        y={y}
        key={key}
      />
    );
  });

  return <div className={b()}>{cellElements}</div>;
};

export default Board;
