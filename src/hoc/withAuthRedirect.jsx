import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const withAuthRedirect = (Component) => {
  class AuthRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  let ConnectWithAuthRedirect = connect(mapStateToProps)(AuthRedirectComponent);
  return ConnectWithAuthRedirect;
};

export default withAuthRedirect;
