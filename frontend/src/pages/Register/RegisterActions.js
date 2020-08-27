import { apiPost } from "../../helpers/api";

export const REGISTER = "REGISTER";

export const register = (data) => {
  const payload = apiPost("/users/sign-up", data);
  return { type: REGISTER, payload };
};
