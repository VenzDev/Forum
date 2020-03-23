import React from "react";
import s from "./forumitem.module.scss";
import { UndrawReact } from "react-undraw";

const ForumItem = () => {
  return (
    <div className={s.forumItem}>
      <div className={s.forumDesc}>
        <UndrawReact style={{ height: "100%", width: "200px", marginLeft: "2rem" }} />
        <div>
          <h2>React</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
        </div>
      </div>
      <div className={s.forumInfo}>Threads 30</div>
      <div className={s.hover}></div>
      <div className={s.vertiaclLine}></div>
    </div>
  );
};

export default ForumItem;
