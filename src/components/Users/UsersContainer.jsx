import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  changePage,
  setUsersCount,
  setIsFetching,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    userAPI
      .getUser(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
      });
  }

  onChangePage = (pageNam) => {
    this.props.setIsFetching(true);
    this.props.changePage(pageNam);

    userAPI.getUser(pageNam, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
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

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  changePage,
  setUsersCount,
  setIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
