import React from "react";
import "./posts.css";
import Post from "../post/Post";
import postsData from "../../data/posts";

const posts = () => {
  return (
    <div className="posts">
      {postsData.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default posts;
