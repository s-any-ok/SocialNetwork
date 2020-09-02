import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <div>
        <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" />
      </div>
      <h6>{props.name}</h6>
    </div>
  );
};

export default Friend;
