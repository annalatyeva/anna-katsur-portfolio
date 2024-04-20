// import Header from "../Header";
// import Footer from "../Footer";
import "./ProjectPage.scss";
import Project from "../../components/ProjectItem/Project";

const ProjectPage = () => {
  return (
    <div className="project">
      <Project />
      <div className="project-switch">
        <h4 className="project-switch__title">
          Art Direction for the Rebranding of the Fin-Tech Product Ecosystem
        </h4>
        <p className="project-switch__number">/</p>
      </div>
    </div>
  );
};

export default ProjectPage;
