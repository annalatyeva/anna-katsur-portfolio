import "./Project.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import galleryItem from "../../assets/images/project7-pic1.png";
import galleryItem2 from "../../assets/images/project7-pic2.png";
import galleryItem3 from "../../assets/images/project7-pic3.png";
import galleryItem4 from "../../assets/images/project7-pic4.png";
import galleryItem5 from "../../assets/images/project7-pic5.png";
import galleryItem6 from "../../assets/images/project7-pic6.png";
import galleryItem7 from "../../assets/images/project7-pic7.png";


const Project7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project2-header__title">
          ART DIRECTION FOR THE REBRANDING OF THE FIN-TECH PRODUCT ECOSYSTEM
        </h2>
        <p className="project-header__number">/07</p>
      </div>
	  <div className="project-header__logo">
        <img
          className="project-gallery__img"
          src={galleryItem}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-article">
        <section className="project-article__item1">For many years, Sberbank has consistently implemented innovations in its business, enabling it to transform from a traditional bank into an advanced fintech company with digital financial services. The company decided to develop more than 50 new business directions — from e-commerce and cloud technologies to medicine and telecom. The rebranding was carried out in collaboration with Landor&Fitch.
        </section>
        <section className="project-article__item2">
		<h6 className="project-article__title">Positioning</h6>
          <p>In the new brand, we managed to retain the core values of the company, such as reliability and confidence, and to continue its development by infusing the brand with a greater spirit of innovation and inspiration through an enabling platform. This platform allows individuals and companies to explore new horizons and push the boundaries. Thus, the brand embodies the idea of constant development and progress, reaching new markets and audiences.
          </p>
		  <h6 className="project-article__title">Design System</h6>
          <p>We built Sber's entire design system around five elements. Each of these elements is designed with a certain flexibility and is used in the communications of all the sub-brands and the master brand of the ecosystem.
          </p>

        </section>
      </div>
	  <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem2}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-article">
        <section className="project4-article__item1">
        <p className="project-article__subtitle">Logo</p>
          <p>The most recognizable and strong asset of the ecosystem. It has become the constant in all elements of the design system.
          </p>
          <p className="project-article__subtitle"></p>
		    <p className="project4-article__text">For example, the visual communications of sub-brands operating at a universal service level will be executed in bright colors and gradients, while those in the premium segment will use darker tones and, in some cases, combinations with black. For those companies operating at a personal level, white will be the primary color.
          </p>
          <p className="project-article__subtitle">Colors and gradients</p>
          <p className="project4-article__text">have helped to differentiate the sub-brands from one another, depending on the style and level of the business offering.
          </p>
        </section>
      </div>
	  <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem3}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-article">
        <section className="project4-article__item1">
          <p className="project-article__subtitle">The locator</p>
          <p className="project4-article__text">is a graphic element used in communications that helps unify the visuals of the new brand. One of its consistent components has become the arrow, which initiates the gradient transition, while the other elements of the locator change colors to match the identity of the sub-brand.</p>
        </section>
      </div>
	  <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem4}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem5}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-article">
        <section className="project4-article__item1">
          <p className="project-article__subtitle">Illustrations and supporting graphics</p>
          <p className="project4-article__text">not only complement the visual system but also help tell the brand's story. This content varies from style to style and includes data visualization. It also assists users in easily navigating the brands, products, and services of the ecosystem, both in physical and digital spaces.</p>
        </section>
      </div>  
	  <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem6}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-article">
        <section className="project4-article__item1">
          <h6 className="project-article__title">Sub-brand Identity</h6>
          <p className="project4-article__text">Together with design director Anastasia Butrym, we conducted an analysis of the key values and characteristics of each sub-brand within the ecosystem. The results formed the basis for the developed visual styles of the system according to marketing archetypes: "Ruler," "Sage," "Magician," and "Soul of the Company."</p>
        </section>
        <section className="project-article__item2">
          <p>Each style has variations depending on the level of the brand's offerings: universal (for a broad audience), special (for premium and business audiences), or personal (for VIP and corporate audiences). This affects the colors, gradients, use of fonts, and other graphic elements.</p>
        </section>
      </div>
	  <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem7}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
	  <div className="project-article">
	  <section className="project4-article__item1">
          <p className="project4-article__text">Thus, "Magician" has become the common style for the ecosystem, while "Ruler" now dominates all visual communications of financial brands, ensuring reliability and confidence, convenience, and time and effort savings. For these sub-brands, there is an evolutionary approach in the use of visuals, while still retaining green as a universal distinction in the field.</p>
        </section>
        <section className="project-article__item1">Sberbank has taken the top spot in the Brand Finance Banking 500 list of the world's strongest banking brands and has also entered the top three in the "brand strength index" among global companies.</section>        
      </div>
			<Link to="/project01" className="project-switch__link">
				<div className="project-switch">
					<h4 className="project-switch__title">CREATING A BRAND AND VISUAL IDENTITY FOR THE IT CONFERENCE YATALKS</h4>
					<p className="project-switch__number">/ 01</p>
				</div>
			</Link>
		</div>
	);
};

export default Project7;
