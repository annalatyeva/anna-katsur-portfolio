import "./Project.scss";
import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-header__title">
          DEVELOPMENT OF SBER'S CORPORATE TYPEFACE SYSTEM
        </h2>
        <p className="project-header__number">/03</p>
      </div>
      <Link to="/project04" className="project-switch__link">   
      <div className="project-switch"> 
        <h4 className="project-switch__title">
        DEVELOPMENT OF AN ACCESSORIES COLLECTION
        </h4>
        <p className="project-switch__number">/ 04</p>       
      </div>
      </Link> 
    </div>
  );
};

export default Project3;
