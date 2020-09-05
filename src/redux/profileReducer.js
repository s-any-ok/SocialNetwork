const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 5,
      message: state.newPostText,
      likes: 10,
    };
    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === ON_POST_CHANGE) {
    state.newPostText = action.newText;
  }

  return state;
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const onPostChangeActionCreator = (text) => ({
  type: ON_POST_CHANGE,
  newText: text,
});

export default profileReducer;
