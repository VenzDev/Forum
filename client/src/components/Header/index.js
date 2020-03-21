import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./header.module.scss";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Searchbar from "../Searchbar";
import { withRouter } from "react-router-dom";
import { user } from "../../redux/user";

import UserIcons from "./UserIcons";

//Variable for testing header items
let isUser = false;

const handleOpenSearchbar = () => {
  console.log("clicked");
};

const Header = props => {
  const dispatch = useDispatch();
  const storeUser = useSelector(store => store.userReducer);
  (Object.keys(storeUser.user).length && localStorage.getItem("token")) !== 0
    ? (isUser = true)
    : (isUser = false);

  const handleLogout = () => {
    dispatch(user.logout());
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <header className={s.header}>
      <div className={s.fixed}>
        <div className={s.container}>
          <Link className={s.logo} to="/">
            <FaCalendarAlt />
            <p>Topik</p>
          </Link>
          <Searchbar openSearchbar={handleOpenSearchbar} />
          <UserIcons isUser={isUser} handleLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
