const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you boy?", likes: 10 },
        { id: 2, message: "I know Raect!", likes: 8 },
        { id: 3, message: "How are you boy?", likes: 0 },
        { id: 4, message: "I know Raect!", likes: 18 },
      ],
      newPostText: "",
    },

    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Roma" },
        { id: 3, name: "Denus" },
        { id: 4, name: "Taras" },
        { id: 5, name: "Mark" },
        { id: 6, name: "Jaruk" },
      ],
    },
  },
  _callSubscriber() {
    return "";
  },

  getState() {
    return this._state;
  },
  subscriber(obresver) {
    this._callSubscriber = obresver;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 10,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === ON_POST_CHANGE) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageText = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const body = this._state.dialogsPage.newMessageText;
      const newMessage = { id: 5, message: body };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const onPostChangeActionCreator = (text) => ({
  type: ON_POST_CHANGE,
  newText: text,
});

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export default store;
