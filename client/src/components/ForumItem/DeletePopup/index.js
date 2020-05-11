import React from "react";
import Popup from "../../Popup";
import s from "./deletepopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";

const DeletePopup = ({ handleClose }) => {
  return (
    <Popup>
      <div className={s.popup}>
        <MdClose onClick={handleClose} className={s.closeItem} />
        <p style={{ marginBottom: "3rem" }}>Do you want to delete Forum?</p>
        <button style={{ padding: "1.5rem", margin: "0 auto" }} className={b.button}>
          Delete
        </button>
      </div>
    </Popup>
  );
};

export default DeletePopup;
