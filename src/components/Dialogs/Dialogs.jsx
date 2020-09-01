import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialog/${props.id}`;
  return (
    <div className={s.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Dima" id="1" />
          <DialogItem name="Roma" id="2" />
          <DialogItem name="Denus" id="3" />
          <DialogItem name="Taras" id="4" />
        </div>
        <div className={s.messages}>
          <Message message="Hi" />
          <Message message="What is your name?" />
          <Message message="How are you?" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
