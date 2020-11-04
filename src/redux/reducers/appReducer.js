import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
  initialized: false, // check it
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

//-------------------Actions--------------------//
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

//-------------------Thunks--------------------//
export const initializeApp = () => (dispath) => {
  let promise = dispath(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispath(initializedSuccess());
  });
};

export default appReducer;
