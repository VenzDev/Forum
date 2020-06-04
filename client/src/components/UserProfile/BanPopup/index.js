import React from "react";
import Popup from "../../Popup";
import s from "./banPopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";

const BanPopup = ({ handlePopup, name }) => {
  return (
    <Popup>
      <div className={s.banPopup}>
        <MdClose onClick={() => handlePopup(false)} className={s.closeItem} />
        {"Are you sure you want to ban " + name + "?"}
        <p>Ban User for:</p>
        <select className={s.dropdown}>
          <option>1 day</option>
          <option>7 days</option>
          <option>30 days</option>
        </select>
        <button style={{ margin: "4rem auto", padding: "1rem" }} className={b.button}>
          Ban User
        </button>
      </div>
    </Popup>
  );
};

export default BanPopup;
