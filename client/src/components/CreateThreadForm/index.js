import React from "react";
import s from "./createthread.module.scss";
import b from "../button.module.scss";
import { useSelector } from "react-redux";

const CreateThreadForm = () => {
  const { forums } = useSelector(state => state.forumReducer);

  const DropdownMenu = () => (
    <select className={s.dropdown} id="cars">
      <option default disabled>
        Select forum
      </option>
      {forums.map(forum => (
        <option value={forum.name} key={forum._id}>
          {forum.name}
        </option>
      ))}
    </select>
  );

  return (
    <div className={s.container}>
      <h2>Create thread</h2>
      <DropdownMenu />
      <p>Thread topic</p>
      <input className={s.topicInput} type="text" />
      <p>Content</p>
      <textarea className={s.topicArea}></textarea>
      <button style={{ margin: "1.5rem auto", padding: "1rem" }} className={b.button}>
        Create
      </button>
    </div>
  );
};

export default CreateThreadForm;
