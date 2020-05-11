import React, { useState } from "react";
import Popup from "../../Popup";
import s from "./createpopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";

const CreatePopup = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleDesc = (e) => setDescription(e.target.value);
  const handleSubmit = (e) => {
    console.log("todo");
  };
  return (
    <Popup>
      <div className={s.popup}>
        <MdClose onClick={handleClose} className={s.closeItem} />
        <p className={s.headText}>Create Forum</p>
        <p className={s.text}>Forum Name</p>
        <input onChange={handleName} value={name} className={s.field} type="text" />
        <p className={s.text}>Forum Description</p>
        <textarea onChange={handleDesc} value={description} className={s.textarea} />
        <button
          onClick={handleSubmit}
          style={{ padding: "1.5rem", margin: "0 auto" }}
          className={b.button}
        >
          Create Forum
        </button>
      </div>
    </Popup>
  );
};

export default CreatePopup;
