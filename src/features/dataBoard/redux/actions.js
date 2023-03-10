import { actionTypes } from "./types";

export const changeBoard = () => {
  return async (dispatch, state, extra) => {
    /* const value = state().app.theme === "dark" ? "light" : "dark"; */

    dispatch(/* { type: actionTypes.SWITCH_THEME, payload: value } */);
  };
};
