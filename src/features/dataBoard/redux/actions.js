import { actionTypes } from "./types";

export const changeCell = (idCell) => {
  return async (dispatch, state, extra) => {
    const cells = { ...state().dataBoard.cells };

    dispatch({
      type: actionTypes.CHANGE_CELL,
      payload: cells,
    });
  };
};

export const moveFigure = (idCell) => {
  return async (dispatch, state, extra) => {
    const moveArg = state().dataBoard.moveArg;
    console.log(moveArg);
    dispatch({
      type: actionTypes.MOVE_FIGURE,
    });
  };
};
