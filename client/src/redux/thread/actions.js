import types from "./types";

const fetchThreadPending = () => ({ type: types.FETCH_THREAD_PENDING, payload: true });
const fetchThreadSuccess = thread => ({ type: types.FETCH_THREAD_SUCCESS, payload: thread });
const fetchThreadFailed = error => ({ type: types.FETCH_THREAD_FAILED, payload: error });

export default {
  fetchThreadFailed,
  fetchThreadSuccess,
  fetchThreadPending
};
