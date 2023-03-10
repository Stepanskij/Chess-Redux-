import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BOARD: {
      return {
        ...state,
        cells: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
