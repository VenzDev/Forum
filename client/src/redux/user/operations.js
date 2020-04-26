import actions from "./actions";
import axios from "axios";
import {
  loginEndpoint,
  registerEndpoint,
  authEndpoint,
  fetchProfilEndpoint,
} from "../../apiConfig";

const register = (data) => async (dispatch) => {
  try {
    dispatch(actions.registerRequestPending());
    const fetchedData = await axios.post(registerEndpoint, { ...data });
    if (fetchedData) return dispatch(actions.registerRequestSuccess());
  } catch (err) {
    if (err) return dispatch(actions.registerRequestFailed(err.response.data));
  }
};

const clearErrorMessage = () => (dispatch) => {
  dispatch(actions.clearErrorMessage());
};

const login = (data) => async (dispatch) => {
  try {
    dispatch(actions.loginRequestPending());
    const fetchedData = await axios.post(loginEndpoint, { ...data });

    if (fetchedData) {
      localStorage.setItem("token", fetchedData.data.token);
      return dispatch(actions.loginRequestSuccess(fetchedData.data));
    }
  } catch (err) {
    if (err) return dispatch(actions.loginRequestFailed(err.response.data));
  }
};
const logout = () => (dispatch) => dispatch(actions.logout());
const auth = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const fetchedProfile = await axios.get(authEndpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (fetchedProfile) dispatch(actions.auth(fetchedProfile.data));
    else localStorage.removeItem("token");
  } catch (err) {
    if (err) {
      localStorage.removeItem("token");
    }
  }
};
const fetchProfil = (id) => async (dispatch) => {
  try {
    dispatch(actions.fetchProfilPending());
    const fetchedProfile = await axios.get(fetchProfilEndpoint + id);
    if (fetchedProfile) dispatch(actions.fetchProfilSuccess(fetchedProfile.data));
  } catch (err) {
    dispatch(actions.fetchProfilFailed(err.response.data));
  }
};

export default { login, logout, auth, register, fetchProfil, clearErrorMessage };
