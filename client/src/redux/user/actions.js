import types from "./types";

const loginRequestPending = () => ({ type: types.LOGIN_REQUEST_PENDING, payload: true });
const loginRequestSuccess = user => ({ type: types.LOGIN_REQUEST_SUCCESS, payload: user });
const loginRequestFailed = error => ({ type: types.LOGIN_REQUEST_FAILED, payload: error });
const registerRequestPending = () => ({ type: types.REGISTER_REQUEST_PENDING, payload: true });
const registerRequestSuccess = () => ({ type: types.REGISTER_REQUEST_SUCCESS, payload: true });
const registerRequestFailed = error => ({ type: types.REGISTER_REQUEST_FAILED, payload: error });
const fetchProfilPending = () => ({ type: types.FETCH_PROFIL_PENDING, payload: true });
const fetchProfilSuccess = profil => ({ type: types.FETCH_PROFIL_SUCCESS, payload: profil });
const fetchProfilFailed = error => ({ type: types.FETCH_PROFIL_FAILED, payload: error });
const logout = () => ({ type: types.LOGOUT, payload: true });
const auth = user => ({ type: types.AUTH, payload: user });

export default {
  loginRequestPending,
  loginRequestSuccess,
  loginRequestFailed,
  registerRequestPending,
  registerRequestSuccess,
  registerRequestFailed,
  fetchProfilFailed,
  fetchProfilSuccess,
  fetchProfilPending,
  logout,
  auth
};
