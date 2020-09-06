const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Denus" },
    { id: 4, name: "Taras" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "What is your name?" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "How are you?" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageText: action.body };
    case SEND_MESSAGE:
      const body = state.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
        newMessageText: "",
      };
    default:
      return state;
  }
};

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export default dialogsReducer;
