// import Header from "../Header";
// import Footer from "../Footer";
import "./ProjectPage.scss";
import Project1 from "../../components/ProjectItem/Project";
import Project4 from "../../components/ProjectItem/Project4";
import Project5 from "../../components/ProjectItem/Project5";

const ProjectPage = () => {
  return (
    <div className="project">
      <Project1 />
      <Project4 />
      <Project5 />
    </div>
  );
};

export default ProjectPage;
