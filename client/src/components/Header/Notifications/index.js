import React from "react";
import s from "./notifications.module.scss";
import { Link } from "react-router-dom";

const Notifications = ({ notifications }) => {
  return (
    <div className={s.notificationsDiv}>
      {notifications.length > 0 ? (
        notifications.map(notification => (
          <Link
            className={s.notification}
            key={notification._id}
            to={`/thread/${notification.thread}`}
          >{`${notification.user.name} ${notification.user.surname} added post to your Thread`}</Link>
        ))
      ) : (
        <div className={s.notification}>No new Notifications</div>
      )}
    </div>
  );
};

export default Notifications;
