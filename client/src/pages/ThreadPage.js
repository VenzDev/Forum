import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { thread } from "../redux/thread";
import s from "./threadpage.module.scss";
import { withRouter } from "react-router-dom";
import PostsList from "../components/PostsList";
import CreatePost from "../components/CreatePost";
import { FaUserCircle } from "react-icons/fa";

const ThreadPage = props => {
  const dispatch = useDispatch();
  const threadState = useSelector(state => state.threadReducer);
  const userState = useSelector(state => state.userReducer);
  const { user, posts, name, content, createdAt } = threadState.thread;
  const date = new Date(createdAt);
  useEffect(() => {
    dispatch(thread.findThread(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  let style = "";
  if (user && userState.user.id === user._id) style = s.border;
  else style = "";

  const RootPost = () => (
    <div className={`${s.container} ${style}`}>
      <div className={s.content}>
        <h1>{name}</h1>
        <h2>{content}</h2>
      </div>
      <div className={s.userInfo}>
        <FaUserCircle className={s.userAvatar} />
        {user && <h2>{`${user.name}  ${user.surname}`}</h2>}
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
