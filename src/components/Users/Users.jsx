import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userDefaultPhoto from "./../../assets/img/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
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
    );
  }
}

export default Users;
