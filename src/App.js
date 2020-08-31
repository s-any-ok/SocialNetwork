import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Nav from "./components/Nav/Nav.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
