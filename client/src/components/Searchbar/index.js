import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./search.module.scss";
import { FiSearch } from "react-icons/fi";
import SearchList from "../SearchList";
import { withRouter } from "react-router-dom";

const Searchbar = ({ openSearchbar, location }) => {
  const [value, setValue] = useState("");
  const [fetchedData, setFetchedData] = useState({ users: [], threads: [] });
  const [path, setPath] = useState(location.pathname);

  //handle url change
  // eslint-disable-next-line
  useEffect(() => {
    if (path !== location.pathname) {
      setValue("");
      setPath(location.pathname);
      setFetchedData({ users: [], threads: [] });
    }
  });

  const handleChange = e => {
    setValue(e.target.value);
    if (e.target.value.length > 2) {
      axios
        .get("http://localhost:1234/search/?data=" + e.target .value)
        .then(res => {
          setFetchedData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else setFetchedData({ users: [], threads: [] });
  };
  return (
    <div className={s.searchContainer}>
      <div className={s.test}>
        <input
          value={value}
          className={s.searchbar}
          onChange={handleChange}
          type="text"
          placeholder="Search..."
        />
        {(fetchedData.users.length > 0 || fetchedData.threads.length > 0) && (
          <SearchList data={fetchedData} />
        )}
        <FiSearch className={s.svg}></FiSearch>
      </div>
      <div
        className={s.searchIcon}
        onClick={() => {
          openSearchbar();
        }}
      >
        <FiSearch />
      </div>
    </div>
  );
};

export default withRouter(Searchbar);
