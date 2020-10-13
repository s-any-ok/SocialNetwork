import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
  return (
    <div className={s.wrapper}>
      <h3>Users</h3>
      <div className={s.users}>
        {props.users.map((u) => (
          <User
            user={u}
            isFollowingInProgress={props.isFollowingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
      <Paginator
        totalItemsCount={props.totalItemsCount}
        pageSize={props.pageSize}
        onChangePage={props.onChangePage}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default Users;
