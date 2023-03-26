import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import block from "bem-cn";

import Figure from "../Figure";

import * as boardActions from "features/board/redux/actions";

import "./BoardCell.scss";

const b = block("board-cell");

const BoardCell = (props) => {
  const dispatch = useDispatch();
  const cellData = useRef({ x: props.x, y: props.y });

  if (cellData.current.x % 2) {
    if (cellData.current.y % 2) cellData.current.color = "black";
    else cellData.current.color = "white";
  } else {
    if (!(cellData.current.y % 2)) cellData.current.color = "black";
    else cellData.current.color = "white";
  }

  return (
    <div
      className={b({
        color: cellData.current.color,
        selected: props.figure && props.figure.selected,
        "free-move-cell": props.typeMove === "free",
        "attack-move-cell": props.typeMove === "attack",
      })}
      onClick={() => {
        dispatch(
          boardActions.changeBoard({
            x: cellData.current.x,
            y: cellData.current.y,
          })
        );
      }}
    >
      <div className={b("container")}>
        <Figure figure={props.figure} />
      </div>
    </div>
  );
};

export default BoardCell;
