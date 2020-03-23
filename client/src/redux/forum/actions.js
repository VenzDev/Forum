import types from "./types";

const fetchForumPending = () => ({ type: types.FETCH_FORUM_PENDING, payload: true });
const fetchForumSuccess = forums => ({ type: types.FETCH_FORUM_SUCCESS, payload: forums });
const fetchForumFailed = error => ({ type: types.FETCH_FORUM_FAILED, payload: error });

export default {
  fetchForumFailed,
  fetchForumPending,
  fetchForumSuccess
};
