import React, { useState } from "react";
import s from "./userProfile.module.scss";
import { FaUser } from "react-icons/fa";
import b from "../button.module.scss";
import BanPopup from "./BanPopup";

const UserProfile = ({ user, isAdmin }) => {
  const { name, surname, createdAt, isBaned, _id } = user;
  const [isBanPopup, showBanPopup] = useState(false);
  const data = new Date(createdAt);

  const handlePopup = (val) => showBanPopup(val);

  return (
    <>
      {isBanPopup && (
        <BanPopup name={name} isBaned={isBaned} id={_id} handlePopup={(val) => handlePopup(val)} />
      )}
      <div className={s.container}>
        <div className={s.circle}>
          <FaUser className={s.userLogo} />
        </div>
        <div className={s.userInfo}>
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Surname: <span>{surname}</span>
          </p>
          <p>
            Member from: <span>{data.toLocaleString()}</span>
          </p>
          {isBaned && <p style={{ color: "red" }}>User banned by Admin!</p>}
        </div>
        {isAdmin && (
          <button
            onClick={() => handlePopup(true)}
            style={{
              position: "absolute",
              padding: "1rem",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className={b.button}
          >
            Ban User
          </button>
        )}
      </div>
    </>
  );
};

export default UserProfile;
