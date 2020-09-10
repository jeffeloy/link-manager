import {
  setAccount,
  setToken,
  setRefreshToken,
  removeAccount,
  removeToken,
  removeRefreshToken,
  getAccount,
} from "../helpers/account";
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  INIT_ACCOUNT,
} from "../actions/AccountActions";
const initialState = {
  account: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
    case LOGIN:
      const response = payload ? payload.data : null;
      const account = response ? response.data : null;
      const metadata = response ? response.metadata : null;

      const token = metadata ? metadata.token : null;
      const refreshToken = metadata ? metadata.refreshToken : null;

      if (account) setAccount(account);
      if (token) setToken(token);
      if (refreshToken) setRefreshToken(refreshToken);

      return { ...state, account };
    case LOGOUT: {
      removeAccount();
      removeToken();
      removeRefreshToken();
      return { ...initialState, account: null };
    }
    case INIT_ACCOUNT: {
      const account = getAccount();
      return { ...state, account };
    }
    default:
      return state;
  }
}
