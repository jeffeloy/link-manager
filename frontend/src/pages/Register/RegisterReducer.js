import { REGISTER } from "./RegisterActions";

const initialState = {
  account: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
      return { ...initialState, account: { ...payload, sucess: true } };
    default:
      return state;
  }
}
