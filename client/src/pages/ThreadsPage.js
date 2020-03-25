import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ThreadsPage = props => {
  const data = useSelector(state => state.forumReducer);
  let filteredForum = data.forums.filter(forum => forum.name === props.match.params.name);
  filteredForum = filteredForum[0];

  const linkStyle = {
    display: "block",
    textDecoration: "none",
    fontSize: "2rem",
    padding: "2rem"
  };

  return (
    <div>
      <h1>{props.match.params.name}</h1>
      {filteredForum.threads &&
        filteredForum.threads.map(thread => (
          <Link style={linkStyle} to={`/thread/${thread._id}`} key={thread._id}>
            {thread.name}
          </Link>
        ))}
    </div>
  );
};

export default ThreadsPage;
