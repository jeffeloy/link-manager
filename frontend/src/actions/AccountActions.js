import { apiPost } from "../helpers/api";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

export const register = (data) => {
  const payload = apiPost("/users/sign-up", data);
  return { type: REGISTER, payload };
};

export const login = (data) => {
  const payload = apiPost("/users/sign-in", data);
  return { type: LOGIN, payload };
};
