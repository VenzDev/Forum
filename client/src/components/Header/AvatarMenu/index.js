import React from "react";
import s from "./avatarmenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import b from "../../button.module.scss";
import { user } from "../../../redux/user";

const AvatarMenu = () => {
  const userData = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(user.logout());
  };

  return (
    <div className={s.avatarMenu}>
      <h1>{`${userData.user.name} ${userData.user.surname}`}</h1>
      <p>Profile</p>
      <button
        style={{ margin: "0 auto", padding: "1rem" }}
        onClick={handleLogout}
        className={b.button}
      >
        Logout
      </button>
    </div>
  );
};

export default AvatarMenu;
