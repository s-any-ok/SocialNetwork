import React from "react";
import {
  updateNewMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const onSendMessageClick = () => {
    let action = sendMessageCreator();
    props.store.dispatch(action);
  };

  const onNewMessageChange = (body) => {
    let action = updateNewMessageCreator(body);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      onSendMessageClick={onSendMessageClick}
      onNewMessageChange={onNewMessageChange}
      dialogsPage={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
