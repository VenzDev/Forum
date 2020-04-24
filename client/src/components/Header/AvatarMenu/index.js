import React from "react";
import s from "./avatarmenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import b from "../../button.module.scss";
import { user } from "../../../redux/user";
import { Link, withRouter } from "react-router-dom";

const AvatarMenu = (props) => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(user.logout());
    props.history.push("/");
  };

  return (
    <div className={s.avatarMenu}>
      <h1>{`${userData.user.name} ${userData.user.surname}`}</h1>
      <Link className={s.profileLink} to={`/user/${userData.user.id}`}>
        Profile
      </Link>
      <Link className={s.profileLink} to={`/yourThreads`}>
        Your Threads
      </Link>
      <button
        style={{ margin: "10px auto", padding: "1rem" }}
        onClick={handleLogout}
        className={b.button}
      >
        Logout
      </button>
    </div>
  );
};

export default withRouter(AvatarMenu);
