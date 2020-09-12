import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import { setUserDate } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
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
