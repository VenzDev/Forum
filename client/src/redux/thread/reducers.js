import types from "./types";

const initThreadState = {
  thread: {},
  loading: false,
  error: { message: "" }
};

const threadReducer = (state = initThreadState, action) => {
  switch (action.type) {
    case types.FETCH_THREAD_PENDING:
      return { ...state, loading: true, thread: {}, error: { message: "" } };
    case types.FETCH_THREAD_SUCCESS:
      return { ...state, loading: false, thread: action.payload, error: { message: "" } };
    case types.FETCH_THREAD_FAILED:
      return initThreadState;
    default:
      return state;
  }
};

export default threadReducer;
