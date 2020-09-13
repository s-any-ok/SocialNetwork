import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 9,
  usersCount: 0,
  isFetching: false,
  isFollowingInProgress: [],
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        isFollowingInProgress: action.isFetching
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
//-------------------Actions--------------------//
export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const changePage = (pageNumber) => ({
  type: CHANGE_CURRENT_PAGE,
  pageNumber,
});
export const setUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowing = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

//-------------------Thunks--------------------//
export const getUser = (currentPage, pageSize) => (dispath) => {
  dispath(setIsFetching(true));
  userAPI.getUser(currentPage, pageSize).then((data) => {
    dispath(setIsFetching(false));
    dispath(setUsers(data.items));
    dispath(setUsersCount(data.totalCount));
  });
};
export const follow = (userId) => (dispath) => {
  dispath(toggleFollowing(true, userId));
  userAPI.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispath(unfollowSuccess(userId));
    }
    dispath(toggleFollowing(false, userId));
  });
};

export const unfollow = (userId) => (dispath) => {
  dispath(toggleFollowing(true, userId));
  userAPI.unfollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispath(followSuccess(userId));
    }
    dispath(toggleFollowing(false, userId));
  });
};

export default usersReducer;
