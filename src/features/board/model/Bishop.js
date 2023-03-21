import black from "./img/BlackBishop.png";
import white from "./img/WhiteBishop.png";

class Bishop {
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

    for (let i = 1; i <= 8; i++) {
      if (x + i > 8 || y + i > 8) break;
      if (cells[String(x + i) + (y + i)] === null)
        possibleMoves.push({ key: String(x + i) + (y + i), typeMove: "free" });
      else if (cells[String(x + i) + (y + i)].side === this.side)
        break;
      else if (cells[String(x + i) + (y + i)].side !== this.side) {
        possibleMoves.push({
          key: String(x + i) + (y + i),
          typeMove: "attack",
        });
        break;
      }
    }

    for (let i = 1; i <= 8; i++) {
      if (x + i > 8 || y - i < 1) break;
      if (cells[String(x + i) + (y - i)] === null)
        possibleMoves.push({ key: String(x + i) + (y - i), typeMove: "free" });
      else if (cells[String(x + i) + (y - i)].side === this.side)
        break;
      else if (cells[String(x + i) + (y - i)].side !== this.side) {
        possibleMoves.push({
          key: String(x + i) + (y - i),
          typeMove: "attack",
        });
        break;
      }
    }

    for (let i = 1; i <= 8; i++) {
      if (x - i < 1 || y + i > 8) break;
      if (cells[String(x - i) + (y + i)] === null)
        possibleMoves.push({ key: String(x - i) + (y + i), typeMove: "free" });
      else if (cells[String(x - i) + (y + i)].side === this.side)
        break;
      else if (cells[String(x - i) + (y + i)].side !== this.side) {
        possibleMoves.push({
          key: String(x - i) + (y + i),
          typeMove: "attack",
        });
        break;
      }
    }

    for (let i = 1; i <= 8; i++) {
      if (x - i < 1 || y - i < 1) break;
      if (cells[String(x - i) + (y - i)] === null)
        possibleMoves.push({ key: String(x - i) + (y - i), typeMove: "free" });
      else if (cells[String(x - i) + (y - i)].side === this.side)
        break;
      else if (cells[String(x - i) + (y - i)].side !== this.side) {
        possibleMoves.push({
          key: String(x - i) + (y - i),
          typeMove: "attack",
        });
        break;
      }
    }

    return possibleMoves;
  };
}

export default Bishop;
