import "./Project.scss";
import "./video-posters.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import galleryItem from "../../assets/images/project6-pic1.png";
import galleryItem2 from "../../assets/images/project6-pic2.png";
import galleryItem3 from "../../assets/images/project6-pic3.png";
import galleryItem5 from "../../assets/images/project6-pic5.png";
import galleryItem6 from "../../assets/images/project6-pic6.png";
import galleryItem7 from "../../assets/images/project6-pic7.png";
import galleryItem8 from "../../assets/images/project6-pic8.png";

const Project6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project5-header__title">
          CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND
        </h2>
        <p className="project-header__number">/06</p>
      </div>
      <div className="project-gallery__wrapper b23">
        <ReactPlayer
            url="https://player.vimeo.com/video/941363731?h=e774d2e59e"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            width="100%"
            height="100%"
          />
      </div>
      <div className="project-article">
        <section className="project-article__item1">
          Yandex is a community of cool professionals working on products in
          demand around the world. It's an entire multiverse where everyone can
          find what suits them best: a service that is interesting to develop, a
          like-minded team, a comfortable work format, and ambitious tasks.
        </section>
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
          src={galleryItem2}
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
      </div>
      <div className="project-article">
        <section className="project-article__item2">
          <p>
            The brand has a personality. It embodies both an enterprising and
            intelligent individual. They are confident, ambitious, and
            results-driven (which can sometimes make them appear arrogant), yet
            they are self-deprecating and believe in the future.
          </p>
        </section>
      </div>
      <div className="project-gallery4">
        <img
          className="project-gallery__img  item_horizontal"
          src={galleryItem5}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img  item_horizontal"
          src={galleryItem6}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project4-article__item1">
          <p className="project4-article__text">
            Team is a line whose character refers to handwritten text. The line
            is the basis of Y team's graphics. It functions as a background, a
            metaphor, or a foundation for illustrations depending on the task.
          </p>
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
      <div className="project3-article">
        <section className="project-article__item1">
          <h6 className="project-article__title">Search, invent, try, and create together.</h6>
        </section>
      </div>
      <div className="project-gallery__logo">
        <img
          className="project-gallery__img item_horizontal3"
          src={galleryItem8}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <Link to="/project07" className="project-switch__link">
        <div className="project-switch">
          <h4 className="project-switch__title">
            ART DIRECTION FOR THE REBRANDING OF THE FIN-TECH PRODUCT ECOSYSTEM
          </h4>
          <p className="project-switch__number">/ 07</p>
        </div>
      </Link>
    </div>
  );
};

export default Project6;
