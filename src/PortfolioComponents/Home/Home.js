import React from "react";
import HomeFooter from "./HomeFooter/HomeFooter";
import Profile from "./Profile";
import "./Home.css";
import About from "../Aboutme/About";
import Project from "../Projects/Project";
import Contact from "../Contact-Us/Contact";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Profile /> 
        <HomeFooter /> 
      </div>
    </>
  );
};

export default Home;
