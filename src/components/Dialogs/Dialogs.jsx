import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageCreator, sendMessageCreator } from "../../redux/state";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  const onSendMessageClick = () => {
    let action = sendMessageCreator();
    props.dispatch(action);
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    let action = updateNewMessageCreator(body);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={props.dialogsPage.newMessageText}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
