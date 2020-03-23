import axios from "axios";
import { fetchForumsEndpoint } from "../../apiConfig";
import actions from "./actions";

const fetchForums = () => async dispatch => {
  try {
    dispatch(actions.fetchForumPending());
    const fetchedData = await axios.get(fetchForumsEndpoint);
    if (fetchedData) dispatch(actions.fetchForumSuccess(fetchedData.data));
  } catch (err) {
    dispatch(actions.fetchForumFailed(err.response.data));
  }
};

export default { fetchForums };
