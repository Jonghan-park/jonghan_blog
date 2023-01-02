import React from "react";
import "./header.css";
import headerImg from "../../assets/header-image.png";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Software developer</span>
        <span className="headerTitleLg">Jonghan's Blog</span>
      </div>
      <img className="headerImg" src={headerImg} alt="" />
    </div>
  );
}

export default Header;
