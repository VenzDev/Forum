import types from "./types";

const initUserState = {
  user: {},
  loading: false,
  error: { message: "" },
  tokenInfo: null
};

const fetchProfilState = {
  user: {},
  loading: false,
  error: { message: "" }
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

const profilReducer = (state = fetchProfilState, action) => {
  switch (action.type) {
    case types.FETCH_PROFIL_PENDING:
      return { ...state, loading: action.payload, error: { message: "" } };
    case types.FETCH_PROFIL_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: { message: "" } };
    case types.FETCH_PROFIL_FAILED:
      return fetchProfilState;
    default:
      return state;
  }
};

export { userReducer, profilReducer };
