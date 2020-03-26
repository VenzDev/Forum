import React from "react";
import s from "./threadItem.module.scss";
import { Link } from "react-router-dom";
const ThreadItem = ({ thread }) => {
  return (
    <Link to={`/thread/${thread._id}`} className={s.container}>
      <h2>{thread.name}</h2>
      <div className={s.line}></div>
    </Link>
  );
};

export default ThreadItem;
