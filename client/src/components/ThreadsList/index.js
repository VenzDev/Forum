import React from "react";
import s from "./threadsList.module.scss";
import ThreadItem from "../ThreadItem";
import { useSelector } from "react-redux";
const ThreadsList = ({ threads }) => {
  const userState = useSelector((state) => state.userReducer);
  return (
    <div className={s.container}>
      {threads.map((thread) => (
        <ThreadItem isAdmin={userState.user.isAdmin} key={thread._id} thread={thread} />
      ))}
    </div>
  );
};

export default ThreadsList;
