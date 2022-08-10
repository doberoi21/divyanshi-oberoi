import React from "react";
import aboutVideo from "./about-video.mp4";
import "./About.css";
import AboutSkills from "./AboutSkills";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <>
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
                Hi, my name is Divyanshi Oberoi. <br /> Currently I am in final
                year.
                <br /> Pursuing B.Tech major in Computer Science Engineering.
                <br />
                Being a technology-enthusiast, I love exploring new technologies
                and leveraging them to solve real-life problems. I'm driven by
                the will to create an impact and encourage diversity and
                inclusion in communities.
              </span>
            </div>
          </div>
          <div className="about-edu-info">
            <AboutSkills />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
