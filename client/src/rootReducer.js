import { combineReducers } from "redux";
import userReducer from "./redux/user";
import forumReducer from "./redux/forum";

const initState = {
  helloWorld: "helloWorld"
};

const helloWorldReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ helloWorldReducer, userReducer, forumReducer });

export default rootReducer;
