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
  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Denus" },
    { id: 4, name: "Taras" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "What is your name?" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "How are you?" },
  ];

  const dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
