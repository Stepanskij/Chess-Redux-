import { actionTypes } from "./types";

import Queen from "../model/Queen";
import Pawn from "../model/Pawn";

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
