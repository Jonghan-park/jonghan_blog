import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./singlePost.css";
import reactLogo from "../../assets/react-logo.png";
import { useParams } from "react-router-dom";
import postsData from "../../data/posts";

const SinglePst = () => {
  const [post, setPost] = useState("");
  const { id } = useParams();

  const findPostById = () => {
    const findingPost = postsData.find((post) => post.id === parseInt(id));
    setPost(findingPost);
  };

  useEffect(() => {
    findPostById();
  }, []);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.img} alt="React Logo" className="singlePostImg" />
        <h1 className="singlePostTitle">
          {post.title}
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
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePst;
