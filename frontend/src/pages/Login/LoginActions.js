import { apiPost } from "../../helpers/api";
export const LOGIN = "LOGIN";

export const login = (data) => {
  const payload = apiPost("/users/sign-in", data);
  return { type: LOGIN, payload };
};
