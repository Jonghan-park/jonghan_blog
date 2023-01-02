import React from "react";
import "./post.css";
import reactLogo from "../assets/react-logo.png";

const post = () => {
  return (
    <div className="post">
      <img className="postImg" src={reactLogo} alt="React Logo" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">React</span>
          <span className="postCat">What I learned</span>
        </div>
        <span className="postTitle">What is React?</span>
      </div>
    </div>
  );
};

export default post;
