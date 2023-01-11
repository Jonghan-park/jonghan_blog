import React from "react";
import "./sidebar.css";
import profileImg from "../../assets/me.png";

const Sidebar = () => {
  const linkHandler = (type) => {
    if (type === "linkedIn") {
      window.open("https://www.linkedin.com/in/jonghan-park/");
    } else if (type === "github") {
      window.open("https://github.com/Jonghan-park");
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <img className="sidebarImg" src={profileImg} alt="Profile" />
        <p>
          <firstlatter>I</firstlatter> am a full stack developer and passionate
          about learning developing functions for web applications. I'm a
          self-taught MERN stack developer with some formal course at a college
          in Calgary.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">React</li>
          <li className="sidebarListItem">Javascript</li>
          <li className="sidebarListItem">HTML & CSS</li>
          <li className="sidebarListItem">Interview</li>
          <li className="sidebarListItem">What I learned</li>
          <li className="sidebarListItem">Life</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Social media</span>
        <div className="sidebarSocial">
          <i
            className="sidebarIcon fa-brands fa-linkedin"
            onClick={() => linkHandler("linkedIn")}
          ></i>
          <i
            className="sidebarIcon fa-brands fa-github"
            onClick={() => linkHandler("github")}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
