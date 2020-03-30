import React from "react";
import b from "../button.module.scss";
import s from "./createpost.module.scss";
import axios from "axios";
import showToast from "../../utils/showToast";
import { useDispatch } from "react-redux";
import { thread } from "../../redux/thread";
import { createPostEndpoint } from "../../apiConfig";
import RichEditor from "../RichEditor";

const CreatePost = ({ threadId }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  let rawData = "";
  const handleRichEditor = editorState => {
    rawData = JSON.stringify(editorState);
  };
  const handleSubmit = () => {
    axios
      .post(
        createPostEndpoint,
        { content: rawData, threadId },
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
      <RichEditor handleRichEditor={handleRichEditor} />
      <button
        onClick={handleSubmit}
        style={{ margin: "1rem auto", padding: "1rem" }}
        className={b.button}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;
