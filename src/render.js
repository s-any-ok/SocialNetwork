import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addUser, onPostChange } from "./redux/state";

export const rerender = (state) => {
  ReactDOM.render(
    <App state={state} addUser={addUser} onPostChange={onPostChange} />,
    document.getElementById("root")
  );
};
