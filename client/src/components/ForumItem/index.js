import React, { useState } from "react";
import s from "./forumitem.module.scss";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import EditPopup from "./EditPopup";
import DeletePopup from "./DeletePopup";
import ReactUndraw from "../../svg/undraw_react.svg";

const ForumItem = ({ forum, admin }) => {
  const [isEditPopup, setEditPopup] = useState(false);
  const [isDeletePopup, setDeletePopup] = useState(false);

  const handlePopupOpen = () => setEditPopup(true);
  const handleDeleteOpen = () => setDeletePopup(true);
  const handleDeleteClose = () => setDeletePopup(false);
  const handlePopupClose = () => setEditPopup(false);
  return (
    <>
      {isEditPopup && <EditPopup handleClose={handlePopupClose} forum={forum} />}
      {isDeletePopup && <DeletePopup handleClose={handleDeleteClose} forum={forum} />}
      <div className={s.forumItem}>
        <Link to={`/forum/${forum.name}`} className={s.forumDesc}>
          <img src={ReactUndraw} style={{ height: "100%", width: "200px", marginLeft: "2rem" }} />
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
              onClick={handleDeleteOpen}
              className={s.deleteIcon}
            />
          </p>
        )}
      </div>
    </>
  );
};

export default ForumItem;
