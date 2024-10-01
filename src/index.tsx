import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App/App";
import Todo from "./components/Todo/Todo";

import store from "./store";

import "./main.css";

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root"),
);
