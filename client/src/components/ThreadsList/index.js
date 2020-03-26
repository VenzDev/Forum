import React from "react";
import s from "./threadsList.module.scss";
import ThreadItem from "../ThreadItem";
const ThreadsList = ({ threads }) => {
  return (
    <div className={s.container}>
      {threads.map(thread => (
        <ThreadItem key={thread._id} thread={thread} />
      ))}
    </div>
  );
};

export default ThreadsList;
