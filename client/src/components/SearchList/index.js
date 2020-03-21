import React from "react";
import s from "./searchlist.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

const SearchList = ({ data }) => {
  return (
    <ul className={s.searchlist}>
      {data.users.map((user, key) => (
        <li className={s.listItem} key={key}>
          {user.name}
          <FaUserAlt className={s.listicon} />
        </li>
      ))}
      {data.threads.map((thread, key) => (
        <li className={s.listItem} key={key}>
          {thread.name}
          <TiMessages className={s.listicon} />
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
