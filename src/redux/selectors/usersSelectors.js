import { createSelector } from "reselect";

export const getUserSelector = (state) => state.usersPage.users;
export const getUser = createSelector(getUserSelector, (users) => {
  return users.filter((u) => true);
});
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getItemsCount = (state) => state.usersPage.totalItemsCount;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getIsFollowingInProgress = (state) =>
  state.usersPage.isFollowingInProgress;
