import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import Provider from "../common/Preloader";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { userAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    userAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
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

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlProfileContainer);
