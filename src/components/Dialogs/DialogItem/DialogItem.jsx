import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialog/${props.id}`;
  return (
    <div className={s.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
