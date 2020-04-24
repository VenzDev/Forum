import React from "react";
import Popup from "../Popup";
import s from "./deletepopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import showToast from "../../../utils/showToast";
import { thread } from "../../../redux/thread";
import { deletePostEndpoint } from "../../../apiConfig";

const DeletePopup = ({ handleClick, id, threadId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios.post(deletePostEndpoint, { id }).then(() => {
      dispatch(thread.findThread(threadId));
      handleClick();
      showToast("Post deleted!");
    });
  };

  return (
    <Popup>
      <div className={s.deletePopup}>
        <MdClose onClick={handleClick} className={s.closeItem} />
        Are you sure you want to delete post?
        <button
          onClick={handleDelete}
          style={{ margin: "4rem auto", padding: "1rem" }}
          className={b.button}
        >
          Delete
        </button>
      </div>
    </Popup>
  );
};
 
export default DeletePopup;
