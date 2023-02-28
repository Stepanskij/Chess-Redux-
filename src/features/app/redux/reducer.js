import { actionTypes } from "./types";
import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
