import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = followAC(userId);
      dispatch(action);
    },

    unfollow: (userId) => {
      let action = unfollowAC(userId);
      dispatch(action);
    },

    setUsers: (users) => {
      let action = setUsersAC(users);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
