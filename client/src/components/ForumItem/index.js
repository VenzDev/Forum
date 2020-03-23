import React from "react";
import s from "./forumitem.module.scss";
import { UndrawReact } from "react-undraw";
import { Link } from "react-router-dom";

const ForumItem = ({ forum }) => {
  return (
    <Link to={`/forum/${forum.name}`} className={s.forumItem}>
      <div className={s.forumDesc}>
        <UndrawReact style={{ height: "100%", width: "200px", marginLeft: "2rem" }} />
        <div>
          <h2>{forum.name}</h2>
          <p>{forum.description}</p>
        </div>
      </div>
      <div className={s.forumInfo}>Threads 30</div>
      <div className={s.hover}></div>
      <div className={s.vertiaclLine}></div>
    </Link>
  );
};

export default ForumItem;
