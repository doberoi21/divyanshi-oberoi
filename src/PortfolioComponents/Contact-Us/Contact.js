import React from "react";
import Video from "./contact.mp4";
import "./Contact.css";

const Contact = () => {
  const colorChange = () => {
    document.getElementsByClassName("contact-btn").style.background =
      "rgb(8, 93, 221)";
    document.getElementsByClassName("contact-btn").style.color = "white";
  };
  return (
    <>
     <div className="container contact-head" >Contact Me</div>
      <div className="container contact-container">
       
        <div className="video-area">
          <video src={Video} autoPlay="true" className="animation" />
        </div>
        <div className="detail-form">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input placeholder="Enter Name" className="name-field field" />
            <input placeholder="Subject" className="subject-field field" />
            <textarea
              placeholder=" Enter Query .."
              className="field"
              rows={5}
            />
            <button className="contact-btn" onSubmit={colorChange}>
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
