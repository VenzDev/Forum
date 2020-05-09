import React, { useState, useEffect } from "react";
import s from "./userIcons.module.scss";
import b from "../../button.module.scss";
import { FiMessageCircle } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCrown } from "react-icons/ai";
import AvatarMenu from "../AvatarMenu";
import { Link, withRouter } from "react-router-dom";
import Messages from "../Messages";
import Notifications from "../Notifications";
import { useSelector } from "react-redux";
import axios from "axios";
import { deleteNotificationsEndpoint } from "../../../apiConfig";

const UserIcons = ({ isUser, handleLogout, location }) => {
  //ugly but working :|
  const [isAvatarmenuOpen, setAvatarmenu] = useState(false);
  const [isMessagemenuOpen, setMessagemenu] = useState(false);
  const [isNotificationmenuOpen, setNotificationmenu] = useState(false);
  const [isNotificationmenuChecked, setNotificationmenuChecked] = useState(false);
  const [path, setPath] = useState(location.pathname);
  const userState = useSelector((state) => state.userReducer);
  const token = localStorage.getItem("token");

  //Hide menus after url change!

  // eslint-disable-next-line
  useEffect(() => {
    if (location.pathname !== path) {
      setMessagemenu(false);
      setNotificationmenu(false);
      setAvatarmenu(false);
      setPath(location.pathname);
    }
  });

  const handleAvatarClick = () => {
    setMessagemenu(false);
    setNotificationmenu(false);
    setAvatarmenu(!isAvatarmenuOpen);
  };
  const handleMessageClick = () => {
    setAvatarmenu(false);
    setNotificationmenu(false);
    setMessagemenu(!isMessagemenuOpen);
  };

  const handleNotificationClick = () => {
    axios
      .get(deleteNotificationsEndpoint, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setNotificationmenuChecked(true);
      });
    setAvatarmenu(false);
    setMessagemenu(false);
    setNotificationmenu(!isNotificationmenuOpen);
  };

  //TODO (need to change on something better )
  let isNotification = false;
  if (Object.keys(userState.user).length > 0)
    if (userState.user.notifications.length > 0 && isNotificationmenuChecked === false)
      isNotification = true;
    else isNotification = false;
  //
  console.log(isNotificationmenuChecked);
  if (isUser) {
    return (
      <>
        <div className={s.icons}>
          <FiMessageCircle
            className={s.messageIcon}
            style={isMessagemenuOpen && { color: "blue" }}
            onClick={handleMessageClick}
          />
          {isMessagemenuOpen && <Messages />}
          <MdNotificationsNone
            className={s.notificationIcon}
            style={(isNotificationmenuOpen || isNotification) && { color: "blue" }}
            onClick={handleNotificationClick}
          />
          {isNotificationmenuOpen && <Notifications notifications={userState.user.notifications} />}
        </div>
        <div className={s.button}>
          <Link to={"/createThread"} style={{ width: "16rem" }} className={b.button}>
            Create Thread!
          </Link>
        </div>
        <div className={s.avatar}>
          <FaUserAlt
            className={isAvatarmenuOpen ? `${s.avatarIcon} ${s.active}` : s.avatarIcon}
            onClick={handleAvatarClick}
          />
          {isAvatarmenuOpen && <AvatarMenu />}
        </div>
        {userState.user.isAdmin && (
          <div className={s.admin}>
            {"admin"}
            <AiOutlineCrown style={{ marginLeft: "5px", fontSize: "25px" }} />
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className={s.button}>
        <Link className={b.button} to="/login">
          Try now!
        </Link>
      </div>
    );
  }
};

export default withRouter(UserIcons);
