import { actionTypes } from "./types";

import Bishop from "../model/Bishop";
import King from "../model/King";
import Knight from "../model/Knight";
import Pawn from "../model/Pawn";
import Queen from "../model/Queen";
import Rook from "../model/Rook";

export const changeBoard = (cellCoord) => {
  return async (dispatch, state, extra) => {
    const cells = state().board.cells;
    const possibleMovesCells = state().board.possibleMovesCells;
    const counterOfMove = state().board.counterOfMove;

    const cellKey = String(cellCoord.x) + cellCoord.y;
    let selectedFigure = Object.entries(cells).find((item) => {
      if (item[1]) {
        return item[1].selected;
      }
    });

    if (selectedFigure === undefined) {
      await dispatch(selectFigure({ cells, cellKey, counterOfMove }));
    } else {
      await dispatch(
        moveFigure({
          selectedFigure,
          cells,
          selectedCellKey: cellKey,
          possibleMovesCells,
          counterOfMove,
        })
      );
    }
  };
};

const countMove = ({ dispatch, counterOfMove }) => {
  return async (dispatch, state, extra) => {
    counterOfMove++;
    dispatch({
      type: actionTypes.COUNT_MOVE,
      payload: counterOfMove,
    });
  };
};

const selectFigure = ({ cells, cellKey, counterOfMove }) => {
  return async (dispatch, state, extra) => {
    if (cells[cellKey]) {
      let canChoseFigureOfSide;
      if (counterOfMove % 2) {
        canChoseFigureOfSide = cells[cellKey].side === 1;
      } else {
        canChoseFigureOfSide = cells[cellKey].side === 2;
      }

      if (canChoseFigureOfSide) {
        cells[cellKey].selected = !cells[cellKey].selected;
        const selectedFigure = cells[cellKey];

        const possibleMovesCells = selectedFigure.getPossibleMoves({
          cells,
          selectedCellKey: cellKey,
        });

        dispatch({
          type: actionTypes.SELECT_FIGURE,
          payload: { cells, possibleMovesCells },
        });
      }
    }
  };
};

const moveFigure = ({
  selectedFigure,
  cells,
  selectedCellKey,
  possibleMovesCells,
  counterOfMove,
}) => {
  return async (dispatch, state, extra) => {
    const [x, y] = selectedCellKey.split("").map((item) => {
      return Number(item);
    });
    const possibilityCellsHaveTargetCell = possibleMovesCells.find((item) => {
      return item.key === selectedCellKey;
    });
    const possibilityPawnChangeInQueen =
      selectedFigure[1] instanceof Pawn && (x === 1 || x === 8);

    if (possibilityCellsHaveTargetCell) {
      if (possibilityPawnChangeInQueen) {
        cells[selectedCellKey] = new Queen({ side: selectedFigure[1].side });
        await dispatch(countMove({ dispatch, counterOfMove }));
      } else {
        selectedFigure[1].selected = !selectedFigure[1].selected;
        cells[selectedCellKey] = selectedFigure[1];
        await dispatch(countMove({ dispatch, counterOfMove }));
      }
      cells[selectedFigure[0]] = null;
    } else {
      selectedFigure[1].selected = !selectedFigure[1].selected;
    }

    dispatch({
      type: actionTypes.MOVE_FIGURE,
      payload: cells,
    });
  };
};

export const restartGame = () => {
  return async (dispatch, state, extra) => {
    const cells = {
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
    };
    const possibleMovesCells = [];
    const counterOfMove = 1;

    dispatch({
      type: actionTypes.RESTART_GAME,
      payload: { cells, possibleMovesCells, counterOfMove },
    });
  };
};
