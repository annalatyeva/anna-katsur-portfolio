import style from "../PortfolioItem/PortfolioItem.module.scss";

const PortfolioItem = ({ img, number, description }) => {
  return (
    <div>
      <div className={style.wrapper}>
        <img src={img} />
        <span>/</span>
        <h3>{number}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default PortfolioItem;
