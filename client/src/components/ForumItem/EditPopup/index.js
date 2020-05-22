import React, { useState } from "react";
import Popup from "../../Popup";
import s from "./editpopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import { forum as forumRedux } from "../../../redux/forum";
import axios from "axios";
import { useDispatch } from "react-redux";
import showToast from "../../../utils/showToast";
import { editForumEndpoint } from "../../../apiConfig";

const EditPopup = ({ forum, handleClose }) => {
  const [name, setName] = useState(forum.name);
  const [description, setDescription] = useState(forum.description);

  const dispatch = useDispatch();

  const handleName = (e) => setName(e.target.value);
  const handleDesc = (e) => setDescription(e.target.value);
  const handleSubmit = (e) => {
    axios.post(editForumEndpoint, { id: forum._id, name, description }).then((response) => {
      if (response.status === 202) {
        showToast("Forum Edited successfully");
        dispatch(forumRedux.fetchForums());
      }
    });
  };
  return (
    <Popup>
      <div className={s.popup}>
        <MdClose onClick={handleClose} className={s.closeItem} />
        <p className={s.text}>Edit Forum</p>
        <input onChange={handleName} value={name} className={s.field} type="text" />
        <textarea onChange={handleDesc} value={description} className={s.textarea} />
        <button
          onClick={handleSubmit}
          style={{ padding: "1.5rem", margin: "0 auto" }}
          className={b.button}
        >
          Edit Forum
        </button>
      </div>
    </Popup>
  );
};

export default EditPopup;
