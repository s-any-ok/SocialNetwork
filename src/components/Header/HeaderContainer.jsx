import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authUser } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

const mapDispatchToProps = { authUser };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
