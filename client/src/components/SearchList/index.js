import React from "react";
import s from "./searchlist.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

const SearchList = ({ data }) => {
  return (
    <ul className={s.searchlist}>
      {data.users.map((user, key) => (
        <li className={s.listItem} key={key}>
          <Link className={s.linkStyle} to={`/user/${user._id}`}>
            {user.name + " " + user.surname}
          </Link>
          <FaUserAlt className={s.listicon} />
        </li>
      ))}
      {data.threads.map((thread, key) => (
        <li className={s.listItem} key={key}>
          <Link to={`/thread/${thread._id}`}>{thread.name}</Link>
          <TiMessages className={s.listicon} />
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
