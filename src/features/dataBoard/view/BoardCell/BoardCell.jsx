import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import block from "bem-cn";

import Figure from "../Figure";

import * as dataBoardActions from "features/dataBoard/redux/actions";

import "./BoardCell.scss";

const b = block("board-cell");

const BoardCell = (props) => {
  const cellData = useRef({ x: props.x, y: props.y });

  if (cellData.current.x % 2) {
    if (cellData.current.y % 2) cellData.current.side = "black";
    else cellData.current.side = "white";
  } else {
    if (!(cellData.current.y % 2)) cellData.current.side = "black";
    else cellData.current.side = "white";
  }

  return (
    <div className={b({ side: cellData.current.side })}>
      <div className={b("container")}>
        <Figure figure={props.figure} />
      </div>
    </div>
  );
};

export default BoardCell;
