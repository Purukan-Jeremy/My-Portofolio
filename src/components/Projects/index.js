import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import project2 from "../../assets/images/project2.png";

const Projects = () => {
  const [project, setProject] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ProjectRef = ref(db, "Project");
    onValue(ProjectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });
  }, []);
  return (
    <div>
    <section className="project-container">
      <h2 className="projectTitle">{project.Title}</h2>
      <p className="subProject">Everybody has to start somewhere right</p>
      <div className="projects-anjay">
        <div className="project-item">
          <img className="project" src={`data:image/png;base64, ${project.Project1}`} alt="project1" />
          <div className="project-name">Web Design</div>
        </div>
        <div className="project-item">
          <img className="project" src={project2} alt="nd jdi kse bking firebase krna tllu besar Sir" />
          <div className="project-name">Computer Graphic</div>
        </div>
        <div className="project-item">
          <img className="project" src={`data:image/png;base64, ${project.Project3}`}  alt="project3" />
          <div className="project-name">Library SAD</div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Projects;
