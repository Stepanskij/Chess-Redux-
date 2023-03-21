import React from "react";
import block from "bem-cn";

import "./Figure.scss";

const b = block("figure");

const Figure = ({ figure }) => {
  if (figure)
    return (
      <div className={b()}>
        <img className={b("img")} src={figure.img} />
      </div>
    );
  return null;
};

export default Figure;
