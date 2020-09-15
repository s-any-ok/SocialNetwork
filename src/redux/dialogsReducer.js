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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.message;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default dialogsReducer;
