import { useState } from "react";
import style from "../Portfolio/Portfolio.module.scss";

const Portfolio = () => {
  const [activeTitle, setActiveTitle] = useState(true);
  const handleTitle = () => {
    setActiveTitle(!activeTitle);
  };
  return (
    <div>
      <div className={style.title}>
        <h2 className={activeTitle ? style.active : ""} onClick={handleTitle}>
          BRENDING
        </h2>
        <span>/</span>
        <h2 className={activeTitle ? "" : style.active} onClick={handleTitle}>
          DESIGN
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;
