import React from "react";
import HomeFooter from "./HomeFooter/HomeFooter";
import Profile from "./Profile";
import "./Home.css";
import About from "../Aboutme/About";
import Project from "../Projects/Project";
import Contact from "../Contact-Us/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Profile /> 
        <Footer />
      </div>
    </>
  );
};

export default Home;
