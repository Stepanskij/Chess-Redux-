import React from "react";
import { useDispatch } from "react-redux";
import block from "bem-cn";

import Figure from "features/Figure";

import * as dataBoardActions from "features/dataBoard/redux/actions";

import "./BoardCell.scss";

const b = block("board-cell");

const BoardCell = (props) => {
  const dispatch = useDispatch();

  const splitId = props.id.split("");
  const n1 = splitId[0];
  const n2 = splitId[1];

  let theme;

  if (n1 % 2) {
    if (n2 % 2) theme = "dark";
    else theme = "light";
  } else {
    if (!(n2 % 2)) theme = "dark";
    else theme = "light";
  }

  return (
    <div
      className={b({ theme: theme })}
      {...props}
      onClick={() => {
        dispatch(dataBoardActions.changeCell(props.id));
      }}
    >
      <div className={b("container")}>
        <Figure figureType={props.figureType} />
      </div>
    </div>
  );
};

export default BoardCell;
