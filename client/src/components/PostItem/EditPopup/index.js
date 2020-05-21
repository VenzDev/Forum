import React, { useState } from "react";
import Popup from "../Popup";
import s from "./editpopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import showToast from "../../../utils/showToast";
import { editPostEndpoint } from "../../../apiConfig";
import { useDispatch } from "react-redux";
import { thread } from "../../../redux/thread";
import RichEditor from "../../RichEditor";

const EditPopup = ({ handleClick, text, threadId, id, isAdmin }) => {
  const [value, setValue] = useState(text);
  const dispatch = useDispatch();
  const handleRichEditor = (rawData) => setValue(JSON.stringify(rawData));
  const handleSubmit = () => {
    axios.post(editPostEndpoint, { content: value, id, isAdmin }).then(() => {
      dispatch(thread.findThread(threadId));
      showToast("Post Edited!");
    });
  };
  return (
    <Popup>
      <div className={s.editPopup}>
        <MdClose onClick={handleClick} className={s.closeItem} />
        <p>Edit post</p>
        <RichEditor content={text} handleRichEditor={handleRichEditor} />
        <button
          onClick={handleSubmit}
          style={{ padding: "1rem", margin: "2rem auto" }}
          className={b.button}
        >
          Edit!
        </button>
      </div>
    </Popup>
  );
};

export default EditPopup;
