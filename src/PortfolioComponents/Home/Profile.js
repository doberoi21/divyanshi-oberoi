import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/divyanshi-oberoi-a006331aa/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/doberoi21">
                <i className="fa fa-github-square"></i>
              </a>
              {/* <a><i className="fa fa-instagram"></i></a> */}
              <a href="https://twitter.com/DivyanshiOberoi">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCQDymKHbrQaVm6zQkEhJsKg">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm{" "}
              <span className="highlighted-text">Divyanshi Oberoi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  className="roles"
                  loops={Infinity}
                  steps={[
                    "React Js Developer 💠 ",
                    1000,
                    "UI/ UX Designer 👩🏻‍🎨 ",
                    1000,
                    "Software Engineer 🖥 ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                My objective is to work pragmatically in an organization and to
                obtain professional and financial heights, both for the
                organization and self, through skill and knowledge and learn
                from presents. <br /> I'm also Social Work Volunteer .
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Link to='/contact-me'>
              <button className="btn primary-btn"> Hire Me </button>
            </Link>

            <a
              href="https://drive.google.com/file/d/1Vi7f-V3Fa19ZExy17ne3wEoyXOACIElK/view?usp=sharing"
              download="Divyanshi DivResume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"> </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
