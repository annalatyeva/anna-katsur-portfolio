import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import design_project3 from "./../../assets/images/design_project3.png";
import design_project4 from "./../../assets/images/design_project4.png";
import design_project6 from "./../../assets/images/brand_project6.png";
import design_project7 from "./../../assets/images/brand_project7.png";
import style from "../Portfolio/Portfolio.module.scss";

const dataBrand = [
  {
    link: "https://player.vimeo.com/video/765743651?h=25a2d79aa1&badge=0&background=1&quality=2160&autopause=0&player_id=0&app_id=58479",
    number: "01",
    description:
      "CREATING A BRAND AND VISUAL IDENTITY FOR THE IT CONFERENCE YATALKS",
    format: "video",
  },
  {
    link: "https://player.vimeo.com/video/617935849?h=6105373d35&badge=0&quality=1080p&autopause=0&background=1&player_id=0&app_id=58479",
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
    link: "https://player.vimeo.com/video/870069354?h=91642a8795&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479",
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
      <Footer />
    </div>
  );
};

export default Portfolio;
