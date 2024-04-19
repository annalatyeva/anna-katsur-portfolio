// import Header from "../Header";
// import Footer from "../Footer";
import "./ProjectPage.scss";

const ProjectPage = () => {
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-header">
          <h2 className="project-header__title">
            creating a brand and visual identity for the it conference YaTalks
          </h2>
          <p className="project-header__number">/</p>
        </div>
        <div className="project-gallery">
          <img
            className="project-gallery__item"
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt=""
            style={{ width: "35%" }}
          />
          <img
            className="project-gallery__item"
            src="https://images.unsplash.com/photo-1587129792339-b94591f3d74d?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODYyMTk4fHxlbnwwfHx8fHw%3D"
            alt=""
            style={{ width: "15%" }}
          />
          <img
            className="project-gallery__item"
            src="https://images.unsplash.com/photo-1587129792339-b94591f3d74d?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODYyMTk4fHxlbnwwfHx8fHw%3D"
            alt=""
            style={{ width: "15%" }}
          />
          <img
            className="project-gallery__item"
            src="https://images.unsplash.com/photo-1587129792339-b94591f3d74d?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODYyMTk4fHxlbnwwfHx8fHw%3D"
            alt=""
            style={{ width: "15%" }}
          />
        </div>
        <div className="project-article">
          <section>
            In the 1960s outer space has become a collective dream of humankind.
            Contemporaries of Yuri Gagarin, Neil Armstrong, and generations to
            follow read and watch science fiction, fantasizing about
            extraterrestrial journeys. Our dreams got more earthly since, but
            the cosmos still remains a synonym of continuous elaboration and
            progress.
          </section>
          <section>
            <p>
              IT is a space for today became the theme of YaTalks conference of
              2021 by Yandex, so as the general metaphor of the visual identity
              of this event, uniting nearly 100 experts from leading companies
              from all over the world to share their views on the IT industry,
              technology, and digital trends.
            </p>
            <p>
              Abstract objects interact, symbolizing knowledge sharing,
              communication, and discussion. The overall modularity, futuristic
              logo, and typographic system order, like the spacecraft control
              panel and the silhouettes of instruments for studying alien
              surfaces, inherits the graphic plots of classical and modern
              sci-fi.
            </p>
            <p>
              The identity is equipped with an automatic generator of motion and
              static graphics — the tool, that allows quickly creating of
              various communication media. Together with a broad and flexible
              color palette it helped distinguish product areas across six areas
              of different themes.
            </p>
          </section>
        </div>
        <div className="project-gallery2">
          <img
            className="project-gallery__item"
            src="https://images.unsplash.com/photo-1587129792339-b94591f3d74d?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODYyMTk4fHxlbnwwfHx8fHw%3D"
            alt=""
            style={{ width: "15%" }}
          />
        </div>
        <div className="project-team">
          <h5 className="project-team__title">TEAM</h5>
          <div className="project-team__item">
            <p className="project-team__item_job">Design Director</p>
            <p className="project-team__item_name">Anna Katsur</p>
          </div>
        </div>
      </div>
      <div className="project-switch">
        <h4 className="project-switch__title">
          Art Direction for the Rebranding of the Fin-Tech Product Ecosystem
        </h4>
        <p className="project-switch__number">/</p>
      </div>
    </div>
  );
};

export default ProjectPage;
