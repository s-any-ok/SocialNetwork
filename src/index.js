import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { subscriber } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addUser, onPostChange } from "./redux/state";

const rerender = (state) => {
  ReactDOM.render(
    <App state={state} addUser={addUser} onPostChange={onPostChange} />,
    document.getElementById("root")
  );
};

rerender(state);
subscriber(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
