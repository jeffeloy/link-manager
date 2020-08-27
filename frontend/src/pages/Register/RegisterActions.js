export const REGISTER = "REGISTER";

export const register = (data) => {
  return { type: REGISTER, payload: data };
};
