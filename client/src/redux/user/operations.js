import actions from "./actions";
import axios from "axios";
import { loginEndpoint, registerEndpoint } from "../../apiConfig";

const register = data => async dispatch => {
  try {
    dispatch(actions.registerRequestPending());
    const fetchedData = await axios.post(registerEndpoint, { ...data });
    if (fetchedData) return dispatch(actions.registerRequestSuccess());
  } catch (err) {
    if (err) return dispatch(actions.registerRequestFailed(err.response.data));
  }
};

const login = data => async dispatch => {
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
const logout = () => dispatch => dispatch(actions.logout());
const auth = () => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    const fetchedProfile = await axios.get("http://localhost:1234/auth", {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (fetchedProfile) dispatch(actions.auth(fetchedProfile.data));
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export default { login, logout, auth, register };
