import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.item}>
            <NavLink to="/dialog/1">Dima</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialog/2">Roma</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialog/3">Denus</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialog/4">Taras</NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hello</div>
          <div className={s.message}>What is your name?</div>
          <div className={s.message}>How are you?</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
