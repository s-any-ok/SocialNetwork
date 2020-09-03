import { rerender } from "./../render";
let state = {
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
};

export const addUser = () => {
  const newPost = { id: 5, message: state.profilePage.newPostText, likes: 10 };
  state.profilePage.posts.push(newPost);
  rerender(state);
};

export const onPostChange = (text) => {
  state.profilePage.newPostText = text;
  rerender(state);
};

export default state;
