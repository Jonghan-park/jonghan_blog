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
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odio
        molestias eveniet, saepe illum illo error culpa repudiandae magni
        ratione quos vel iste amet doloremque ab cupiditate beatae expedita
        rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quisquam odio molestias eveniet, saepe illum illo error culpa
        repudiandae magni ratione quos vel iste amet doloremque ab cupiditate
        beatae expedita rerum? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quisquam odio molestias eveniet, saepe illum illo
        error culpa repudiandae magni ratione quos vel iste amet doloremque ab
        cupiditate beatae expedita rerum?
      </p>
    </div>
  );
};

export default post;
