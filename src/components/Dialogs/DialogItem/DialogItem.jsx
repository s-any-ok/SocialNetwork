import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import user from "../../../assets/img/user.png";

const DialogItem = ({ id, name }) => {
  const path = `/dialog/${id}`;
  return (
    <div className={s.item}>
      <img alt="user" src={user} />
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
