import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import Provider from "../common/Preloader";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    if (!this.props.profile) {
      return <Provider />;
    }
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let mapDispatchToProps = { setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
