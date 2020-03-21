import React from "react";
import ForumItem from "../ForumItem";
import s from "./forumlist.module.scss";

const ForumList = () => {
  return (
    <div className={s.container}>
      <ForumItem />
      <ForumItem />
      <ForumItem />
      <ForumItem />
    </div>
  );
};

export default ForumList;
