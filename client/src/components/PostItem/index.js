import React, { useState } from "react";
import s from "./postitem.module.scss";
import { FaUserCircle, FaEdit, FaTrash } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import b from "../button.module.scss";

const PostItem = ({ post }) => {
  const userState = useSelector(state => state.userReducer);
  const [isPopup, setPopup] = useState(false);
  let style = "";
  let owner = false;

  if (userState.user.id === post.user._id) {
    style = s.border;
    owner = true;
  } else {
    style = "";
    owner = false;
  }

  const handleClick = () => {
    setPopup(!isPopup);
  };
  const date = new Date(post.createdAt);
  return (
    <>
      {isPopup && (
        <div className={s.popup}>
          <div>
            <MdClose onClick={handleClick} className={s.closeItem} />
            Are you sure you want to delete post?
            <button style={{ margin: "4rem auto", padding: "1rem" }} className={b.button}>
              Delete
            </button>
          </div>
        </div>
      )}
      <div className={`${s.post} ${style}`}>
        <div className={s.postContent}> {post.content}</div>
        <div className={s.userInfo}>
          <Link to={`/user/${post.user._id}`} className={s.link}>
            <FaUserCircle className={s.userAvatar} />
          </Link>
          <h2>{`${post.user.name}  ${post.user.surname}`}</h2>
          <p>{`Created at: ${date.toLocaleString()}`}</p>
          {owner && (
            <p className={s.editPost}>
              <FaEdit className={s.editIcon} />
              <FaTrash onClick={handleClick} className={s.deleteIcon} />
            </p>
          )}
        </div>
        <div className={s.line}></div>
      </div>
    </>
  );
};

export default PostItem;
