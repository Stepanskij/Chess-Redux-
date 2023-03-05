import React from "react";
import block from "bem-cn";

import "./BoardCell.scss";

const b = block("board-cell");

const BoardCell = (props) => {
  const splitId = props.id.split("");
  const n1 = splitId[0];
  const n2 = splitId[1];

  let cell;

  if (n1 % 2) {
    if (n2 % 2) {
      cell = <div className={b({ theme: "dark" })} {...props}></div>;
    } else {
      cell = <div className={b({ theme: "light" })} {...props}></div>;
    }
  } else {
    if (!(n2 % 2)) {
      cell = <div className={b({ theme: "dark" })} {...props}></div>;
    } else {
      cell = <div className={b({ theme: "light" })} {...props}></div>;
    }
  }

  return cell;
};

export default BoardCell;
