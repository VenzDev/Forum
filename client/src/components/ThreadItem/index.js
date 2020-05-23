import React, { useState } from "react";
import s from "./threadItem.module.scss";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DeletePopup from "./DeletePopup";
import CloseThreadPopup from "./CloseThreadPopup";
const ThreadItem = ({ thread, isAdmin }) => {
  const date = new Date(thread.createdAt);
  let postDate = null;
  if (thread.posts.length > 0) postDate = new Date(thread.posts[thread.posts.length - 1].createdAt);
  else postDate = date;

  const words = postDate.toTimeString().split(" ");

  const [isDeletePopup, setDeletePopup] = useState(false);
  const [isCloseThreadPopup, setCloseThreadPopup] = useState(false);

  const handleDeleteOpen = () => setDeletePopup(true);
  const handleDeleteClose = () => setDeletePopup(false);

  const handleCloseThreadOpen = () => setCloseThreadPopup(true);
  const handleCloseThreadClose = () => setCloseThreadPopup(false);

  return (
    <>
      {isDeletePopup && <DeletePopup id={thread._id} handleClick={handleDeleteClose} />}
      {isCloseThreadPopup && (
        <CloseThreadPopup id={thread._id} handleClick={handleCloseThreadClose} />
      )}
      <div className={s.container}>
        <Link className={s.threadItem} to={`/thread/${thread._id}`}>
          <div className={s.threadInfo}>
            <h2>{thread.isClosed ? thread.name + " (Closed)" : thread.name}</h2>
            <p>{`Created at: ${date.toLocaleString()}`}</p>
          </div>
          <div className={s.additional}>
            <div className={s.additionalDesc}>
              <h3>Activity</h3>
              <h3>Posts</h3>
              <h3 className={s.lastH3}>Author</h3>
            </div>
            <div className={s.additionalStat}>
              <h3>{words[0]}</h3>
              <h3>{thread.posts.length}</h3>
              <h3 className={s.lastH3}>{`${thread.user.name} ${thread.user.surname}`}</h3>
            </div>
          </div>
        </Link>
        {isAdmin && (
          <>
            <div className={s.deleteIcon}>
              <FaTrash onClick={handleDeleteOpen} />
            </div>
            <div className={s.closeIcon}>
              <AiOutlineCloseCircle onClick={handleCloseThreadOpen} />
            </div>
          </>
        )}
        <div className={s.line}></div>
      </div>
    </>
  );
};

export default ThreadItem;
