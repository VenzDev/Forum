import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { thread } from "../redux/thread";
import s from "./threadpage.module.scss";
import { withRouter } from "react-router-dom";
import PostsList from "../components/PostsList";
import CreatePost from "../components/CreatePost";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import { AiOutlineCrown } from "react-icons/ai";

const ThreadPage = (props) => {
  const dispatch = useDispatch();
  const [isDeletePopup, setDeletePopup] = useState(false);
  const [isEditPopup, setEditPopup] = useState(false);
  const threadState = useSelector((state) => state.threadReducer);
  const userState = useSelector((state) => state.userReducer);
  const { user, posts, name, content, createdAt, isClosed } = threadState.thread;
  const date = new Date(createdAt);
  if (content !== undefined) {
    const obj = JSON.parse(content);
    var editorState = EditorState.createWithContent(convertFromRaw(obj));
  }
  useEffect(() => {
    dispatch(thread.findThread(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  let owner = false;

  let style = "";
  if (user && userState.user.id === user._id) style = s.border;
  else style = "";

  if (user && userState.user.id === user._id) {
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

  const codeStyle = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "code-block") {
      return "codeBlockStyle";
    }
  };

  const RootPost = () => (
    <div className={`${s.container} ${style}`}>
      <div className={s.content}>
        <h1 className={s.threadName}>{isClosed ? name + " (Closed)" : name}</h1>
        {editorState !== undefined && (
          <Editor
            blockStyleFn={codeStyle}
            className={s.editor}
            editorState={editorState}
            readOnly={true}
          />
        )}
      </div>
      <div className={s.userInfo}>
        <Link className={s.link} to={user ? `/user/${user._id}` : "/login"}>
          <FaUserCircle className={s.userAvatar} />
          {user && <h2>{`${user.name}  ${user.surname}`}</h2>}
        </Link>
        {user && user.isAdmin && (
          <div style={{ marginTop: "1rem", fontSize: "1.5rem", color: "blue" }}>
            Admin
            <AiOutlineCrown style={{ marginLeft: "5px", fontSize: "20px" }} />
          </div>
        )}
        <p>{`Created at: ${date.toLocaleString()}`}</p>
        {owner && (
          <p className={s.editThread} style={{ fontSize: "2rem" }}>
            <FaEdit onClick={handleEditClick} className={s.editIcon} />
            <FaTrash onClick={handleDeleteClick} className={s.deleteIcon} />
          </p>
        )}
      </div>
      <div className={s.line}></div>
    </div>
  );

  return threadState.loading ? (
    <div className={s.centerLoader}>
      <Loader type="BallTriangle" color="blue" />
    </div>
  ) : (
    <div className={s.wrapper}>
      <RootPost />
      {posts && <PostsList posts={posts} />}
      {userState.user && !userState.user.isBaned && localStorage.getItem("token") && !isClosed && (
        <CreatePost threadId={props.match.params.id} />
      )}
    </div>
  );
};

export default withRouter(ThreadPage);
