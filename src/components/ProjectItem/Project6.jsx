import "./Project.scss";
import { Link } from "react-router-dom";

const Project6 = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-header__title">
          CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND
        </h2>
        <p className="project-header__number">/06</p>
      </div>
      <Link to="/project07" className="project-switch__link">   
      <div className="project-switch"> 
        <h4 className="project-switch__title">
        ART DIRECTION FOR THE REBRANDING OF THE FIN-TECH PRODUCT ECOSYSTEM
        </h4>
        <p className="project-switch__number">/ 07</p>       
      </div>
      </Link> 
    </div>
  );
};

export default Project6;
