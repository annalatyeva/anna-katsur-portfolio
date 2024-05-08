import { useState } from "react";
import style from "../PortfolioItem/PortfolioItem.module.scss";

const PortfolioItem = ({ link, number, description, format, cover, gif }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
  };
  return (
    <div className={style.container}>
      {format === "image" ? (
        <div className={style.wrapper}>
          <div className={style.img_wrapper}>
            <img src={link} alt={`project${number}`} />
          </div>
          <span className={`${style.number_img} ${style.number}`}>/</span>
          <p className={`${style.number_img} ${style.number}`}>{number}</p>
        </div>
      ) : (
        <div className={style.wrapper}>
          <div className={style.img_wrapper}>
            <div>
              {!loaded && (
                <img
                  src={cover}
                  alt={`project${number}`}
                  className={style.desktop}
                />
              )}
              <video
                autoPlay
                loop
                onLoadedData={handleLoaded}
                playsInline
                muted
                className={`${style.desktop} ${!loaded && style.notloaded}`}
              >
                <source src={link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                src={gif}
                alt={`project${number}`}
                className={style.mobile}
              />
            </div>
          </div>
          <span className={`${style.number_video} ${style.number}`}>/</span>
          <p className={`${style.number_video} ${style.number}`}>{number}</p>
        </div>
      )}
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default PortfolioItem;
