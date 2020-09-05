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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav state={props.state.sidebar} />
        <div className="wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
