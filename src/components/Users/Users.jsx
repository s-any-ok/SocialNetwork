import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userDefaultPhoto from "./../../assets/img/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onChangePage = (pageNam) => {
    this.props.changePage(pageNam);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNam}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);

    if (pagesCount > 20) pagesCount = 20;

    let pages = [];

    for (let i = 0; i < pagesCount; i++) pages.push(i + 1);

    return (
      <div className={s.wrapper}>
        <h3>Users</h3>
        <div className={s.users}>
          {this.props.users.map((u) => (
            <div key={u.id} className={s.user}>
              <div>
                <div>
                  <img
                    src={
                      u.photos.small != null ? u.photos.small : userDefaultPhoto
                    }
                    className={s.userPhoto}
                  />
                </div>
                <div className={s.userButton}>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
                onClick={() => this.onChangePage(p)}
                className={this.props.currentPage === p && s.actBtn}
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
