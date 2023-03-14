import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CELLS: {
      return {
        ...state,
        cells: action.payload,
      };
    }

    case actionTypes.MOVE_FIGURE: {
      return {
        ...state,
        moveCells: action.payload,
        moveCells: [],
      };
    }

    default: {
      return state;
    }
  }
};
