import * as axios from "axios";

const instantion = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "89f030bd-930e-4cbb-a6ac-6fe5d81fabcc" },
});

export const userAPI = {
  getUser(currentPage = 1, pageSize = 12) {
    return instantion
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getProfile(currentPage = 1, pageSize = 12) {
    return instantion
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  authUser(userId) {
    return instantion
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
};
