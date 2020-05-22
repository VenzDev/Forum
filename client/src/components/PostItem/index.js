import React, { useState } from "react";
import s from "./postitem.module.scss";
import { FaUserCircle, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeletePopup from "./DeletePopup";
import EditPopup from "./EditPopup";
import { AiOutlineCrown } from "react-icons/ai";
import { Editor, EditorState, convertFromRaw } from "draft-js";

const PostItem = ({ post }) => {
  const userState = useSelector((state) => state.userReducer);
  const [isDeletePopup, setDeletePopup] = useState(false);
  const [isEditPopup, setEditPopup] = useState(false);
  let style = "";
  let owner = false;

  if (userState.user.id === post.user._id) {
    style = s.border;
    owner = true;
  } else if (userState.user.isAdmin) {
    style = "";
    owner = true;
  } else {
    owner = false;
    style = "";
  }

  const handleDeleteClick = () => setDeletePopup(!isDeletePopup);
  const handleEditClick = () => setEditPopup(!isEditPopup);
  const date = new Date(post.createdAt);
  const editAdminDate = new Date(post.updatedAt);
  const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(post.content)));

  const editorStyle = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "code-block") {
      return "codeBlockStyle";
    }
  };
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
          isAdmin={userState.user.isAdmin}
        />
      )}
      <div className={`${s.post} ${style}`}>
        <div className={s.content}>
          <Editor blockStyleFn={editorStyle} editorState={editorState} readOnly={true} />
          {post.editedByAdmin === true && (
            <p
              style={{ marginTop: "10px", fontWeight: "bold", fontSize: "1rem", color: "blue" }}
            >{`Edited by Admin, ${editAdminDate.toLocaleString()}`}</p>
          )}
        </div>
        <div className={s.userInfo}>
          <Link to={`/user/${post.user._id}`} className={s.link}>
            <FaUserCircle className={s.userAvatar} />
            <h2>{`${post.user.name}  ${post.user.surname}`}</h2>
          </Link>
          {post.user.isAdmin && (
            <div style={{ marginTop: "1rem", fontSize: "1.5rem", color: "blue" }}>
              Admin
              <AiOutlineCrown style={{ marginLeft: "5px", fontSize: "20px" }} />
            </div>
          )}
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
