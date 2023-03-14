import { actionTypes } from "./types";

export const changeCells = (moveCells) => {
  return async (dispatch, state, extra) => {
    const cells = { ...state().dataBoard.cells };
    console.log(moveCells);
    if (moveCells.length === 2) {
      cells[moveCells[1]] = cells[moveCells[0]];
      cells[moveCells[0]] = "";
      dispatch({
        type: actionTypes.CHANGE_CELLS,
        payload: cells,
      });
    }
  };
};

export const moveFigure = (idCell) => {
  return async (dispatch, state, extra) => {
    const dataBoard = state().dataBoard;
    const moveCells = dataBoard.moveCells;
    const cells = dataBoard.cells;

    if (moveCells.length === 0) {
      if (cells[idCell] !== "") moveCells.push(idCell);
    } else moveCells.push(idCell);

    if (moveCells[0] === moveCells[1]) {
      moveCells.pop();
      moveCells.pop();
    }

    if (moveCells.length > 1) {
      const newCells = { ...cells };

      newCells[moveCells[1]] = newCells[moveCells[0]];
      newCells[moveCells[0]] = "";
    }

    dispatch({
      type: actionTypes.MOVE_FIGURE,
      payload: moveCells,
    });
  };
};
