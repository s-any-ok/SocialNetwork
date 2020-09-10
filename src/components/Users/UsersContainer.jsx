import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  changePageAC,
  setUsersCountAC,
  setIsFetchingAC,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onChangePage = (pageNam) => {
    this.props.setIsFetching(true);
    this.props.changePage(pageNam);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNam}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          usersCount={this.props.usersCount}
          pageSize={this.props.pageSize}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
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

    setIsFetching: (isFetching) => {
      let action = setIsFetchingAC(isFetching);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
