import { profileAPI } from "../../api/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const SAVE_USER_PHOTO = "profile/SAVE_USER_PHOTO";

const initialState = {
  posts: [
    { id: 1, message: "How are you boy?", likes: 10 },
    { id: 2, message: "I know Raect!", likes: 8 },
    { id: 3, message: "How are you boy?", likes: 0 },
    { id: 4, message: "I know Raect!", likes: 18 },
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.postText,
        likes: 10,
      };
      return { ...state, posts: [...state.posts, newPost] };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SAVE_USER_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photoFile },
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
export const addPost = (postText) => ({
  type: ADD_POST,
  postText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const saveUserPhoto = (photoFile) => ({
  type: SAVE_USER_PHOTO,
  photoFile,
});

//-------------------Thunks--------------------//
export const getProfile = (userId) => async (dispath) => {
  const data = await profileAPI.getProfile(userId);
  dispath(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispath) => {
  const response = await profileAPI.getStatus(userId);
  dispath(setUserStatus(response.data));
};
export const savePhoto = (photoFile) => async (dispath) => {
  const response = await profileAPI.savePhoto(photoFile);
  dispath(saveUserPhoto(response.data.data.photos));
};
export const updateUserStatus = (status) => async (dispath) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispath(setUserStatus(status));
  }
};

export default profileReducer;
