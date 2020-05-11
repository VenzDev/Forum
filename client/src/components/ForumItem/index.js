import React, { useState } from "react";
import s from "./forumitem.module.scss";
import { UndrawReact } from "react-undraw";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import EditPopup from "./EditPopup";

const ForumItem = ({ forum, admin }) => {
  const [isPopup, setPopup] = useState(false);

  const handlePopupOpen = () => setPopup(true);
  const handleDeleteClick = () => {
    console.log("xd");
  };
  const handlePopupClose = () => setPopup(false);
  return (
    <>
      {isPopup && <EditPopup handleClose={handlePopupClose} forum={forum} />}
      <div className={s.forumItem}>
        <Link to={`/forum/${forum.name}`} className={s.forumDesc}>
          <UndrawReact style={{ height: "100%", width: "200px", marginLeft: "2rem" }} />
          <div>
            <h2>{forum.name}</h2>
            <p>{forum.description}</p>
          </div>
        </Link>
        <Link
          to={`/forum/${forum.name}`}
          className={s.forumInfo}
        >{`Threads ${forum.threads.length}`}</Link>
        <div className={s.hover}></div>
        <div className={s.vertiaclLine}></div>
        {admin && (
          <p className={s.editForum}>
            <FaEdit onClick={handlePopupOpen} className={s.editIcon} />
            <FaTrash
              style={{ marginLeft: "10px" }}
              onClick={handleDeleteClick}
              className={s.deleteIcon}
            />
          </p>
        )}
      </div>
    </>
  );
};

export default ForumItem;
