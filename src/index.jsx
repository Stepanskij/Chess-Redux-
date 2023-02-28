import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "modules/App";

import store from "./store";

import "./shared/styles.scss";

/* const productList = [
  { text: "We", checked: false, id: 1 },
  { text: "O", checked: true, id: 2 },
  { text: "Pe", checked: true, id: 3 },
];

localStorage.setItem("productList", JSON.stringify(productList)); */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter Route={Route}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
