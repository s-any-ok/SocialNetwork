import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friendsElements = props.friends.map((f) => <Friend name={f.name} />);

  return (
    <div>
      <div className={s.friendsHead}>
        <h2>Friends</h2>
      </div>
      <div className={s.friends}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
