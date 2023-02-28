import React from "react";
import block from "bem-cn";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Modal from "modules/Modal";
import UiKit from "modules/UiKit";

import "./App.scss";

const b = block("app");

const App = (props) => {
  return (
    <div className={b()}>
      <Switch>
        <Route path="/" exact>
          <div>DEFAULT</div>
        </Route>
        <Route path="/main"></Route>
        <Route path="/uikit">
          <UiKit />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
