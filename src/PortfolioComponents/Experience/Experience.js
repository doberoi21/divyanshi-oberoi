import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import Footer from "../Footer/Footer";

const Experience = (props) => {
  const experiences = props.experiences;
  return (
    <>
      <div className="container-fluid exp-container">
        <div className="my-5 " xs={12}>
          <h1 style={{ textAlign: "center" }}>Experiences</h1>
        </div>
        <div className="newExp-container">
          {experiences.map((experience) => (
            <ExperienceCard
              name={experience.title}
              organisation={experience.organisation}
              date={experience.date}
              description={experience.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
