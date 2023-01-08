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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          maiores recusandae! Aut ipsam, quae expedita facere nihil voluptate
          molestiae maiores incidunt quam omnis minus, ut voluptates officiis
          mollitia, autem blanditiis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Repellendus, maiores recusandae! Aut ipsam, quae
          expedita facere nihil voluptate molestiae maiores incidunt quam omnis
          minus, ut voluptates officiis mollitia, autem blanditiis.
        </p>
      </div>
    </div>
  );
};

export default SinglePst;
