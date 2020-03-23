import types from "./types";

const initForumState = {
  forums: [],
  loading: false,
  error: { message: "" }
};

const forumReducer = (state = initForumState, action) => {
  switch (action.type) {
    case types.FETCH_FORUM_PENDING:
      return { ...state, forums: [], error: { message: "" }, loading: true };
    case types.FETCH_FORUM_SUCCESS:
      return { ...state, forums: action.payload, loading: false, error: { message: "" } };
    case types.FETCH_FORUM_FAILED:
      return initForumState;
    default:
      return state;
  }
};
export default forumReducer;
