import React, { useState } from "react";
import b from "../button.module.scss";
import s from "./createpost.module.scss";
import axios from "axios";
import showToast from "../../utils/showToast";
import { useDispatch } from "react-redux";
import { thread } from "../../redux/thread";
import { createPostEndpoint } from "../../apiConfig";

const CreatePost = ({ threadId }) => {
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleChange = e => {
    setPost(e.target.value);
  };
  const handleSubmit = () => {
    if (post.trim(""))
      axios
        .post(
          createPostEndpoint,
          { content: post, threadId },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          showToast("Post created!");
          dispatch(thread.findThread(threadId));
        });
  };

  return (
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
  );
};

export default CreatePost;
