import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "auth/SET_USER_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
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

//-------------------Thunks--------------------//
export const getAuthUserData = () => async (dispath) => {
  const data = await authAPI.authUser();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispath(setUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe) => async (dispath) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispath(getAuthUserData());
  } else {
    dispath(stopSubmit("login", { _error: "Common error" }));
  }
};
export const logout = () => async (dispath) => {
  const data = authAPI.logout();
  if (data.resultCode === 0) {
    dispath(setUserData(null, null, null, false));
  }
};

export default authReducer;
