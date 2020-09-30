import { userAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/usersHelpers";

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
  pageSize: 12,
  usersCount: 0,
  isFetching: false,
  isFollowingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
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
export const setCurrentPage = (pageNumber) => ({
  type: CHANGE_CURRENT_PAGE,
  pageNumber,
});
export const setUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});
//-------------------Thunks--------------------//
export const requestUser = (page, pageSize) => async (dispath) => {
  const data = await userAPI.getUser(page, pageSize);
  dispath(toggleIsFetching(true));
  dispath(setCurrentPage(page));

  dispath(toggleIsFetching(false));
  dispath(setUsers(data.items));
  dispath(setUsersCount(data.totalCount));
};
export const follow = (userId) => async (dispath) => {
  followUnfollowFlow(
    dispath,
    userId,
    userAPI.follow.bind(userAPI),
    unfollowSuccess
  );
};
export const unfollow = (userId) => async (dispath) => {
  followUnfollowFlow(
    dispath,
    userId,
    userAPI.unfollow.bind(userAPI),
    followSuccess
  );
};
//-------------------FunctonsForOptimization--------------------//
const followUnfollowFlow = async (
  dispath,
  userId,
  apiMethod,
  actionCreator
) => {
  dispath(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispath(actionCreator(userId));
  }
  dispath(toggleFollowingProgress(false, userId));
};

export default usersReducer;
