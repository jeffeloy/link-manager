import { apiPost } from "../helpers/api";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const INIT_ACCOUNT = "INIT_ACCOUNT";

export const register = (data) => {
  const payload = apiPost("/users/sign-up", data);
  return { type: REGISTER, payload };
};

export const login = (data) => {
  const payload = apiPost("/users/sign-in", data);
  return { type: LOGIN, payload };
};
export const logout = () => {
  return { type: LOGOUT, payload: {} };
};
export const initAccount = () => {
  return { type: INIT_ACCOUNT, payload: {} };
};
