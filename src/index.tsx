import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import "babel-polyfill";

import App from "./components/App/App";
import Todo from "./components/Todo/Todo";

import store from "./store";

import "./main.css";

const Ddd = () => <div>test</div>;

// ReactDOM.render(
//   <Provider store={store}>
//     <Ddd />
//   </Provider>,
//   document.getElementById("root"),
// );

ReactDOM.render(<App />, document.getElementById("root"));
