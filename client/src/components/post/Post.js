import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/single/${post.id}`}>
        <img
          className="postImg"
          style={{ cursor: "pointer" }}
          src={post.img}
          alt="React Logo"
        />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{post.category}</span>
        </div>
        <Link to={`/single/${post.id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
      </div>
      <Link to={`/single/${post.id}`}>
        <p className="postDesc" style={{ cursor: "pointer" }}>
          {post.desc}
        </p>
      </Link>
    </div>
  );
};

export default post;
