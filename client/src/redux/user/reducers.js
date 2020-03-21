import types from "./types";

const initUserState = {
  user: {},
  loading: false,
  error: { message: "" },
  tokenInfo: null
};

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST_PENDING:
      return { ...state, loading: action.payload, error: { message: "" } };
    case types.LOGIN_REQUEST_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: { message: "" } };
    case types.LOGIN_REQUEST_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.REGISTER_REQUEST_FAILED:
      return { ...state, loading: false, error: action.payload };
    case types.REGISTER_REQUEST_PENDING:
      return { ...state, loading: true, error: { message: "" } };
    case types.REGISTER_REQUEST_SUCCESS:
      return { ...state, loading: false, error: { message: "" } };
    case types.AUTH:
      return { ...state, loading: false, user: action.payload, error: { message: "" } };
    case types.LOGOUT:
      return { ...initUserState };
    default:
      return state;
  }
};

export default userReducer;
