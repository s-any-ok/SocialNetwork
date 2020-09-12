import React from "react";
import s from "./Users.module.css";
import userDefaultPhoto from "./../../assets/img/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                    disabled={props.isFollowingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.toggleFollowing(true, u.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "89f030bd-930e-4cbb-a6ac-6fe5d81fabcc",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowing(false, u.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.isFollowingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.toggleFollowing(true, u.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "89f030bd-930e-4cbb-a6ac-6fe5d81fabcc",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowing(false, u.id);
                        });
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
