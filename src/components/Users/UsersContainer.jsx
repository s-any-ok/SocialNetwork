import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setUsersCount,
  requestUser,
} from "../../redux/reducers/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUser,
  getCurrentPage,
  getIsFetching,
  getUsersCount,
  getPageSize,
  getIsFollowingInProgress,
} from "../../redux/selectors/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUser(currentPage, pageSize);
  }

  onChangePage = (pageNam) => {
    const { pageSize } = this.props;
    this.props.requestUser(pageNam, pageSize);
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
          isFollowingInProgress={this.props.isFollowingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUser(state),
    currentPage: getCurrentPage(state),
    usersCount: getUsersCount(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  setUsersCount,
  requestUser,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer
);
