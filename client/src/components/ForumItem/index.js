import React from "react";
import s from "./forumitem.module.scss";
import { UndrawReact } from "react-undraw";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

const ForumItem = ({ forum, admin }) => {
  const handleEditClick = () => {
    console.log("xd");
  };
  const handleDeleteClick = () => {
    console.log("xd");
  };
  return (
    <>
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
            <FaEdit onClick={handleEditClick} className={s.editIcon} />
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
