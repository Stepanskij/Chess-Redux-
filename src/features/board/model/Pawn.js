import black from "./img/BlackPawn.png";
import white from "./img/WhitePawn.png";

class Pawn {
  img = "";
  side = 1;
  selected = false;

  constructor({ side }) {
    this.side = side;
    this.img = this.side === 1 ? white : black;
  }

  getPossibleMoves = ({ cells, selectedCellKey }) => {
    const possibleMoves = [];
    const [x, y] = selectedCellKey.split("").map((item) => {
      return Number(item);
    });

    if (this.side === 1) {
      if (cells[String(x - 1) + y] === null)
        possibleMoves.push({ key: String(x - 1) + y, typeMove: "free" });

      if (x === 7)
        if (
          cells[String(x - 2) + y] === null &&
          cells[String(x - 1) + y] === null
        )
          possibleMoves.push({ key: String(x - 2) + y, typeMove: "free" });

      if (
        cells[String(x - 1) + (y + 1)] &&
        cells[String(x - 1) + (y + 1)].side !== 1
      )
        possibleMoves.push({
          key: String(x - 1) + (y + 1),
          typeMove: "attack",
        });

      if (
        cells[String(x - 1) + (y - 1)] &&
        cells[String(x - 1) + (y - 1)].side !== 1
      )
        possibleMoves.push({
          key: String(x - 1) + (y - 1),
          typeMove: "attack",
        });
    } else {
      if (cells[String(x + 1) + y] === null)
        possibleMoves.push({ key: String(x + 1) + y, typeMove: "free" });

      if (x === 2)
        if (
          cells[String(x + 2) + y] === null &&
          cells[String(x + 1) + y] === null
        )
          possibleMoves.push({ key: String(x + 2) + y, typeMove: "free" });

      if (
        cells[String(x + 1) + (y + 1)] &&
        cells[String(x + 1) + (y + 1)].side !== 2
      )
        possibleMoves.push({
          key: String(x + 1) + (y + 1),
          typeMove: "attack",
        });

      if (
        cells[String(x + 1) + (y - 1)] &&
        cells[String(x + 1) + (y - 1)].side !== 2
      )
        possibleMoves.push({
          key: String(x + 1) + (y - 1),
          typeMove: "attack",
        });
    }
    return possibleMoves;
  };
}

export default Pawn;
