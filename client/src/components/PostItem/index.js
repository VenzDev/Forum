import React, { useState } from "react";
import s from "./postitem.module.scss";
import { FaUserCircle, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeletePopup from "./DeletePopup";
import EditPopup from "./EditPopup";

const PostItem = ({ post }) => {
  const userState = useSelector(state => state.userReducer);
  const [isDeletePopup, setDeletePopup] = useState(false);
  const [isEditPopup, setEditPopup] = useState(false);
  let style = "";
  let owner = false;

  if (userState.user.id === post.user._id) {
    style = s.border;
    owner = true;
  } else {
    style = "";
    owner = false;
  }

  const handleDeleteClick = () => setDeletePopup(!isDeletePopup);
  const handleEditClick = () => setEditPopup(!isEditPopup);
  const date = new Date(post.createdAt);

  return (
    <>
      {isDeletePopup && (
        <DeletePopup handleClick={handleDeleteClick} id={post._id} threadId={post.thread} />
      )}
      {isEditPopup && (
        <EditPopup
          handleClick={handleEditClick}
          text={post.content}
          threadId={post.thread}
          id={post._id}
        />
      )}
      <div className={`${s.post} ${style}`}>
        <div className={s.postContent}> {post.content}</div>
        <div className={s.userInfo}>
          <Link to={`/user/${post.user._id}`} className={s.link}>
            <FaUserCircle className={s.userAvatar} />
            <h2>{`${post.user.name}  ${post.user.surname}`}</h2>
          </Link>
          <p>{`Created at: ${date.toLocaleString()}`}</p>
          {owner && (
            <p className={s.editPost}>
              <FaEdit onClick={handleEditClick} className={s.editIcon} />
              <FaTrash onClick={handleDeleteClick} className={s.deleteIcon} />
            </p>
          )}
        </div>
        <div className={s.line}></div>
      </div>
    </>
  );
};

export default PostItem;
