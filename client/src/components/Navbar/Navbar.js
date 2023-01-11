import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/bio-photo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkHandler = (type) => {
    if (type === "linkedIn") {
      window.open("https://www.linkedin.com/in/jonghan-park/");
    } else if (type === "github") {
      window.open("https://github.com/Jonghan-park");
    }
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/">
          <img className="topLogo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/setting">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src={profileImg} alt="Profile pic" />

        <i
          className="topIcon fa-brands fa-linkedin"
          onClick={() => linkHandler("linkedIn")}
        ></i>

        <i
          className="topIcon fa-brands fa-github"
          onClick={() => linkHandler("github")}
        ></i>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
