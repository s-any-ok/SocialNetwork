import React from "react";
import {
  updateNewMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { configure } from "@testing-library/react";
import { compose } from "redux";

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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
