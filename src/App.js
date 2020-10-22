import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import NavContainer from "./components/Nav/NavContainer.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer.jsx")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const Login = lazy(() => import("./components/Login/Login"));

class MainApp extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <NavContainer />
        <div className="wrapper-content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={withSuspense(Login)} />
            <Route path="*" render={() => <div>404 ERROR</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(MainApp);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
