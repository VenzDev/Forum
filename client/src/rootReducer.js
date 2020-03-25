import { combineReducers } from "redux";
import userReducer from "./redux/user";
import forumReducer from "./redux/forum";
import threadReducer from "./redux/thread";
const initState = {
  helloWorld: "helloWorld"
};

const helloWorldReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  helloWorldReducer,
  userReducer,
  forumReducer,
  threadReducer
});

export default rootReducer;
