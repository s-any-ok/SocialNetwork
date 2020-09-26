export const getUser = (state) => state.usersPage.users;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getUsersCount = (state) => state.usersPage.usersCount;
export const getPageSize = (state) => state.usersPage.pageSize;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getIsFollowingInProgress = (state) =>
  state.usersPage.isFollowingInProgress;
