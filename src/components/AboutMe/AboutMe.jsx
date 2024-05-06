import {useEffect} from "react";

import aboutmeStyle from "../AboutMe/AboutMe.module.scss";

import photoItem from "../../assets/images/anna.png";
import photoItem2 from "../../assets/images/anna_mob_pic.png"

const AboutMe = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={aboutmeStyle.container}>
			<div className={aboutmeStyle.header}>
				<p className={aboutmeStyle.subtitle}> CREATIVE DIRECTOR &nbsp;&nbsp;/&nbsp;&nbsp; BRAND STRATEGIST &nbsp;&nbsp;/&nbsp;&nbsp; LECTURER</p>
				<p className={aboutmeStyle.title}>HELLO! I'M ANNA KATSUR, CREATIVE DIRECTOR WITH A STRONG FOCUS ON CREATING IMPACTFUL BRAND PLATFORMS, BRANDING, INDENTITY, AND TYPOGRAPHY.</p>
			</div>
			<div className={aboutmeStyle.mainsection}>
				<div className={aboutmeStyle.wrapper}>
					<div className={aboutmeStyle.text}>
						<p className={aboutmeStyle.textitem}>With over a decade of experience, I specialize in elevating brand presence and engagement in the IT and fintech sectors. My professional journey includes leading over 50 successful advertising campaigns and spearheading significant redesign and rebranding initiatives for major corporations.</p>
						<p className={aboutmeStyle.textitem}>Currently, I lead the Creative Studio and Employer's Internal Brand Department at a major technology firm, where I have developed over 30 creative concepts and five comprehensive brand strategies. These efforts have not only strengthened the emotional connection between the brand and its audience but have also boosted brand recognition impressively.</p>
					</div>
					<div className={aboutmeStyle.image}>
						<img src={photoItem} alt="Anna" />
					</div>
					<div className={aboutmeStyle.image2}>
						<img src={photoItem2} alt="Anna" />
					</div>
				</div>
			<div className={aboutmeStyle.wrapper}>
				<div className={aboutmeStyle.text}>
					<p className={aboutmeStyle.paragraph}> I AM ALSO PASSIONATE ABOUT EDUCATION, SERVING AS A LECTURER AT THE BRITISH HIGHER SCHOOL OF ART AND DESIGN.</p>
				</div>
				<div className={aboutmeStyle.text}>
					<p className={aboutmeStyle.textitem}>There, I have designed and led a three-month intensive module focusing on research, design, and branding, among other subjects, preparing the next generation of designers and brand strategists.</p>
					<p className={aboutmeStyle.textitem}>Holding a Global Talent visa in the UK for visual arts, my work has been recognized with several prestigious awards, including a recent Gold at the Futuregosummit for 'New artist' and a Silver at the European Design Awards for the SB Type system.</p>
				</div>
			</div>
			<div className={aboutmeStyle.text}>
				<p className={aboutmeStyle.paragraph}>I AM KEEN TO SHARE INSIGHTS AND EXPLORE SYNERGIES AT YOUR NEXT FESTIVAL, PUBLIC SPEAKING EVENT, OR SEMINAR. IF YOU'RE INTERESTED IN REVITALIZING YOUR BRAND OR INFUSING INNOVATIVE CREATIVE STRATEGIES INTO YOUR CORPORATE CULTURE, I AM HERE TO INSPIRE AND GUIDE. LET'S CONNECT AND CREATE SOMETHING EXTRAORDINARY TOGETHER!</p>
			</div>
			</div>
			<div className={aboutmeStyle.media}>
				<h3 className={aboutmeStyle.medianame}>Media</h3>
				<div className={aboutmeStyle.medialinks}>
					<a className={aboutmeStyle.link} href="https://my.epicgrowth.io/programs/rebranding">
						[REBRANDING PROGRAM]
					</a>
					<a className={aboutmeStyle.link} href="https://promo.sber.ru/design#">
						[SBER DESIGN PROMO]
					</a>
					<a className={aboutmeStyle.link} href="https://hackernoon.com/a-checklist-of-changes-that-await-us-in-the-field-of-arts?fbclid=IwAR24mtEBPt_c-uE0Sn_i-RFCDxtXLD2JEa8e0KqNTi7X-hCVBdawCalCowU">
						[CHANGES IN THE FIELD OF ARTS]
					</a>
					<a className={aboutmeStyle.link} href="https://filmdaily.co/lifestyle/art-and-illusion-a-study-on-the-role-of-neural-networks-in-the-work-of-anna-katsur">
						[ART AND ILLUSION STUDY]
					</a>
					<a className={aboutmeStyle.link} href="https://techbullion.com/the-synthesis-of-painting-and-ml-technologies-in-the-world-of-nft">
						[SYNTHESIS OF PAINTING AND ML TECHNOLOGIES]
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
