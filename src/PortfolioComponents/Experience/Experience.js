import React from "react";
import ExperienceCard from "./ExperienceCard";
import './Experience.css';

const Experience = (props) => {
  const experiences = props.experiences;
  return (
    <>
      <div className="container-fluid">
        <div className="my-5">
          <h1 style={{ textAlign: "center" }}>Experiences</h1>
        </div>
        <div className="new-container" >
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
    </>
  );
};

export default Experience;
