import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialog/${props.id}`;
  return (
    <div className={s.item}>
      <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
