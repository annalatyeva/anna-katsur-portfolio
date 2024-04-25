import "./Project.scss";
import { Link } from "react-router-dom";

const Project7 = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-header__title">
          ART DIRECTION FOR THE REBRANDING OF THE FIN-TECH PRODUCT ECOSYSTEM
        </h2>
        <p className="project-header__number">/07</p>
      </div>
      <Link to="/project01" className="project-switch__link">   
      <div className="project-switch"> 
        <h4 className="project-switch__title">
        CREATING A BRAND AND VISUAL IDENTITY FOR THE IT CONFERENCE YATALKS
        </h4>
        <p className="project-switch__number">/ 01</p>       
      </div>
      </Link>
    </div>
  );
};

export default Project7;
