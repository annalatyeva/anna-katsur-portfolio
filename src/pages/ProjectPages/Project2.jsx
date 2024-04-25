import "./Project.scss";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import galleryItem from "../../assets/images/project2-pic1.jpg";
import galleryItem2 from "../../assets/images/project2-pic2.jpg";
import galleryItem3 from "../../assets/images/project2-pic3.jpg";
import galleryItem5 from "../../assets/images/project2-pic5.png";
import galleryItem6 from "../../assets/images/project2-pic6.png";
import galleryItem7 from "../../assets/images/project2-pic7.png";
import galleryItem8 from "../../assets/images/project2-pic8.png";
import galleryItem9 from "../../assets/images/project2-pic9.png";

const team = [
  { role: "Design Director", name: "Anna Katsur" },
  { role: "Creative Director", name: "Ivan Velichko" },
  { role: "Art Director", name: "Dasha Zudina" },
  { role: "Designer", name: "Evgeny Drozhzhev" },
  { role: "Designer", name: "Maria Larionova" },
  { role: "Logo", name: "Ekaterina Sedunova" },
  { role: "Lead Motion Designer", name: "Dmitry Kozlyaev" }, 
  { role: "Motion Designer", name: "Daniil Svetlov" },
  { role: "Manager", name: "Anna Kuzyutina" },
];

const Project2 = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project2-header__title">
          CONCEPT OF THE EVENT AND CREATIVE DIRECTION FOR SEASONS BRAND IDENTITY
        </h2>
        <p className="project-header__number">/ 02</p>
      </div>
      <div className="project-gallery">
        <div className="project-gallery__wrapper item_horizontal">
          <ReactPlayer
            url="https://player.vimeo.com/video/617935849?h=6105373d35&badge=0&quality=1080p&autopause=0&background=1&player_id=0&app_id=58479"
            className="project-gallery__item"
            playing={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item1">
          Seasons is a joint IT series by Epic Growth and Yandex. Every week, a
          group of experts analyse cases of the growth of digital products – the
          10-15-minute-long videos are published on the showrunners’ personal
          platform and are available with an Epic Growth Premium subscription.
        </section>
        <section className="project-article__item2">
          The series' visual identity is built around the idea of an elusive
          technological landscape and the people who are best able to perceive
          it, manipulate it, measure it and benefit from it. The Seasons experts
          are like the chosen ones of dystopian fiction who have been summoned
          to take part in a TV show to share their knowledge, but without making
          speculative predictions.
        </section>
      </div>
      <div className="project-gallery2">
        <div className="project-gallery__wrapper item_horizontal">
          <img
            className="project-gallery__item"
            src={galleryItem}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper item_horizontal">
          <img
            className="project-gallery__item"
            src={galleryItem2}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper">
          <ReactPlayer
            url="https://player.vimeo.com/video/617935917?h=6105373d35&badge=0&quality=1080p&autopause=0&background=1&player_id=0&app_id=58479"
            className="project-gallery__item"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper">
          <img
            className="project-gallery__item"
            src={galleryItem3}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item2">
          <p>
            Graphically, the motif is expressed in the image of a constantly
            changing abstract figure, a heroic logo and a fantastic combination
            of colours.
          </p>
          <p>
            All communications materials for the series are composed of elements
            from the visual language, particularly the design of the episodes –
            the intro, studio scenery, credits and cut-in scenes.
          </p>
        </section>
      </div>
      <div className="project-gallery2">
        <div className="project-gallery__wrapper item_horizontal">
          <ReactPlayer
            url="https://player.vimeo.com/video/624512767?h=98467760ff&badge=0&autopause=0&quality=1080p&background=1&player_id=0&app_id=58479"
            className="project-gallery__item"           
            playing={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper item_horizontal">
          <ReactPlayer
            url="https://player.vimeo.com/video/624616937?h=6497567e37&badge=0&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        </div>
        <div className="project-gallery4">
        <div className="item_vertical">
          <img
            className="project-gallery4__item"
            src={galleryItem9}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="item_vertical">
          <img
            className="project-gallery4__item"
            src={galleryItem5}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="item_vertical">
          <img
            className="project-gallery4__item"
            src={galleryItem6}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="item_vertical">
          <img
            className="project-gallery4__item"
            src={galleryItem7}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="item_horizontal ">
          <img
            className="project-gallery4__item"
            src={galleryItem8}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-team">
        <h5 className="project-team__title">TEAM</h5>
        <div className="project-team__container">
          <div className="project-team__item">
          <p>{team.map(item => (<p className="project-team__item_job" key={item.id}> {item.role}</p>))}</p>
            <p>{team.map(item => (<p className="project-team__item_name" key={item.id}> {item.name}</p>))}</p>
        </div>
      </div>
      </div>

      <Link to="/project03" className="project-switch__link">   
      <div className="project-switch"> 
        <h4 className="project-switch__title">
        DEVELOPMENT OF SBER'S CORPORATE TYPEFACE SYSTEM
        </h4>
        <p className="project-switch__number">/ 03</p>       
      </div>
      </Link> 
    </div>
  );
};

export default Project2;
