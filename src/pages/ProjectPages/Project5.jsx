import "./Project.scss";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import galleryItem from "../../assets/images/project5-pic0.png";
//import galleryItem2 from "../../assets/images/project5-pic2.png";
import galleryItem3 from "../../assets/images/project5-pic3.png";

import video1 from "../../assets/video/project5-v1.mp4";
import video2 from "../../assets/video/yandex.mp4";
import video3 from "../../assets/video/project5-v3.mp4";
import video4 from "../../assets/video/project5-v4.mp4";
import video5 from "../../assets/video/project5-v5.mp4";
import video6 from "../../assets/video/project5-v6.mp4";
import video7 from "../../assets/video/project5-v7.mp4";
import video8 from "../../assets/video/project5-v8.mp4";
import video9 from "../../assets/video/project5-v9.mp4";
import video10 from "../../assets/video/project5-v10.mp4";
import video11 from "../../assets/video/project5-v11.mp4";

import poster1 from "../../assets/images/posters/b12.png";
import poster2 from "../../assets/images/posters/b13.png";
import poster3 from "../../assets/images/posters/b14.png";
import poster4 from "../../assets/images/posters/b15.png";
import poster5 from "../../assets/images/posters/b16.png";
import poster6 from "../../assets/images/posters/b17.png";
import poster7 from "../../assets/images/posters/b18.png";
import poster8 from "../../assets/images/posters/b19.png";
import poster9 from "../../assets/images/posters/b20.png";
import poster10 from "../../assets/images/posters/b21.png";
import poster11 from "../../assets/images/posters/b22.png";

const team = [
	{role: "Design Director", name: "Anna Katsur"},
	{role: "Creative Director", name: "Ivan Velichko"},
	{role: "Creative Strategic Director", name: "Anastasia Butrym"},
	{role: "Art Director", name: "Sofya Karavaeva"},
	{role: "Design Director", name: "Konstantin Frolov"},
	{role: "Motion Design Director", name: "Dmitry Kozlyaev"},
	{role: "Designer", name: "Dmitry Okulich-Kazarin"},
	{role: "Designer", name: "Dina Isaeva"},
	{
		role: "Designer, Motion Designer, Creative Coder",
		name: "Daniil Svetlov",
	},
	{role: "Client Service Director", name: "Maria Orlova"},
	{role: "Project Manager", name: "Anna Eremina"},
	{role: "Content Director", name: "Vasily Kolesnik"},
	{role: "Content Producer", name: "Ekaterina Shcherbakova"},
];

const Project5 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="project-container">
			<div className="project-header">
				<h2 className="project5-header__title">CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND</h2>
				<p className="project-header__number">/ 05</p>
			</div>
			<div className="project-gallery__wrapper b12">
				<video
					autoPlay
					loop
					playsInline
					muted
					poster={poster1}
					width="100%"
					height="100%">
					<source
						src={video1}
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="project-article">
				<section className="project-article__item1">Yandex for Developers (YfD) is a platform for networking and professional development in the IT industry. Its new flexible brand design system is based on typography that adapts common programming language syntax rules.</section>
				<section className="project-article__item2">Events across YfD are articulated through a custom generator of motion and static graphics, producing unique visuals for each type, from conference graphics to meetup 3D objects and casual event stickers, all complemented by a bright and diverse color palette. The consistent typography, marked subtitles, and logo ending in an asterisk-slash combo emphasize Yandex's digital flair and color diversity, seamlessly fitting both digital and print media.</section>
			</div>
			<div className="project-gallery">
				<div className="project-gallery__wrapper item_horizontal b13">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster2}
						width="100%"
						height="100%">
						<source
							src={video2}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="project-gallery__wrapper item_horizontal b14">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster3}
						width="100%"
						height="100%">
						<source
							src={video3}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="project-article">
				<section className="project-article__item2">Different YfD sections are segmented with distinctive visual features. A custom generative graphic tool is created for conferences. For meetups, the principle of creating abstract 3D objects is developed. Playful stickers correspond with the tone and character of less formal events.</section>
			</div>
			<div className="project-gallery">
				<div className="project-gallery__wrapper item_vertical b15">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster4}
						width="100%"
						height="100%">
						<source
							src={video4}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="project-gallery__wrapper item_vertical b16">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster5}
						width="100%"
						height="100%">
						<source
							src={video5}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="project-gallery__wrapper item_horizontal b17">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster6}
						width="100%"
						height="100%">
						<source
							src={video6}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="project-article">
				<section className="project-article__item2">The custom palette combines Yandex's primary color with bright additional hues, curated to distinguish between the brand's diverse product lines and features. This highlights the brand's digital origin and adds a touch of versatility and vibrancy to its overall identity.​​​​​​​</section>
			</div>
			<div className="project-gallery">
				<div className="project-gallery__wrapper item_horizontal">
					<img
						className="project-gallery__item"
						src={galleryItem3}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div className="project-gallery__wrapper item_horizontal b18">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster7}
						width="100%"
						height="100%">
						<source
							src={video7}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="project-gallery__wrapper item_horizontal b19">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster8}
						width="100%"
						height="100%">
						<source
							src={video8}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="project-article">
				<section className="project-article__item2">The fluid visual system is based on typography. It adapts the syntax of programming languages. Diverse product directions of YfD are highlighted by a generator of motion and static graphics, supported by a vibrant color palette. The identity seamlessly adjusts to digital and print media, from posters and landing pages to installations and merchandise.​​​​​​​</section>
			</div>
			<div className="project-gallery5">
				<div className="project-gallery__wrapper item_horizontal2 b20">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster9}
						width="100%"
						height="100%">
						<source
							src={video9}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="project-gallery__wrapper  item_horizontal2 b21">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster10}
						width="100%"
						height="100%">
						<source
							src={video10}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="project-gallery_wrapper item_horizontal2">
					<img
						className="project-gallery3_item"
						src={galleryItem}
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
			</div>
			<div className="project-gallery3">
				<div className="project-gallery__wrapper item_horizontal2 b22">
					<video
						autoPlay
						loop
						playsInline
						muted
						poster={poster11}
						width="100%"
						height="100%">
						<source
							src={video11}
							type="video/mp4"
						/>
					</video>
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
			<Link
				to="/project06"
				className="project-switch__link">
				<div className="project-switch">
					<h4 className="project-switch__title">CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND</h4>
					<p className="project-switch__number">/ 06</p>
				</div>
			</Link>
		</div>
	);
};

export default Project5;
