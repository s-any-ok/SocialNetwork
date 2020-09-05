const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageText = action.body;
  } else if (action.type === SEND_MESSAGE) {
    const body = state.newMessageText;
    const newMessage = { id: 5, message: body };
    state.messages.push(newMessage);
    state.newMessageText = "";
  }

  return state;
};

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export default dialogsReducer;
