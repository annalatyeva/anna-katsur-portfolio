import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import yatalks from "./../../assets/video/yatalks.mp4";
import seasons from "./../../assets/video/seasons.mp4";
import yandex from "./../../assets/video/yandex.mp4";
import design_project3 from "./../../assets/images/design_project3.png";
import design_project4 from "./../../assets/images/design_project4.png";
import design_project6 from "./../../assets/images/brand_project6.png";
import design_project7 from "./../../assets/images/brand_project7.png";
import style from "../Portfolio/Portfolio.module.scss";

const dataBrand = [
  {
    link: yatalks,
    number: "01",
    description:
      "CREATING A BRAND AND VISUAL IDENTITY FOR THE IT CONFERENCE YATALKS",
    format: "video",
  },
  {
    link: seasons,
    number: "02",
    description:
      "CONCEPT OF THE EVENT AND CREATIVE DIRECTION FOR SEASONS BRAND IDENTITY",
    format: "video",
  },
  {
    link: design_project3,
    number: "03",
    description: `DEVELOPMENT OF SBER'S CORPORATE TYPEFACE SYSTEM`,
    format: "image",
  },
  {
    link: design_project4,
    number: "04",
    description: "DEVELOPMENT OF AN ACCESSORIES COLLECTION",
    format: "image",
  },
];

const dataDesign = [
  {
    link: yandex,
    number: "05",
    description: "CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND",
    format: "video",
  },
  {
    link: design_project6,
    number: "06",
    description: "CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND",
    format: "image",
  },
  {
    link: design_project7,
    number: "07",
    description:
      "ART DIRECTION FOR THE REBRANDING OF THE FIN-TECH PRODUCT ECOSYSTEM",
    format: "image",
  },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTitle, setActiveTitle] = useState(true);
  const handleTitle = () => {
    setActiveTitle(!activeTitle);
  };
  return (
    <div>
      <div className={style.portfolio}>
        <div className={style.title}>
          <h2 className={activeTitle ? style.active : ""} onClick={handleTitle}>
            DESIGN
          </h2>
          <span>/</span>
          <h2 className={activeTitle ? "" : style.active} onClick={handleTitle}>
            BRAND
          </h2>
        </div>
        <div>
          {activeTitle
            ? dataBrand.map((item) => (
                <Link to={`/project${item.number}`}>
                  <PortfolioItem
                    link={item.link}
                    number={item.number}
                    description={item.description}
                    format={item.format}
                    key={item.number}
                  />
                </Link>
              ))
            : dataDesign.map((item) => (
                <Link to={`/project${item.number}`}>
                  <PortfolioItem
                    link={item.link}
                    number={item.number}
                    description={item.description}
                    format={item.format}
                    key={item.number}
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
