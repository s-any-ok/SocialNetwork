import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "How are you boy?", likes: 10 },
    { id: 2, message: "I know Raect!", likes: 8 },
    { id: 3, message: "How are you boy?", likes: 0 },
    { id: 4, message: "I know Raect!", likes: 18 },
  ],
  newPostText: "",
  profile: null,
  status: "",
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
//-------------------Actions--------------------//
export const addPost = () => ({
  type: ADD_POST,
});
export const onPostChange = (text) => ({
  type: ON_POST_CHANGE,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

//-------------------Thunks--------------------//
export const getProfile = (userId) => (dispath) => {
  profileAPI.getProfile(userId).then((data) => {
    dispath(setUserProfile(data));
  });
};
export const getUserStatus = (userId) => (dispath) => {
  profileAPI.getStatus(userId).then((response) => {
    dispath(setUserStatus(response.data));
  });
};
export const updateUserStatus = (status) => (dispath) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispath(setUserStatus(status));
    }
  });
};

export default profileReducer;
