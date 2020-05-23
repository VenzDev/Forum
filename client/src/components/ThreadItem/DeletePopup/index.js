import React from "react";
import Popup from "../Popup";
import s from "./deletepopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import showToast from "../../../utils/showToast";
import { deleteThreadEndpoint } from "../../../apiConfig";
import { withRouter } from "react-router-dom";

const DeletePopup = ({ handleClick, id, history }) => {
  const handleDelete = () => {
    axios.get(deleteThreadEndpoint + id).then((res) => {
      if (res.status === 202) {
        showToast("Thread Deleted!");
        history.push("/");
      }
    });
  };
  return (
    <Popup>
      <div className={s.deletePopup}>
        <MdClose onClick={handleClick} className={s.closeItem} />
        Are you sure you want to delete Thread (with posts)?
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

export default withRouter(DeletePopup);
