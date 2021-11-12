import { api, callApi, callApiWithToken } from "../core";

const authService = {
  login(user) {
    return callApi(`${api}/elearning/v4/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },
  updateInfo(form) {
    return callApiWithToken(`${api}/elearning/v4/profile/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  },
};

export default authService;
