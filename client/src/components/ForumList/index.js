import React from "react";
import ForumItem from "../ForumItem";
import s from "./forumlist.module.scss";

const ForumList = ({ forums }) => {
  return (
    <div className={s.container}>
      {forums.map(forum => (
        <ForumItem forum={forum} key={forum._id} />
      ))}
    </div>
  );
};

export default ForumList;
