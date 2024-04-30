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
import galleryItem8 from "../../assets/images/project7-pic8.png";
import galleryItem9 from "../../assets/images/project7-pic9.png";
import galleryItem10 from "../../assets/images/project7-pic10.png";
import galleryItem11 from "../../assets/images/project7-pic11.png";
import galleryItem12 from "../../assets/images/project7-pic12.png";
import galleryItem13 from "../../assets/images/project7-pic13.png";
import galleryItem14 from "../../assets/images/project7-pic14.png";
import galleryItem15 from "../../assets/images/project7-pic15.png";
import galleryItem16 from "../../assets/images/project7-pic16.png";

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
      <div className="project-gallery4">
        <img
          className="project-gallery__img item_horizontal"
          src={galleryItem}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem3}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem4}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <h6 className="project-article__title">
            Rational and Emotional Brand Benefits
          </h6>
        </section>
      </div>

      <div className="project-gallery4">
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem5}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem6}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_horizontal"
          src={galleryItem7}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem8}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem9}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <h6 className="project-article__title">LogoColours usage</h6>
          <p className="project-article__subtitle">SBER Timeline Gradient </p>
          <p className="project4-article__text">
            It is made up of five colours: main SBER Heritage Green, SBER
            Spring, Sunshine, Arctic, Deep Sky.
          </p>
          <p className="project-article__subtitle">SBER Heritage Green</p>
          <p className="project4-article__text">
            To be used in the symbol and in the wordmark elements of the Logo.
          </p>
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
          <h6 className="project-article__title">Mass segment colours </h6>
          <p className="project-article__subtitle">SBER Heritage Green</p>
          <p className="project4-article__text">
            To be used for Logo, as a background for layouts, for texts. Also
            can be applied for uniform and merchandising solutions.
          </p>
          <p className="project-article__subtitle">
            SBER Mass Segment Gradient
          </p>
          <p className="project4-article__text">
            To be used for Time element, as a background for layouts, in
            typography, for icons filling.
          </p>
          <p className="project-article__subtitle">
            SBER Deep Ocean, SBER Snow
          </p>
          <p className="project4-article__text">
            To be used as a background for layouts, in typography. Also can be
            applied for uniform and merchandising solutions.
          </p>
          <p className="project-article__subtitle">SBER Sunshine</p>
          <p className="project4-article__text">
            To be used as an accent colour in typography.
          </p>
          <p className="project-article__subtitle">SBER Black</p>
          <p className="project4-article__text">To be used in typography.</p>
          <p className="project-article__subtitle">SBER White</p>
          <p className="project4-article__text">
            To be used in typography and as a background colour.
          </p>
        </section>
      </div>
      <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem11}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <p className="project-article__subtitle">
            SBER Mass segment gradient
          </p>
          <p className="project4-article__text">
            The gradient consists of two colors: SBER Herbal and SBER Sky. To be
            used for Time element, as a background for layouts, in typography,
            for icons filling.
          </p>
        </section>
      </div>
      <div className="project-gallery__logo">
        <img
          className="project-gallery__img"
          src={galleryItem12}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <h6 className="project-article__title">Time element</h6>
          <p className="project4-article__text">
            The bright gradient adds freshness and shows the movement of time.
            An additional dynamics is added by the offset circle of the dial,
            which can also be moved depending on the layout, the only condition
            is the contact of more part of the circle and gradient zone so that
            they work as one image.
          </p>
        </section>
        <section className="project-article__item2">
          <p>
            The start of the time is set by the stylistically designed arrow of
            the clock on one side of the time interval. It duplicates the
            gradient from the sign of the logo in full color layouts, but can
            also be monochrome for different types of application.
          </p>
        </section>
      </div>
      <div className="project-gallery4">
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem13}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem14}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem16}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_vertical"
          src={galleryItem15}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img item_horizontal3"
          src={galleryItem2}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <Link to="/project01" className="project-switch__link">
        <div className="project-switch">
          <h4 className="project-switch__title">
            CREATING A BRAND AND VISUAL IDENTITY FOR THE IT CONFERENCE YATALKS
          </h4>
          <p className="project-switch__number">/ 01</p>
        </div>
      </Link>
    </div>
  );
};

export default Project7;
