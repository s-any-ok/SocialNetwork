import React from "react";
import s from "./Users.module.css";
import userDefaultPhoto from "./../../assets/img/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.usersCount / props.pageSize);
  if (pagesCount > 20) pagesCount = 20;
  let pages = [];
  for (let i = 0; i < pagesCount; i++) pages.push(i + 1);

  return (
    <div className={s.wrapper}>
      <h3>Users</h3>
      <div className={s.users}>
        {props.users.map((u) => (
          <div key={u.id} className={s.user}>
            <div>
              <div>
                <NavLink to={"profile/" + u.id}>
                  <img
                    src={
                      u.photos.small != null ? u.photos.small : userDefaultPhoto
                    }
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>
              <div className={s.userButton}>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{"{u.location.country}, {u.location.city}"}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.pagesBtn}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => props.onChangePage(p)}
              className={props.currentPage === p && s.actBtn}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
