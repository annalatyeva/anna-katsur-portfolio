import "./Project.scss";
import galleryItem from "../../assets/images/project-pic1.jpg";
import galleryItem2 from "../../assets/images/project-pic2.jpg";
import galleryItem3 from "../../assets/images/project-pic3.jpg";
import galleryItem4 from "../../assets/images/project-pic4.jpg";
import galleryItem5 from "../../assets/images/project-pic5.jpg";
import galleryItem6 from "../../assets/images/project-pic6.jpg";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-header__title">
          creating a brand and visual identity for the it conference YaTalks
        </h2>
        <p className="project-header__number">/01</p>
      </div>
      <div className="project-gallery">
        <div className="project-gallery__item item_horizontal">
          <iframe
            width="853"
            height="480"
            title="project_video1"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/765743651?h=25a2d79aa1&badge=0&background=1&quality=2160&autopause=0&player_id=0&app_id=58479"
          />
        </div>

        <img
          className="project-gallery__item item_vertical"
          src={galleryItem}
          alt=""
        />

        <div className="project-gallery__item item_vertical">
          <iframe
            width="853"
            height="480"
            title="project_video2"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/769909942?h=45957d639e&badge=0&autopause=0&background=1&player_id=0&app_id=58479"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item1">
          In the 1960s outer space has become a collective dream of humankind.
          Contemporaries of Yuri Gagarin, Neil Armstrong, and generations to
          follow read and watch science fiction, fantasizing about
          extraterrestrial journeys. Our dreams got more earthly since, but the
          cosmos still remains a synonym of continuous elaboration and progress.
        </section>
        <section className="project-article__item2">
          <p>
            IT is a space for today became the theme of YaTalks conference of
            2021 by Yandex, so as the general metaphor of the visual identity of
            this event, uniting nearly 100 experts from leading companies from
            all over the world to share their views on the IT industry,
            technology, and digital trends.
          </p>
          <p>
            Abstract objects interact, symbolizing knowledge sharing,
            communication, and discussion. The overall modularity, futuristic
            logo, and typographic system order, like the spacecraft control
            panel and the silhouettes of instruments for studying alien
            surfaces, inherits the graphic plots of classical and modern sci-fi.
          </p>
          <p>
            The identity is equipped with an automatic generator of motion and
            static graphics — the tool, that allows quickly creating of various
            communication media. Together with a broad and flexible color
            palette it helped distinguish product areas across six areas of
            different themes.
          </p>
        </section>
      </div>
      <div className="project-gallery2">
        <div>
          <iframe
            title="project_video3"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/765744230?h=83b7e75b49&badge=0&background=1&autopause=0&player_id=0&app_id=58479"
          />
          <iframe
            title="project_video4"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/759810575?h=0a8c0683d8&badge=0&autopause=0&background=1&player_id=0&app_id=58479"
          />
        </div>
        <div>
          <iframe
            title="project_video5"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/765770051?h=b6b4918afa&badge=0&background=1&autopause=0&player_id=0&app_id=58479"
          />
        </div>
        <div>
          <iframe
            title="project_video7"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/769945605?h=93f114d52f&badge=0&background=1&quality=1080&autopause=0&player_id=0&app_id=58479"
          />
        </div>
        <div>
          <iframe
            title="project_video6"
            allow="autoplay; clipboard-write"
            frameborder="0"
            allowfullscreen
            src="https://player.vimeo.com/video/765744089?h=f78bb2ffad&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&background=1&player_id=0&app_id=58479"
          />
          <img className="project-gallery2__item" src={galleryItem3} alt="" />
          <img className="project-gallery2__item" src={galleryItem4} alt="" />
        </div>
        <div>
          <img className="project-gallery2__item" src={galleryItem2} alt="" />
        </div>
        <div>
          <img className="project-gallery2__item" src={galleryItem5} alt="" />
          <img className="project-gallery2__item" src={galleryItem6} alt="" />
        </div>
      </div>
      <div className="project-team">
        <h5 className="project-team__title">TEAM</h5>
        <div className="project-team__container">
          <div className="project-team__item">
            <p className="project-team__item_job">Design Director</p>
            <p className="project-team__item_name">Anna Katsur</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Creative Director</p>
            <p className="project-team__item_name">Ivan Velichko</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Art Director</p>
            <p className="project-team__item_name">Daria Zudina</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Art Director</p>
            <p className="project-team__item_name">Sofya Karavaeva</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Lead Designer</p>
            <p className="project-team__item_name">Evgeny Drozhzhev</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Lead Motion Designer</p>
            <p className="project-team__item_name">Dmitry Kozlyaev</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Designer</p>
            <p className="project-team__item_name">Dmitry Kozlyaev</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Designer</p>
            <p className="project-team__item_name">Dina Isaeva</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Sound Designer</p>
            <p className="project-team__item_name">Simeon Melnikov</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Content Director, Writing</p>
            <p className="project-team__item_name">Vasily Kolesnik</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Producer</p>
            <p className="project-team__item_name">Ekaterina Shcherbakova</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Project Manager</p>
            <p className="project-team__item_name">Anna Eremina</p>
          </div>
          <div className="project-team__item">
            <p className="project-team__item_job">Project Manager</p>
            <p className="project-team__item_name">Anna Shayakhmetova</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
