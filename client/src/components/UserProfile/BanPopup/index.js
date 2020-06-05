import React from "react";
import Popup from "../../Popup";
import s from "./banPopup.module.scss";
import b from "../../button.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import showToast from "../../../utils/showToast";
import { banUserEndpoint } from "../../../apiConfig";
import { withRouter } from "react-router-dom";
import { user } from "../../../redux/user";

const BanPopup = ({ handlePopup, name, id, isBaned, history }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios.post(banUserEndpoint, { userId: id, unBan: isBaned, banTime: null }).then((res) => {
      if (res.status === 200) {
        if (isBaned) showToast("User successfully Unbanned");
        else showToast("User successfully banned");
        dispatch(user.fetchProfil(id));
      }
    });
  };

  return isBaned ? (
    <Popup>
      <div className={s.banPopup}>
        <MdClose onClick={() => handlePopup(false)} className={s.closeItem} />
        {"Are you sure you want to Unban " + name + "?"}
        <button
          onClick={handleSubmit}
          style={{ margin: "4rem auto", padding: "1rem" }}
          className={b.button}
        >
          Unban User
        </button>
      </div>
    </Popup>
  ) : (
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
        <button
          onClick={handleSubmit}
          style={{ margin: "4rem auto", padding: "1rem" }}
          className={b.button}
        >
          Ban User
        </button>
      </div>
    </Popup>
  );
};

export default withRouter(BanPopup);
