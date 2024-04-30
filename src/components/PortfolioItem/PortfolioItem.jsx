import ReactPlayer from "react-player";
import style from "../PortfolioItem/PortfolioItem.module.scss";

const PortfolioItem = ({link, number, description, format}) => {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				{format === "image" ? (
					<img src={link} alt="project" />
				) : (
					<div className={style.video_wrapper}>
						<ReactPlayer url={link} className={style.video} playing={true} loop={true} width="100%" height="100%" />
					</div>
				)}
				<span className={style.number}>/</span>
				<p className={style.number}>{number}</p>
			</div>
			<p className={style.description}>{description}</p>
		</div>
	);
};

export default PortfolioItem;
