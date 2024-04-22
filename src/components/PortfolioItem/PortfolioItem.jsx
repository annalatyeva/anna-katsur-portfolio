import ReactPlayer from "react-player";
import style from "../PortfolioItem/PortfolioItem.module.scss";

const PortfolioItem = ({ link, number, description, format }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {format === "image" ? (
          <img src={link} alt="project" />
        ) : (
          <video autoPlay muted loop>
            <source src={link} type="video/mp4" />
          </video>
        )}
        <span className={style.number}>/</span>
        <p className={style.number}>{number}</p>
      </div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default PortfolioItem;
