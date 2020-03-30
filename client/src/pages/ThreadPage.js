import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { thread } from "../redux/thread";
import s from "./threadpage.module.scss";
import { withRouter } from "react-router-dom";
import PostsList from "../components/PostsList";
import CreatePost from "../components/CreatePost";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Editor, EditorState, convertFromRaw } from "draft-js";

const ThreadPage = props => {
  const dispatch = useDispatch();
  const threadState = useSelector(state => state.threadReducer);
  const userState = useSelector(state => state.userReducer);
  const { user, posts, name, content, createdAt } = threadState.thread;
  const date = new Date(createdAt);
  if (content !== undefined) {
    const obj = JSON.parse(content);
    var editorState = EditorState.createWithContent(convertFromRaw(obj));
  }
  useEffect(() => {
    dispatch(thread.findThread(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  let style = "";
  if (user && userState.user.id === user._id) style = s.border;
  else style = "";

  const RootPost = () => (
    <div className={`${s.container} ${style}`}>
      <div className={s.content}>
        <h1 className={s.threadName}>{name}</h1>
        {editorState !== undefined && (
          <Editor className={s.editor} editorState={editorState} readOnly={true} />
        )}
      </div>
      <div className={s.userInfo}>
        <Link className={s.link} to={user ? `/user/${user._id}` : "/login"}>
          <FaUserCircle className={s.userAvatar} />
          {user && <h2>{`${user.name}  ${user.surname}`}</h2>}
        </Link>
        <p>{`Created at: ${date.toLocaleString()}`}</p>
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
      {userState.user && localStorage.getItem("token") && (
        <CreatePost threadId={props.match.params.id} />
      )}
    </div>
  );
};

export default withRouter(ThreadPage);
