import React, { useRef } from "react";
import Video from "./contact.mp4";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

const Contact = () => {
  const form = useRef(null);

  const colorChange = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hnnn75r",
        "template_ixl288f",
        form.current,
        "pRly8709uXf_v_gQs"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementsByClassName("contact-btn").style.background =
      "rgb(8, 93, 221)";
    document.getElementsByClassName("contact-btn").style.color = "white";
  };
  return (
    <>
      <div className="container contact-head">Contact Me</div>
      <div className="container contact-container">
        <div className="video-area">
          <video src={Video} autoPlay="true" className="animation" />
        </div>
        <div className="detail-form">
          <form
            ref={form}
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={colorChange}
          >
            <input
              placeholder="Enter Name"
              className="name-field field"
              name="user_name"
              type="text"
            />
            <input
              placeholder="Email"
              className="subject-field field"
              name="user_subject"
              type="email"
            />
            <textarea
              placeholder=" Enter Query .."
              className="field"
              rows={5}
              name="user_query"
            />
            <button className="contact-btn"> Submit </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
