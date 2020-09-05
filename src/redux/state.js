import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
