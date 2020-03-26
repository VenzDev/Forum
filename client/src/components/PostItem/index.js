import React from "react";
import s from "./postitem.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostItem = ({ post }) => {
  const userState = useSelector(state => state.userReducer);
  let style = "";

  if (userState.user.id === post.user._id) style = s.border;
  else style = "";
  const date = new Date(post.createdAt);
  return (
    <div className={`${s.post} ${style}`}>
      <div className={s.postContent}> {post.content}</div>
      <div className={s.userInfo}>
        <Link to={`/user/${post.user._id}`} className={s.link}>
          <FaUserCircle className={s.userAvatar} />
        </Link>
        <h2>{`${post.user.name}  ${post.user.surname}`}</h2>
        <p>{`Created at: ${date.toLocaleString()}`}</p>
      </div>
      <div className={s.line}></div>
    </div>
  );
};

export default PostItem;
