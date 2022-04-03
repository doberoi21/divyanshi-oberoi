import React from "react";
import ProjectDetail from "./ProjectDetail";
import "./Project.css";
import Footer from "../Footer/Footer";

const Project = (props) => {
  const projects = props.projects;
  // console.log(props);
  return (
    <>
      <div className="container-fluid project-container">
        <div className="my-5">
          <h1 style={{ textAlign: "center" }}>Projects</h1>
        </div>
        <div className="new-container">
          {projects.map((project) => (
            <ProjectDetail
              name={project.name}
              image={project.imageurl}
              description={project.techStack}
              url={project.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;

{
  /* <div className="container">
        <div className="my-5">
          <h1 style={{ textAlign: "center" }}>Projects</h1>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          className="new-container"
        >
          {projects.map((projectS) => (
            <ProjectDetail
              name={projectS.name}
              image={projectS.ImageUrl}
              description={projectS.techStack}
              url={projectS.Url}
            />
          ))}
        </div>
      </div> */
}
