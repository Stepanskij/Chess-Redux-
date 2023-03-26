import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME: {
      return {
        ...state,
        board
      };
    }

    default: {
      return state;
    }
  }
};
