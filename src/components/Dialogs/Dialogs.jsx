import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  const addNewMessage = (data) => {
    props.onSendMessageClick(data.messageText);
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

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          name="messageText"
          component="textarea"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const DialogReduxForm = reduxForm({ form: "dialogs" })(DialogForm);

export default Dialogs;
