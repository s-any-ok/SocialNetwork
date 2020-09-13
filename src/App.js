import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import NavContainer from "./components/Nav/NavContainer.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <NavContainer />
      <div className="wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
