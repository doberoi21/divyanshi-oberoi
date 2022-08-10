import React from "react";
import { ImHtmlFive } from "react-icons/im";
import {
  SiCss3,
  SiBootstrap,
  SiReact,
  SiJavascript,
  SiFigma,
  SiPython,
  SiMysql,
} from "react-icons/si";
import "./AboutSkill.css";

const AboutSkills = () => {
  return (
    <>
      <div className="container skills-section">
        <h2>Skills & Tools</h2>

        <div className="skills">
          <div className="Skills-left">
            <div className="skill-name">
              <ImHtmlFive /> HTML5
            </div>
            <div className="skill-name">
              <SiCss3 /> CSS
            </div>
            <div className="skill-name">
              <SiBootstrap /> Bootstrap
            </div>
            <div className="skill-name">
              <SiReact /> React JS
            </div>
            <div className="skill-name">
              <SiReact /> React Native
            </div>
          </div>

          <div className="Skills-right">
            <div className="skill-name">
              <SiJavascript /> Javascript
            </div>
            <div className="skill-name">
           Data Structures
            </div>
            <div className="skill-name">
              <SiFigma /> Figma
            </div>
            <div className="skill-name">
              <SiMysql /> Mysql
            </div>
            <div className="skill-name">C / C++ Programming</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSkills;
