import { actionTypes } from "./types";

import { initState as initBoard } from "features/board/redux/init";

export const changeBoard = (cellCoord) => {
  return async (dispatch, state, extra) => {
    const board = state().board;

    dispatch({
      type: actionTypes.START_GAME,
    });
  };
};
