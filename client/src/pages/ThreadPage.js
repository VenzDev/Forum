import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { thread } from "../redux/thread";

const ThreadPage = props => {
  const dispatch = useDispatch();
  const threadState = useSelector(state => state.threadReducer);
  useEffect(() => {
    dispatch(thread.findThread(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const centerLoader = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  return threadState.loading ? (
    <div style={centerLoader}>
      <Loader type="BallTriangle" color="blue" />
    </div>
  ) : (
    <div>
      <h1>{threadState.thread.name}</h1>
      <h2>{threadState.thread.content}</h2>
    </div>
  );
};

export default ThreadPage;
