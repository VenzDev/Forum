import React from "react";
import PostItem from "../PostItem";

const PostsList = ({ posts }) => {
  return posts.map(post => <PostItem key={post._id} post={post} />);
};

export default PostsList;
