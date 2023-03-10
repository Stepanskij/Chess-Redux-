import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "modules/App";

import store from "./store";

import "./shared/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter Route={Route}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
