import { useState } from "react";
import style from "../PortfolioItem/PortfolioItem.module.scss";

const PortfolioItem = ({ link, number, description, format, cover }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.img_wrapper}>
          {format === "image" ? (
            <img src={link} alt={`project${number}`} />
          ) : (
            <div>
              {!loaded && <img src={cover} alt={`project${number}`} />}
              <video
                autoPlay
                loop
                onLoadedData={handleLoaded}
                className={!loaded && style.notloaded}
              >
                <source src={link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <span className={style.number}>/</span>
        <p className={style.number}>{number}</p>
      </div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default PortfolioItem;
