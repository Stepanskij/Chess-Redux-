import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.MOVE_FIGURE: {
      return {
        ...state,
        cells: action.payload,
        possibleMovesCells: [],
      };
    }

    case actionTypes.SELECT_FIGURE: {
      return {
        ...state,
        cells: action.payload.cells,
        possibleMovesCells: action.payload.possibleMovesCells,
      };
    }

    default: {
      return state;
    }
  }
};
