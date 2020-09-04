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
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 10,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "ON-POST-CHANGE") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
