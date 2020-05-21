import React from "react";
import Popup from "../Popup";
import s from "./closethread.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import showToast from "../../../utils/showToast";
import { thread } from "../../../redux/thread";
import { deletePostEndpoint } from "../../../apiConfig";

const CloseThreadPopup = ({ handleClick, id, threadId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {};
  return (
    <Popup>
      <div className={s.closeThread}>
        <MdClose onClick={handleClick} className={s.closeItem} />
        Are you sure you want to Close Thread?
        <button
          onClick={handleDelete}
          style={{ margin: "4rem auto", padding: "1rem" }}
          className={b.button}
        >
          Close
        </button>
      </div>
    </Popup>
  );
};

export default CloseThreadPopup;
