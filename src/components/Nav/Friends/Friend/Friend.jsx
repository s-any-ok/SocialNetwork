import React from "react";
import s from "./Friend.module.css";
import friend from "../../../../assets/img/user.png";
const Friend = (props) => {
  return (
    <div className={s.friend}>
      <div>
        <img alt="friend" src={friend} />
      </div>
      <h6>{props.name}</h6>
    </div>
  );
};

export default Friend;
