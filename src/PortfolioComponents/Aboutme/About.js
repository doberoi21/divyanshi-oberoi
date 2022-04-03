import React from "react";
import aboutVideo from "./about-video.mp4";
import "./About.css";
import AboutSkills from "./AboutSkills";

const About = () => {
  return (
    <div className="container">
      <div className="about-head">
        <h2>About Me</h2>
      </div>
      <div className="about-info">
        <div className="about-basic-info">
          <div className="video-area-left">
            <video src={aboutVideo} autoPlay="true" className="animation" />
          </div>
          <div className="about-intro-info-right">
            <span>
              Hi, my name is Divyanshi Oberoi. <br /> Currently I am in
              pre-final year.
              <br /> Pursuing B.Tech major in Computer Science and Information
              Technology.
              <br /> 
            </span>
          </div>
        </div>
        <div className="about-edu-info">
          <AboutSkills />
        </div>
      </div>
    </div>
  );
};

export default About;
