import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { thread } from "../redux/thread";
import s from "./threadpage.module.scss";
import b from "../components/button.module.scss";
import { createPostEndpoint } from "../apiConfig";
import axios from "axios";
import { withRouter } from "react-router-dom";
import showToast from "../utils/showToast";

const ThreadPage = props => {
  const dispatch = useDispatch();
  const threadState = useSelector(state => state.threadReducer);
  const [post, setPost] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(thread.findThread(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleChange = e => {
    setPost(e.target.value);
  };
  const handleSubmit = () => {
    if (post.trim(""))
      axios
        .post(
          createPostEndpoint,
          { content: post, threadId: props.match.params.id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          showToast("Post created!");
          dispatch(thread.findThread(props.match.params.id));
        });
  };

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
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1>{threadState.thread.name}</h1>
        <h2>{threadState.thread.content}</h2>
      </div>
      {threadState.thread.posts &&
        threadState.thread.posts.map(post => (
          <div className={s.post} key={post._id}>
            {post.content}
          </div>
        ))}
      <div className={s.createPost}>
        <p>Create new Post</p>
        <textarea onChange={handleChange} placeholder="New post..."></textarea>
        <button
          onClick={handleSubmit}
          style={{ margin: "0 auto", padding: "1rem" }}
          className={b.button}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default withRouter(ThreadPage);
