import React from "react";
import "./post.css";

const post = ({ post }) => {
  const idHandler = (id) => {};
  return (
    <div className="post">
      <img
        className="postImg"
        onClick={() => idHandler(post.id)}
        style={{ cursor: "pointer" }}
        src={post.img}
        alt="React Logo"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.category}</span>
        </div>
        <span className="postTitle" onClick={() => idHandler(post.id)}>
          {post.title}
        </span>
        <hr />
      </div>
      <p
        className="postDesc"
        onClick={() => idHandler(post.id)}
        style={{ cursor: "pointer" }}
      >
        {post.desc}
      </p>
    </div>
  );
};

export default post;
