import { authAPI, securityAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCH_URL = "auth/GET_CAPTCH_URL";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCH_URL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//-------------------Actions--------------------//
export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const getCaptchUrlSuccess = (captchUrl) => ({
  type: GET_CAPTCH_URL,
  payload: { captchUrl },
});

//-------------------Thunks--------------------//
export const getAuthUserData = () => async (dispath) => {
  const data = await authAPI.authUser();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispath(setUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe, captcha) => async (
  dispath
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispath(getAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispath(getCapthUrl());
    }
    dispath(stopSubmit("login", { _error: "Common error" }));
  }
};

export const getCapthUrl = () => async (dispath) => {
  const data = await securityAPI.getCapthUrl();
  const captchUrl = data.url;
  dispath(getCaptchUrlSuccess(captchUrl));
};
export const logout = () => async (dispath) => {
  const data = authAPI.logout();
  if (data.resultCode === 0) {
    dispath(setUserData(null, null, null, false));
  }
  return data;
};

export default authReducer;
