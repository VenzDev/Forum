import React, { useState, useEffect } from "react";
import s from "./userIcons.module.scss";
import b from "../../button.module.scss";
import { FiMessageCircle } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import AvatarMenu from "../AvatarMenu";
import { Link, withRouter } from "react-router-dom";
import Messages from "../Messages";
import Notifications from "../Notifications";

const UserIcons = ({ isUser, handleLogout, location }) => {
  //ugly but working :|
  const [isAvatarmenuOpen, setAvatarmenu] = useState(false);
  const [isMessagemenuOpen, setMessagemenu] = useState(false);
  const [isNotificationmenuOpen, setNotificationmenu] = useState(false);
  const [path, setPath] = useState(location.pathname);

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
    setAvatarmenu(false);
    setMessagemenu(false);
    setNotificationmenu(!isNotificationmenuOpen);
  };

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
            style={isNotificationmenuOpen && { color: "blue" }}
            onClick={handleNotificationClick}
          />
          {isNotificationmenuOpen && <Notifications />}
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
