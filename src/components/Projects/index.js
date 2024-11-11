import React from "react";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

const Projects = () => {
  return (
    <div>
    <section className="project-container">
      <h2 className="projectTitle">My Projects</h2>
      <p className="subProject">Everybody has to start somewhere right</p>
      <div className="projects-anjay">
        <div className="project-item">
          <img className="project" src={project1} alt="project1" />
          <div className="project-name">Web Design</div>
        </div>
        <div className="project-item">
          <img className="project" src={project2} alt="project2" />
          <div className="project-name">Computer Graphic</div>
        </div>
        <div className="project-item">
          <img className="project" src={project3} alt="project3" />
          <div className="project-name">Library SAD</div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Projects;
