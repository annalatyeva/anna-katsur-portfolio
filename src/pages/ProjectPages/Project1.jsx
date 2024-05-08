import "./Project.scss";
import "./video-posters.scss";
import {useEffect} from "react";
import ReactPlayer from "react-player";

import galleryItem from "../../assets/images/project-pic1.jpg";
import galleryItem2 from "../../assets/images/project-pic2.jpg";
import galleryItem3 from "../../assets/images/project-pic3.jpg";
import galleryItem4 from "../../assets/images/project-pic4.jpg";
import galleryItem5 from "../../assets/images/project-pic5.jpg";
import galleryItem6 from "../../assets/images/project-pic6.jpg";
import {Link} from "react-router-dom";

const team = [
	{role: "Design Director", name: "Anna Katsur"},
	{role: "Creative Director", name: "Ivan Velichko"},
	{role: "Art Director", name: "Daria Zudina"},
	{role: "Art Director", name: "Sofya Karavaeva"},
	{role: "Lead Designer", name: "Evgeny Drozhzhev"},
	{role: "Lead Motion Designer", name: "Dmitry Kozlyaev"},
	{role: "Designer", name: "Dmitry Kozlyaev"},
	{role: "Designer", name: "Dina Isaeva"},
	{role: "Designer", name: "Runt Blagaya"},
	{role: "Designer", name: "Masha Larionova"},
	{role: "Sound Designer", name: "Simeon Melnikov"},
	{role: "Content Director, Writing", name: "Vasily Kolesnik"},
	{role: "Producer", name: "Ekaterina Shcherbakova"},
	{role: "Project Manager", name: "Anna Eremina"},
	{role: "Project Manager", name: "Anna Kuzyutina"},
	{role: "Project Manager", name: "Anna Shayakhmetova"},
];

const Project = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="project-container">
			<div className="project-header">
				<h2 className="project-header__title">CREATING A BRAND AND VISUAL IDENTITY FOR THE IT CONFERENCE YATALKS</h2>
				<p className="project-header__number">/ 01</p>
			</div>
			<div className="project-gallery4">
				<div className="project-gallery__wrapper item_horizontal b1">
					<ReactPlayer url="https://player.vimeo.com/video/765743651?h=25a2d79aa1&badge=0&background=1&quality=2160&autopause=0&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper">
					<img className="project-gallery__item" src={galleryItem} alt="" width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper b2">
					<ReactPlayer url="https://player.vimeo.com/video/769909942?h=45957d639e&badge=0&autopause=0&background=1&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
			</div>
			<div className="project-article">
				<section className="project-article__item1">In the 1960s outer space has become a collective dream of humankind. Contemporaries of Yuri Gagarin, Neil Armstrong, and generations to follow read and watch science fiction, fantasizing about extraterrestrial journeys. Our dreams got more earthly since, but the cosmos still remains a synonym of continuous elaboration and progress.</section>
				<section className="project-article__item2">
					<p>IT is a space for today became the theme of YaTalks conference of 2021 by Yandex, so as the general metaphor of the visual identity of this event, uniting nearly 100 experts from leading companies from all over the world to share their views on the IT industry, technology, and digital trends.</p>
					<p>Abstract objects interact, symbolizing knowledge sharing, communication, and discussion. The overall modularity, futuristic logo, and typographic system order, like the spacecraft control panel and the silhouettes of instruments for studying alien surfaces, inherits the graphic plots of classical and modern sci-fi.</p>
					<p>The identity is equipped with an automatic generator of motion and static graphics — the tool, that allows quickly creating of various communication media. Together with a broad and flexible color palette it helped distinguish product areas across six areas of different themes.</p>
				</section>
			</div>
			<div className="project-gallery2">
				<div className="project-gallery__wrapper item_horizontal b3">
					<ReactPlayer url="https://player.vimeo.com/video/765744230?h=83b7e75b49&badge=0&background=1&autopause=0&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper item_horizontal b4">
					<ReactPlayer url="https://player.vimeo.com/video/759810575?h=0a8c0683d8&badge=0&autopause=0&background=1&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper item_horizontal b5">
					<ReactPlayer url="https://player.vimeo.com/video/765770051?h=b6b4918afa&badge=0&background=1&autopause=0&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper item_horizontal b6">
					<ReactPlayer url="https://player.vimeo.com/video/769945605?h=93f114d52f&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
			</div>
			<div className="project-gallery3">
				<div className="project-gallery__wrapper  project-gallery3__item b7">
					<ReactPlayer url="https://player.vimeo.com/video/765744089?h=f78bb2ffad&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479" className="project-gallery__item" playing={true} loop={true} playsinline={true} width="100%" height="100%" />
				</div>
				<div className="project-gallery3__wrapper">
					<div className="project-gallery__wrapper project-gallery3__item">
						<img className="project-gallery__item" src={galleryItem3} alt="" width="100%" height="100%" />
					</div>
					<div className="project-gallery__wrapper project-gallery3__item">
						<img className="project-gallery__item" src={galleryItem4} alt="" width="100%" height="100%" />
					</div>
				</div>
			</div>
			<div className="project-gallery4">
				<div className="project-gallery__wrapper item_horizontal">
					<img className="project-gallery__item" src={galleryItem2} alt="" width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper item_vertical">
					<img className="project-gallery__item" src={galleryItem5} alt="" width="100%" height="100%" />
				</div>
				<div className="project-gallery__wrapper item_vertical">
					<img className="project-gallery__item" src={galleryItem6} alt="" width="100%" height="100%" />
				</div>
			</div>
			<div className="project-team">
				<h5 className="project-team__title">TEAM</h5>
				<div className="project-team__container">
					<div className="project-team__item">
						{team.map((item) => (
							<>
								<p className="project-team__item_job">{item.role}</p>
								<p className="project-team__item_name">{item.name}</p>
							</>
						))}
					</div>
				</div>
			</div>
			<Link to="/project02" className="project-switch__link">
				<div className="project-switch">
					<h4 className="project-switch__title">CONCEPT OF THE EVENT AND CREATIVE DIRECTION FOR SEASONS BRAND IDENTITY</h4>
					<p className="project-switch__number">/ 02</p>
				</div>
			</Link>
		</div>
	);
};

export default Project;
