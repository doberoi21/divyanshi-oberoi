import React from "react";
import "./ProjectDetail.css";

const ProjectDetail = (props) => {
  const { name, image, description, url } = props;
  const goToFun = () => {
    window.open(url);
  };
  console.log(props);
  return (
    <>
      <div className="container-card container">
        <div className="card-container">
          <div className="card-img">
            <img src={image} className="project-img" />
          </div>
          <div className="card-content">
            <div className="card-content-title">
              <h3>{name}</h3>
            </div>
            <div className="card-content-description">
              <p>{description}</p>
            </div>
            <div className="card-content-button">
              <button className="btn" onClick={goToFun} style={{backgroundColor:'blue',color:'white',textAlign:'center',borderRadius:'5px'}}>
                Go to project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
{
  /* <div classNameName="container-card">
        <div classNameName="card-container">
          <div classNameName="card-img">
            <img src={imageUrl} />
          </div>
          <div classNameName="card-content">
            <div classNameName="card-content-title">
              <h3>{name}</h3>
            </div>
            <div classNameName="card-content-description">
              <p>{techStack}</p>
            </div>
            <div classNameName="card-content-button">
              <button classNameName="btn btn-primary btn-prop" >
                <Link to={Url} />
              </button>
            </div>
          </div>
        </div>
      </div> */
}
