import React from "react";
import Popup from "../../Popup";
import s from "./deletepopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { forum as forumRedux } from "../../../redux/forum";
import { useDispatch } from "react-redux";
import showToast from "../../../utils/showToast";
import { deleteForumEndpoint } from "../../../apiConfig";

const DeletePopup = ({ handleClose, forum }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios.get(deleteForumEndpoint + forum._id).then((res) => {
      if (res.status === 202) {
        showToast("Forum deleted successfully");
        dispatch(forumRedux.fetchForums());
      }
    });
  };
  return (
    <Popup>
      <div className={s.popup}>
        <MdClose onClick={handleClose} className={s.closeItem} />
        <p style={{ marginBottom: "3rem" }}>Do you want to delete Forum?</p>
        <button
          onClick={handleSubmit}
          style={{ padding: "1.5rem", margin: "0 auto" }}
          className={b.button}
        >
          Delete
        </button>
      </div>
    </Popup>
  );
};

export default DeletePopup;
