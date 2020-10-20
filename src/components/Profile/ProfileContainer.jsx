import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {
  getProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/reducers/profileReducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) userId = this.props.history.push("/login");
    }
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile();
  }
  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }

    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = { getProfile, getUserStatus, updateUserStatus };

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer);
