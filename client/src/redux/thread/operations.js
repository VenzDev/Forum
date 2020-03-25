import actions from "./actions";
import axios from "axios";
import { findThreadEndpoint } from "../../apiConfig";

const findThread = id => async dispatch => {
  dispatch(actions.fetchThreadPending());
  try {
    const { data } = await axios.get(findThreadEndpoint + id);
    if (data) dispatch(actions.fetchThreadSuccess(data));
  } catch (err) {
    dispatch(actions.fetchThreadFailed(err));
  }
};

export default { findThread };
