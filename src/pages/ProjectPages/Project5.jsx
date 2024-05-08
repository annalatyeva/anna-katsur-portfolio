import "./Project.scss";
import "./video-posters.scss";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import galleryItem from "../../assets/images/project5-pic0.png";
//import galleryItem2 from "../../assets/images/project5-pic2.png";
import galleryItem3 from "../../assets/images/project5-pic3.png";

const team = [
  { role: "Design Director", name: "Anna Katsur" },
  { role: "Creative Director", name: "Ivan Velichko" },
  { role: "Creative Strategic Director", name: "Anastasia Butrym" },
  { role: "Art Director", name: "Sofya Karavaeva" },
  { role: "Design Director", name: "Konstantin Frolov" },
  { role: "Motion Design Director", name: "Dmitry Kozlyaev" },
  { role: "Designer", name: "Dmitry Okulich-Kazarin" },
  { role: "Designer", name: "Dina Isaeva" },
  {
    role: "Designer, Motion Designer, Creative Coder",
    name: "Daniil Svetlov",
  },
  { role: "Client Service Director", name: "Maria Orlova" },
  { role: "Project Manager", name: "Anna Eremina" },
  { role: "Content Director", name: "Vasily Kolesnik" },
  { role: "Content Producer", name: "Ekaterina Shcherbakova" },
];

const Project5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project5-header__title">
          CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND
        </h2>
        <p className="project-header__number">/ 05</p>
      </div>
      <div className="project-gallery__wrapper b12">
        <ReactPlayer
          url="https://player.vimeo.com/video/862109483?h=6fd26ffd5d&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
          className="project-gallery__item"
          playing={true}
          loop={true}
          playsInline={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project-article__item1">
          Yandex for Developers (YfD) is a platform for networking and
          professional development in the IT industry. Its new flexible brand
          design system is based on typography that adapts common programming
          language syntax rules.
        </section>
        <section className="project-article__item2">
          Events across YfD are articulated through a custom generator of motion
          and static graphics, producing unique visuals for each type, from
          conference graphics to meetup 3D objects and casual event stickers,
          all complemented by a bright and diverse color palette. The consistent
          typography, marked subtitles, and logo ending in an asterisk-slash
          combo emphasize Yandex's digital flair and color diversity, seamlessly
          fitting both digital and print media.
        </section>
      </div>
      <div className="project-gallery">
        <div className="project-gallery__wrapper item_horizontal b13">
          <ReactPlayer
            url="https://player.vimeo.com/video/870069354?h=91642a8795&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper item_horizontal b14">
          <ReactPlayer
            url="https://player.vimeo.com/video/862075633?h=91642a8795&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item2">
          Different YfD sections are segmented with distinctive visual features.
          A custom generative graphic tool is created for conferences. For
          meetups, the principle of creating abstract 3D objects is developed.
          Playful stickers correspond with the tone and character of less formal
          events.
        </section>
      </div>
      <div className="project-gallery">
        <div className="project-gallery__wrapper item_vertical b15">
          <ReactPlayer
            url="https://player.vimeo.com/video/870061329?badge=0&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper item_vertical b16">
          <ReactPlayer
            url="https://player.vimeo.com/video/862318538?h=4ea0f25798&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper item_horizontal b17">
          <ReactPlayer
            url="https://player.vimeo.com/video/862129417?h=42ab2fd2e8&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item2">
          The custom palette combines Yandex's primary color with bright
          additional hues, curated to distinguish between the brand's diverse
          product lines and features. This highlights the brand's digital origin
          and adds a touch of versatility and vibrancy to its overall
          identity.​​​​​​​
        </section>
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
          <ReactPlayer
            url="https://player.vimeo.com/video/871822571?h=ad9f8e895c&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper item_horizontal b19">
          <ReactPlayer
            url="https://player.vimeo.com/video/871804706?h=c56d51ec06&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item2">
          The fluid visual system is based on typography. It adapts the syntax
          of programming languages. Diverse product directions of YfD are
          highlighted by a generator of motion and static graphics, supported by
          a vibrant color palette. The identity seamlessly adjusts to digital
          and print media, from posters and landing pages to installations and
          merchandise.​​​​​​​
        </section>
      </div>
      <div className="project-gallery5">
        <div className="project-gallery__wrapper item_horizontal2 b20">
          <ReactPlayer
            url="https://player.vimeo.com/video/862118913?h=0de10078a4&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-gallery__wrapper  item_horizontal2 b21">
          <ReactPlayer
            url="https://player.vimeo.com/video/871822600?h=e8494aa47d&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
        </div>
				<div className="project-gallery_wrapper item_horizontal2">
						<img className="project-gallery3_item" src={galleryItem} alt="" width="100%" height="100%" />
				</div>
			</div>
      <div className="project-gallery3">
        <div className="project-gallery__wrapper item_horizontal2 b22">
          <ReactPlayer
            url="https://player.vimeo.com/video/862081255?h=c33522dcd3&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
            className="project-gallery__item"
            muted={true}
            playing={true}
            loop={true}
            playsInline={true}
            width="100%"
            height="100%"
          />
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
      <Link to="/project06" className="project-switch__link">
        <div className="project-switch">
          <h4 className="project-switch__title">
            CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND
          </h4>
          <p className="project-switch__number">/ 06</p>
        </div>
      </Link>
    </div>
  );
};

export default Project5;
