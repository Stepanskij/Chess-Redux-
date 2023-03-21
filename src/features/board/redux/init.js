import Bishop from "../model/Bishop";
import King from "../model/King";
import Knight from "../model/Knight";
import Pawn from "../model/Pawn";
import Queen from "../model/Queen";
import Rook from "../model/Rook";

export const initState = {
  cells: {
    11: new Rook({
      side: 2,
    }),
    12: new Knight({
      side: 2,
    }),
    13: new Bishop({
      side: 2,
    }),
    14: new Queen({
      side: 2,
    }),
    15: new King({
      side: 2,
    }),
    16: new Bishop({
      side: 2,
    }),
    17: new Knight({
      side: 2,
    }),
    18: new Rook({
      side: 2,
    }),

    21: new Pawn({
      side: 2,
    }),
    22: new Pawn({
      side: 2,
    }),
    23: new Pawn({
      side: 2,
    }),
    24: new Pawn({
      side: 2,
    }),
    25: new Pawn({
      side: 2,
    }),
    26: new Pawn({
      side: 2,
    }),
    27: new Pawn({
      side: 2,
    }),
    28: new Pawn({
      side: 2,
    }),

    31: null,
    32: null,
    33: null,
    34: null,
    35: null,
    36: null,
    37: null,
    38: null,

    41: null,
    42: null,
    43: null,
    44: null,
    45: null,
    46: null,
    47: null,
    48: null,

    51: null,
    52: null,
    53: null,
    54: null,
    55: null,
    56: null,
    57: null,
    58: null,

    61: null,
    62: null,
    63: null,
    64: null,
    65: null,
    66: null,
    67: null,
    68: null,

    71: new Pawn({
      side: 1,
    }),
    72: new Pawn({
      side: 1,
    }),
    73: new Pawn({
      side: 1,
    }),
    74: new Pawn({
      side: 1,
    }),
    75: new Pawn({
      side: 1,
    }),
    76: new Pawn({
      side: 1,
    }),
    77: new Pawn({
      side: 1,
    }),
    78: new Pawn({
      side: 1,
    }),

    81: new Rook({
      side: 1,
    }),
    82: new Knight({
      side: 1,
    }),
    83: new Bishop({
      side: 1,
    }),
    84: new Queen({
      side: 1,
    }),
    85: new King({
      side: 1,
    }),
    86: new Bishop({
      side: 1,
    }),
    87: new Knight({
      side: 1,
    }),
    88: new Rook({
      side: 1,
    }),
  },
  possibleMovesCells: [],
};
