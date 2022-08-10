import React from "react";
import Profile from "./Profile";
import "./Home.css";
import HomeFooter from "./HomeFooter/HomeFooter";

import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Profile />
        <HomeFooter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
