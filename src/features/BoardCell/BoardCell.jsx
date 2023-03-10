import React from "react";
import block from "bem-cn";

import Figure from "features/Figure";

import "./BoardCell.scss";

const b = block("board-cell");

const BoardCell = (props) => {
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
    <div className={b({ theme: theme })} {...props}>
      <Figure figureType={props.figureType} />
    </div>
  );
};

export default BoardCell;
