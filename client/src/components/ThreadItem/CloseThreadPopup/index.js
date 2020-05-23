import React from "react";
import Popup from "../Popup";
import s from "./closethread.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import showToast from "../../../utils/showToast";
import { closeThreadEndpoint } from "../../../apiConfig";
import { withRouter } from "react-router-dom";

const CloseThreadPopup = ({ handleClick, id, history }) => {
  console.log(id);
  const handleClose = () => {
    axios.get(closeThreadEndpoint + id).then((res) => {
      if (res.status === 202) {
        showToast("Thread Closed!");
        history.push("/");
      }
    });
  };
  return (
    <Popup>
      <div className={s.closeThread}>
        <MdClose onClick={handleClick} className={s.closeItem} />
        Are you sure you want to Close Thread?
        <button
          onClick={handleClose}
          style={{ margin: "4rem auto", padding: "1rem" }}
          className={b.button}
        >
          Close
        </button>
      </div>
    </Popup>
  );
};

export default withRouter(CloseThreadPopup);
