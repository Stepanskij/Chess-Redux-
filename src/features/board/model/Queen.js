import black from "./img/BlackQueen.png";
import white from "./img/WhiteQueen.png";

class Queen {
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
      else if (cells[String(x + i) + (y + i)].side === this.side) break;
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
      else if (cells[String(x + i) + (y - i)].side === this.side) break;
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
      else if (cells[String(x - i) + (y + i)].side === this.side) break;
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
      else if (cells[String(x - i) + (y - i)].side === this.side) break;
      else if (cells[String(x - i) + (y - i)].side !== this.side) {
        possibleMoves.push({
          key: String(x - i) + (y - i),
          typeMove: "attack",
        });
        break;
      }
    }

    for (let coordX = x + 1; coordX <= 8; coordX++) {
      if (cells[String(coordX) + y] === null)
        possibleMoves.push({ key: String(coordX) + y, typeMove: "free" });
      else if (cells[String(coordX) + y].side === this.side) break;
      else if (cells[String(coordX) + y].side !== this.side) {
        possibleMoves.push({ key: String(coordX) + y, typeMove: "attack" });
        break;
      }
    }

    for (let coordX = x - 1; coordX >= 1; coordX--) {
      if (cells[String(coordX) + y] === null)
        possibleMoves.push({ key: String(coordX) + y, typeMove: "free" });
      else if (cells[String(coordX) + y].side === this.side) break;
      else if (cells[String(coordX) + y].side !== this.side) {
        possibleMoves.push({ key: String(coordX) + y, typeMove: "attack" });
        break;
      }
    }

    for (let coordY = y + 1; coordY <= 8; coordY++) {
      if (cells[String(x) + coordY] === null)
        possibleMoves.push({ key: String(x) + coordY, typeMove: "free" });
      else if (cells[String(x) + coordY].side === this.side) break;
      else if (cells[String(x) + coordY].side !== this.side) {
        possibleMoves.push({ key: String(x) + coordY, typeMove: "attack" });
        break;
      }
    }

    for (let coordY = y - 1; coordY >= 1; coordY--) {
      if (cells[String(x) + coordY] === null)
        possibleMoves.push({ key: String(x) + coordY, typeMove: "free" });
      else if (cells[String(x) + coordY].side === this.side) break;
      else if (cells[String(x) + coordY].side !== this.side) {
        possibleMoves.push({ key: String(x) + coordY, typeMove: "attack" });
        break;
      }
    }

    return possibleMoves;
  };
}

export default Queen;
