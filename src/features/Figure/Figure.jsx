import React from "react";
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
  let src = " ";
  switch (props.figureType) {
    case "BlackElephant":
      src = BlackElephant;
      break;
    case "BlackHorse":
      src = BlackHorse;
      break;
    case "BlackKing":
      src = BlackKing;
      break;
    case "BlackPawn":
      src = BlackPawn;
      break;
    case "BlackPawn":
      src = BlackElephant;
      break;
    case "BlackQuin":
      src = BlackQuin;
      break;
    case "BlackTower":
      src = BlackTower;
      break;

    case "WhiteElephant":
      src = WhiteElephant;
      break;
    case "WhiteHorse":
      src = WhiteHorse;
      break;
    case "WhiteKing":
      src = WhiteKing;
      break;
    case "WhitePawn":
      src = WhitePawn;
      break;
    case "WhiteQuin":
      src = WhiteQuin;
      break;
    case "WhiteTower":
      src = WhiteTower;
      break;

    default:
      src = " ";
  }

  return (
    <div className={b()} {...props}>
      <img className={b("img")} src={src} />
    </div>
  );
};

export default Figure;
