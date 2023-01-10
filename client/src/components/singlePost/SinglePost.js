import React from "react";
import ReactMarkdown from "react-markdown";
import "./singlePost.css";
import reactLogo from "../../assets/react-logo.png";

const SinglePst = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={reactLogo} alt="React Logo" className="singlePostImg" />
        <h1 className="singlePostTitle">
          What Is React?
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Jonghan</b>
          </span>
        </div>
        {/* <ReactMarkdown>## Hello</ReactMarkdown> */}
        <p className="singlePostDesc">
          React is a JavaScript library for building user interfaces. React
          makes building complex, interactive and reactive user interfaces
          simpler. React is all about components
        </p>
      </div>
    </div>
  );
};

export default SinglePst;
