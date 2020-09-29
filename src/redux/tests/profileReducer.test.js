import usersReducer, {
  followSuccess,
  setUsers,
} from "../reducers/usersReducer";

const state = {
  users: [{ id: 1, name: "Alex", followed: false }],
  currentPage: 1,
  pageSize: 9,
  usersCount: 0,
  isFetching: false,
  isFollowingInProgress: [],
};

test("check amout of users", () => {
  // 1. start data
  const newUsers = [
    { id: 2, name: "Alex", followed: false },
    { id: 3, name: "Max", followed: false },
  ];
  // 2. action
  const action = setUsers(newUsers);

  const newState = usersReducer(state, action);

  expect(newState.users.length).toBe(2);
});

test("check if user is followed", () => {
  // 1. start data
  const userId = 1;
  // 2. action
  const action = followSuccess(userId);
  const newState = usersReducer(state, action);

  expect(newState.users[0].followed).toBe(true);
});
