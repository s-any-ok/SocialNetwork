import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  changePageAC,
  setUsersCountAC,
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
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

    changePage: (pageNumber) => {
      let action = changePageAC(pageNumber);
      dispatch(action);
    },

    setUsersCount: (totalCount) => {
      let action = setUsersCountAC(totalCount);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
