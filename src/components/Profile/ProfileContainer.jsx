import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import Provider from "../common/Preloader";
import { getProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getProfile(userId);
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

let mapDispatchToProps = { getProfile };

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlProfileContainer);
