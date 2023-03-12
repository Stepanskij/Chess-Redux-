import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CELL: {
      return {
        ...state,
        cells: action.payload,
      };
    }

    case actionTypes.MOVE_FIGURE: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
