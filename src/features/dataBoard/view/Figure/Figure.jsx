import React, { useRef } from "react";
import block from "bem-cn";

import BlackElephant from "./pictures/BlackElephant.png";
import BlackHorse from "./pictures/BlackHorse.png";
import BlackKing from "./pictures/BlackKing.png";
import BlackPawn from "./pictures/BlackPawn.png";
import BlackQuin from "./pictures/BlackQuin.png";
import BlackTower from "./pictures/BlackTower.png";
import WhiteElephant from "./pictures/WhiteElephant.png";
import WhiteHorse from "./pictures/WhiteHorse.png";
import WhiteKing from "./pictures/WhiteKing.png";
import WhitePawn from "./pictures/WhitePawn.png";
import WhiteQuin from "./pictures/WhiteQuin.png";
import WhiteTower from "./pictures/WhiteTower.png";

import "./Figure.scss";

const b = block("figure");

const Figure = (props) => {
  let figureKey;
  if (props.figure) {
    figureKey = useRef(String(props.figure.side) + String(props.figure.type));
  } else figureKey = useRef(null);

  const figurePicture = {
    11: WhitePawn,
    12: WhiteTower,
    13: WhiteHorse,
    14: WhiteElephant,
    15: WhiteQuin,
    16: WhiteKing,
    21: BlackPawn,
    22: BlackTower,
    23: BlackHorse,
    24: BlackElephant,
    25: BlackQuin,
    26: BlackKing,
  };

  return (
    <div className={b()}>
      <img className={b("img")} src={figurePicture[figureKey.current]} />
    </div>
  );
};

export default Figure;
