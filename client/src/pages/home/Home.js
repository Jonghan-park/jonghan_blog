import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
