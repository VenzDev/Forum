import React, { useState } from "react";
import ForumItem from "../ForumItem";
import s from "./forumlist.module.scss";
import { useSelector } from "react-redux";
import b from "../button.module.scss";
import CreatePopup from "./CreatePopup";

const ForumList = ({ forums }) => {
  const userState = useSelector((state) => state.userReducer);
  const [isPopup, setPopup] = useState(false);
  const handleOpen = () => setPopup(true);
  const handleClose = () => setPopup(false);
  return (
    <>
      {isPopup && <CreatePopup handleClose={handleClose} />}
      <div className={s.container}>
        {userState.user.isAdmin && (
          <button
            onClick={handleOpen}
            style={{ padding: "1.5rem", width: "230px" }}
            className={b.button}
          >
            Create new forum
          </button>
        )}
        {forums.map((forum) => (
          <ForumItem admin={userState.user.isAdmin} forum={forum} key={forum._id} />
        ))}
      </div>
    </>
  );
};

export default ForumList;
