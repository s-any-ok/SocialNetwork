import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addUser } from "./redux/state";

export const rerender = (state) => {
  ReactDOM.render(
    <App state={state} addUser={addUser} />,
    document.getElementById("root")
  );
};
