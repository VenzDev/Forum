import React from "react";
import ForumItem from "../ForumItem";
import s from "./forumlist.module.scss";
import { useSelector } from "react-redux";
import b from "../button.module.scss";

const ForumList = ({ forums }) => {
  const userState = useSelector((state) => state.userReducer);

  return (
    <div className={s.container}>
      {userState.user.isAdmin && (
        <button style={{ padding: "2rem", width: "200px" }} className={b.button}>
          Create new forum
        </button>
      )}
      {forums.map((forum) => (
        <ForumItem admin={userState.user.isAdmin} forum={forum} key={forum._id} />
      ))}
    </div>
  );
};

export default ForumList;
