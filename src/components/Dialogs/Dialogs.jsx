import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm } from "redux-form";
import { createForm, Textarea } from "../common/FormsControls/FormsControls";
import {
  maxLengthConstructor,
  required,
} from "../../utils/validators/validators";

const maxLength50 = maxLengthConstructor(50);
const Dialogs = ({ dialogsPage, onSendMessageClick }) => {
  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  const addNewMessage = (data) => {
    onSendMessageClick(data.messageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <DialogReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const DialogForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createForm("Enter your message", "messageText", Textarea, [
        required,
        maxLength50,
      ])}

      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const DialogReduxForm = reduxForm({ form: "dialogs" })(DialogForm);

export default Dialogs;
