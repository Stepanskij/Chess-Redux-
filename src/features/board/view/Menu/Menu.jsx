import React from "react";
import block from "bem-cn";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import Button from "components/Button";

import * as boardActions from "features/board/redux/actions";

import "./Menu.scss";

const b = block("menu");

const Menu = () => {
  const dispatch = useDispatch();
  const { counterOfMove } = useSelector((state) => state.board, shallowEqual);
  const {} = useSelector((state) => state.game, shallowEqual);

  return (
    <div className={b()}>
      <div className={b("counter-move")}>{counterOfMove}</div>
      <div className={b("restart-game")}>
        <Button
          onClick={() => {
            dispatch(boardActions.restartGame());
          }}
        >
          Начать заново
        </Button>
      </div>
    </div>
  );
};

export default Menu;
