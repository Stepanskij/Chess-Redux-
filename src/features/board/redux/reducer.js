import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_FIGURE: {
      return {
        ...state,
        cells: action.payload.cells,
        possibleMovesCells: action.payload.possibleMovesCells,
      };
    }

    case actionTypes.MOVE_FIGURE: {
      return {
        ...state,
        cells: action.payload,
        possibleMovesCells: [],
      };
    }

    case actionTypes.COUNT_MOVE: {
      return {
        ...state,
        counterOfMove: action.payload,
      };
    }

    case actionTypes.RESTART_GAME: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
