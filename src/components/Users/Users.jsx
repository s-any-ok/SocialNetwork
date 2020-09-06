import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Dima",
        photoUrl:
          "https://facilict.com.au/wp-content/uploads/2019/02/gent-300x300.png",
        followed: true,
        status: "I am boss",
        location: { city: "Lutsk", country: "Ukraine" },
      },
      {
        id: 2,
        fullName: "Sasha",
        photoUrl:
          "https://facilict.com.au/wp-content/uploads/2019/02/gent-300x300.png",
        followed: false,
        status: "I am boss too",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        fullName: "Max",
        photoUrl:
          "https://facilict.com.au/wp-content/uploads/2019/02/gent-300x300.png",
        followed: true,
        status: "I am not boss",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }

  return (
    <div>
      <h3>Users</h3>
      {props.users.map((u) => (
        <div key={u.id} className={s.user}>
          <div>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            <div>
              {u.location.country}, {u.location.city}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
