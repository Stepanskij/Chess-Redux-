import black from "./img/BlackKnight.png";
import white from "./img/WhiteKnight.png";

class Knight {
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

    if (cells[String(x - 2) + (y + 1)] === null) {
      possibleMoves.push({ key: String(x - 2) + (y + 1), typeMove: "free" });
    } else if (
      cells[String(x - 2) + (y + 1)] &&
      cells[String(x - 2) + (y + 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 2) + (y + 1), typeMove: "attack" });
    }

    if (cells[String(x - 2) + (y - 1)] === null) {
      possibleMoves.push({ key: String(x - 2) + (y - 1), typeMove: "free" });
    } else if (
      cells[String(x - 2) + (y - 1)] &&
      cells[String(x - 2) + (y - 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 2) + (y - 1), typeMove: "attack" });
    }

    if (cells[String(x + 2) + (y + 1)] === null) {
      possibleMoves.push({ key: String(x + 2) + (y + 1), typeMove: "free" });
    } else if (
      cells[String(x + 2) + (y + 1)] &&
      cells[String(x + 2) + (y + 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 2) + (y + 1), typeMove: "attack" });
    }

    if (cells[String(x + 2) + (y - 1)] === null) {
      possibleMoves.push({ key: String(x + 2) + (y - 1), typeMove: "free" });
    } else if (
      cells[String(x + 2) + (y - 1)] &&
      cells[String(x + 2) + (y - 1)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 2) + (y - 1), typeMove: "attack" });
    }

    if (cells[String(x + 1) + (y - 2)] === null) {
      possibleMoves.push({ key: String(x + 1) + (y - 2), typeMove: "free" });
    } else if (
      cells[String(x + 1) + (y - 2)] &&
      cells[String(x + 1) + (y - 2)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 1) + (y - 2), typeMove: "attack" });
    }

    if (cells[String(x - 1) + (y - 2)] === null) {
      possibleMoves.push({ key: String(x - 1) + (y - 2), typeMove: "free" });
    } else if (
      cells[String(x - 1) + (y - 2)] &&
      cells[String(x - 1) + (y - 2)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 1) + (y - 2), typeMove: "attack" });
    }

    if (cells[String(x + 1) + (y + 2)] === null) {
      possibleMoves.push({ key: String(x + 1) + (y + 2), typeMove: "free" });
    } else if (
      cells[String(x + 1) + (y + 2)] &&
      cells[String(x + 1) + (y + 2)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x + 1) + (y + 2), typeMove: "attack" });
    }

    if (cells[String(x - 1) + (y + 2)] === null) {
      possibleMoves.push({ key: String(x - 1) + (y + 2), typeMove: "free" });
    } else if (
      cells[String(x - 1) + (y + 2)] &&
      cells[String(x - 1) + (y + 2)].side !== this.side
    ) {
      possibleMoves.push({ key: String(x - 1) + (y + 2), typeMove: "attack" });
    }

    return possibleMoves;
  };
}

export default Knight;
