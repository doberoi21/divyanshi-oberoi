import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  const { name, organisation, date, description } = props;
  return (
    <div className="container">
      <div className="card__container">
        <div className="card">
          <div className="card__content">
            <h3 className="card__header">{name}</h3>
            <p className="card__info">{organisation}</p>
            <p className="card__info">{date}</p>
            <p className="card__info">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
