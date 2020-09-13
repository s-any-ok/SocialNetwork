import React from "react";
import {
  updateNewMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

export default withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Dialogs)
);
