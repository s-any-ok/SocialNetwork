import React from "react";
import s from "./Users.module.css";
import userDefaultPhoto from "./../../assets/img/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, isFollowingInProgress, follow, unfollow }) => {
  return (
    <div key={user.id} className={s.user}>
      <div>
        <div>
          <NavLink to={"profile/" + user.id}>
            <img
              alt="user"
              src={
                user.photos.small != null ? user.photos.small : userDefaultPhoto
              }
              className={s.userPhoto}
            />
          </NavLink>
        </div>
        <div className={s.userButton}>
          {user.followed ? (
            <button
              disabled={isFollowingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={isFollowingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>
        <div>{user.name}</div>
        <div>
          {user.status != null ? user.status.slice(0, 8) + "..." : user.status}
        </div>
      </div>
    </div>
  );
};

export default User;
