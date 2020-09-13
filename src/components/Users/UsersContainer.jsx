import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  changePage,
  setUsersCount,
  toggleFollowing,
  getUser,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader";
import { Redirect } from "react-router-dom";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNam) => {
    this.props.changePage(pageNam);
    this.props.getUser(pageNam, this.props.pageSize);
  };

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
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
          isFollowingInProgress={this.props.isFollowingInProgress}
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
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  changePage,
  setUsersCount,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
