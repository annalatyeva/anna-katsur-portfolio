import "./Project.scss";
import { Link } from "react-router-dom";

import galleryItem from "../../assets/images/project3-pic1.png";
import galleryItem2 from "../../assets/images/project3-pic2.png";
import galleryItem3 from "../../assets/images/project3-pic3.png";
import galleryItem4 from "../../assets/images/project3-pic4.png";
import galleryItem5 from "../../assets/images/project3-pic5.png";
import galleryItem6 from "../../assets/images/project3-pic6.png";
import galleryItem7 from "../../assets/images/project3-pic7.png";
import galleryItem8 from "../../assets/images/project3-pic8.png";
import galleryItem9 from "../../assets/images/project3-pic9.png";
import galleryItem10 from "../../assets/images/project3-pic10.png";
import galleryItem11 from "../../assets/images/project3-pic11.png";
import galleryItem12 from "../../assets/images/project3-pic12.png";
import galleryItem13 from "../../assets/images/project3-pic13.png";

const team = [
  { role: "Art Director", name: "Anna Katsur" },
  { role: "Manager", name: "Ira Voloshina" },
  { role: "Font Development", name: "Paratype" },
  { role: "Implementation, Testing", name: "Sber Design Team" },
];


const Project3 = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project2-header__title">
          DEVELOPMENT OF SBER'S CORPORATE TYPEFACE SYSTEM
        </h2>
        <p className="project-header__number">/03</p>
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
        <section className="project-article__item1">
        If you imagine branding as an iceberg, then the visible part would include the logo, symbol, and corporate colour. However, the entire iceberg—that is, branding—is not just the most obvious part, but a complex system. 
        </section>
        <section className="project4-article__item1">
          <p className="project4-article__text">It includes strategy, values, principles, the overall visual logic, the style of images and graphic elements, and typography—a set of fonts and the system for their use.</p>

        </section>
        <section className="project-article__item2">
          <p>
          The font traditionally resides in the lower, invisible part of the iceberg. Users notice or think about the font less frequently, even though it permeates the entire design system. In fact, we see fonts constantly, but usually do not pay attention to them. Nevertheless, the choice and character of a font significantly affect the perception of information and convey much on a subconscious level. 
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
          I oversaw the development of the new Sber super headset, which includes a comprehensive toolkit for all the communication and service tasks of the company, ensures user comfort, and also the individuality and recognisability of the brand across any platform and channel.
         
        </section>
        <section className="project-article__item2">
        <h6 className="project-article__title">SB Sans Text / Composition of the Typeface System</h6>
        <p>
        Grotesques — a collective name for sans-serif typefaces. In England and France, they are often called Sans Serif, in America Gothic, and in Germany Grotesk. The first known grotesque appeared in England in 1816 in the type samples of London typefounder William Caslon IV (1780–1869).
          </p>
          <p>
          Typically, grotesques have main and connecting strokes of almost the same thickness (non-contrasting) or with a barely noticeable difference in stroke thickness (low-contrast).
          </p>
        </section>
      </div>
      <div className="project-gallery">
        <img
          className="project-gallery__img"
          src={galleryItem3}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img"
          src={galleryItem4}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">The bank has many digital products and ATMs with low-resolution screens. SB Sans Interface is designed for interface elements on websites and in mobile applications. The regular style of SB Sans Interface is slightly narrower than SB Sans Text, but it is better optimised for use at small sizes
         
        </section>
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
          <h6 className="project-article__title">SB Sans Screen</h6>
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
          <h6 className="project-article__title">SB Sans Text Mono</h6>
          <p className="project4-article__text">Specially for developers, we have designed the monospaced styles of SB Sans Mono, which are convenient for coding, formatting tables, and in all cases where full column width alignment and consistent character positioning across different lines are required</p>
        </section>
        </div>
        <div className="project-gallery">
        <img
          className="project-gallery__img"
          src={galleryItem7}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img"
          src={galleryItem8}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project-article__item2">
          <p>The Display range of typefaces has been specifically designed for use in headlines and messages set in large point sizes. Additionally, SB Sans Display can be used in lengthy texts printed on paper, rather than displayed on screen. SB Sans Display differs from the Text range in the proportions of the characters, the terminations of the strokes, and some other details</p>
        </section>
      </div>
      <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem9}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <h6 className="project-article__title">SB Serif Text</h6>
          <p className="project4-article__text">The SB Serif Text fonts are primarily designed for use in print, formatting small text (9–18 pt) for extended reading</p>
        </section>
        </div>
        <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem10}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <h6 className="project-article__title"> SB Serif Display</h6>
        </section>
        </div>
      <div className="project-gallery">
        <img
          className="project-gallery__img item_horizontal"
          src={galleryItem11}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_horizontal"
          src={galleryItem12}
          alt=""
          width="100%"
          height="100%"
        />

        <img
          className="project-gallery__img item_horizontal"
          src={galleryItem13}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-team">
        <h5 className="project-team__title">TEAM</h5>
        <div className="project4-team__container">
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
      <Link to="/project04" className="project-switch__link">   
      <div className="project-switch"> 
        <h4 className="project-switch__title">
        DEVELOPMENT OF AN ACCESSORIES COLLECTION
        </h4>
        <p className="project-switch__number">/ 04</p>       
      </div>
      </Link> 
    </div>
  );
};

export default Project3;
