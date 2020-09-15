import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friendsElements = props.friends.map((f, i) => (
    <Friend key={i} name={f.name} />
  ));

  return (
    <div>
      <div className={s.friendsHead}>Friends</div>
      <div className={s.friends}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
