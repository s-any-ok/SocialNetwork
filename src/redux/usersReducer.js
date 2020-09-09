const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 9,
  usersCount: 0,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, usersCount: action.totalCount };
    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export const changePageAC = (pageNumber) => ({
  type: CHANGE_CURRENT_PAGE,
  pageNumber,
});
export const setUsersCountAC = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

export default usersReducer;
