import React from "react";
import { useSelector } from "react-redux";
import ThreadsList from "../components/ThreadsList";

const ThreadsPage = (props) => {
  const data = useSelector((state) => state.forumReducer);
  let filteredForum = data.forums.filter((forum) => forum.name === props.match.params.name);
  filteredForum = filteredForum[0];

  const h1Style = {
    margin: "0",
    paddingTop: "5rem",
    paddingLeft: "40rem",
    color: "blue",
    fontSize: "3rem",
  };

  return (
    <div style={{ paddingBottom: "4rem" }}>
      <h1 style={h1Style}>{props.match.params.name}</h1>
      {filteredForum && <ThreadsList threads={filteredForum.threads} />}
    </div>
  );
};

export default ThreadsPage;
