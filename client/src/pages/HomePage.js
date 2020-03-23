import React, { useEffect } from "react";
import ForumList from "../components/ForumList";
import { useSelector, useDispatch } from "react-redux";
import { forum } from "../redux/forum";
import Loader from "react-loader-spinner";

const HomePage = () => {
  const dispatch = useDispatch();
  const forumState = useSelector(state => state.forumReducer);
  useEffect(() => {
    dispatch(forum.fetchForums());
  }, [dispatch]);

  const centerLoader = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  return forumState.loading ? (
    <div style={centerLoader}>
      <Loader type="BallTriangle" color="blue" />
    </div>
  ) : (
    <ForumList forums={forumState.forums} />
  );
};

export default HomePage;
