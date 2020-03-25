import React from "react";

const ThreadsPage = props => {
  return (
    <div>
      <h1>{props.match.params.name}</h1>
    </div>
  );
};

export default ThreadsPage;
