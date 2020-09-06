const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

const initialState = {
  posts: [
    { id: 1, message: "How are you boy?", likes: 10 },
    { id: 2, message: "I know Raect!", likes: 8 },
    { id: 3, message: "How are you boy?", likes: 0 },
    { id: 4, message: "I know Raect!", likes: 18 },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likes: 10,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    case ON_POST_CHANGE:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const onPostChangeActionCreator = (text) => ({
  type: ON_POST_CHANGE,
  newText: text,
});

export default profileReducer;
