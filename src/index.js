import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Roma" },
  { id: 3, name: "Denus" },
  { id: 4, name: "Taras" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "What is your name?" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "How are you?" },
];
let postsData = [
  { id: 1, message: "How are you boy?", likes: 10 },
  { id: 2, message: "I know Raect!", likes: 8 },
  { id: 3, message: "How are you boy?", likes: 0 },
  { id: 4, message: "I know Raect!", likes: 18 },
];

ReactDOM.render(
  <App posts={postsData} messages={messagesData} dialogs={dialogsData} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
