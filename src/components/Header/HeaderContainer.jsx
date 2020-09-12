import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import { setUserDate } from "../../redux/authReducer";
import { userAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.authUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setUserDate(id, email, login);
      }
    });
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

const mapDispatchToProps = { setUserDate };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
