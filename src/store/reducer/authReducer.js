import { LOGIN_SUCCESS, OPEN_LOGIN, CLOSE_LOGIN, UPDATE_INFO, LOGOUT } from "../type";

const authStateInitial = {
  user: JSON.parse(localStorage.getItem("login")),
  openLogin: false,
};

const authReducer = (state = authStateInitial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("login", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        user: action.payload,
      };
    case OPEN_LOGIN:
      return {
        ...state,
        openLogin: true,
      };
    case CLOSE_LOGIN:
      return {
        ...state,
        openLogin: false,
      };
    case UPDATE_INFO:
      localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
      };
  }
  return state;
};

export default authReducer
