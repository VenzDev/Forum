import React from "react";
import s from "./threadItem.module.scss";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const ThreadItem = ({ thread, isAdmin }) => {
  const date = new Date(thread.createdAt);
  let postDate = null;
  if (thread.posts.length > 0) postDate = new Date(thread.posts[thread.posts.length - 1].createdAt);
  else postDate = date;

  const words = postDate.toTimeString().split(" ");

  return (
    <Link to={`/thread/${thread._id}`} className={s.container}>
      <div className={s.threadInfo}>
        <h2>{thread.name}</h2>
        <p>{`Created at: ${date.toLocaleString()}`}</p>
      </div>
      <div className={s.additional}>
        <div className={s.additionalDesc}>
          <h3>Activity</h3>
          <h3>Posts</h3>
          <h3 className={s.lastH3}>Author</h3>
        </div>
        <div className={s.additionalStat}>
          <h3>{words[0]}</h3>
          <h3>{thread.posts.length}</h3>
          <h3 className={s.lastH3}>{`${thread.user.name} ${thread.user.surname}`}</h3>
        </div>
      </div>
      <FaTrash
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          fontSize: "1.5rem",
          transform: "translateY(-50%)",
        }}
      />
      <div className={s.line}></div>
    </Link>
  );
};

export default ThreadItem;
