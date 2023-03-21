import black from "./img/BlackKing.png";
import white from "./img/WhiteKing.png";

class King {
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

    if (cells[String(x - 1) + y] === null) {
      possibleMoves.push({ key: String(x - 1) + y, typeMove: "free" });
    } else if (
      cells[String(x - 1) + y] &&
      cells[String(x - 1) + y].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 1) + y, typeMove: "attack" });
    }

    if (cells[String(x + 1) + y] === null) {
      possibleMoves.push({ key: String(x + 1) + y, typeMove: "free" });
    } else if (
      cells[String(x + 1) + y] &&
      cells[String(x + 1) + y].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 1) + y, typeMove: "attack" });
    }

    if (cells[String(x) + (y + 1)] === null) {
      possibleMoves.push({ key: String(x) + (y + 1), typeMove: "free" });
    } else if (
      cells[String(x) + (y + 1)] &&
      cells[String(x) + (y + 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x) + (y + 1), typeMove: "attack" });
    }

    if (cells[String(x) + (y - 1)] === null) {
      possibleMoves.push({ key: String(x) + (y - 1), typeMove: "free" });
    } else if (
      cells[String(x) + (y - 1)] &&
      cells[String(x) + (y - 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x) + (y - 1), typeMove: "attack" });
    }

    if (cells[String(x + 1) + (y - 1)] === null) {
      possibleMoves.push({ key: String(x + 1) + (y - 1), typeMove: "free" });
    } else if (
      cells[String(x + 1) + (y - 1)] &&
      cells[String(x + 1) + (y - 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 1) + (y - 1), typeMove: "attack" });
    }

    if (cells[String(x - 1) + (y - 1)] === null) {
      possibleMoves.push({ key: String(x - 1) + (y - 1), typeMove: "free" });
    } else if (
      cells[String(x - 1) + (y - 1)] &&
      cells[String(x - 1) + (y - 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 1) + (y - 1), typeMove: "attack" });
    }

    if (cells[String(x + 1) + (y + 1)] === null) {
      possibleMoves.push({ key: String(x + 1) + (y + 1), typeMove: "free" });
    } else if (
      cells[String(x + 1) + (y + 1)] &&
      cells[String(x + 1) + (y + 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 1) + (y + 1), typeMove: "attack" });
    }

    if (cells[String(x - 1) + (y + 1)] === null) {
      possibleMoves.push({ key: String(x - 1) + (y + 1), typeMove: "free" });
    } else if (
      cells[String(x - 1) + (y + 1)] &&
      cells[String(x - 1) + (y + 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 1) + (y + 1), typeMove: "attack" });
    }

    return possibleMoves;
  };
}

export default King;
