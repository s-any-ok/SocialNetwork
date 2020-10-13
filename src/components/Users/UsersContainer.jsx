import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUser,
  setItemsCount,
} from "../../redux/reducers/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUser,
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getItemsCount,
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
          totalItemsCount={this.props.totalItemsCount}
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
    totalItemsCount: getItemsCount(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  setItemsCount,
  requestUser,
  getItemsCount
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer
);
