import React from "react";
import {
  updateNewMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      let action = sendMessageCreator();
      dispatch(action);
    },

    onNewMessageChange: (body) => {
      let action = updateNewMessageCreator(body);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
