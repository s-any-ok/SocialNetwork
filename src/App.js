import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapper-content">
        <Profile />
      </div>
    </div>
  );
};

export default App;
