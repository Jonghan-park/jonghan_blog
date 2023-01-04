import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import profilePic from "../../assets/bio-photo.jpg";

const Setting = () => {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Pricture</label>
          <div className="settingsPP">
            <img src={profilePic} alt="Profile" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Jonghan" />
          <label>Email</label>
          <input type="email" placeholder="jonghan@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
