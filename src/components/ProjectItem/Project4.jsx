import "./Project.scss";
import galleryItem from "../../assets/images/project4-pic1.png";
import galleryItem2 from "../../assets/images/project4-pic2.png";
import galleryItem3 from "../../assets/images/project4-pic3.png";
import galleryItem4 from "../../assets/images/project4-pic4.png";
import galleryItem5 from "../../assets/images/project4-pic5.png";
import galleryItem6 from "../../assets/images/project4-pic6.png";
import galleryItem7 from "../../assets/images/project4-pic7.png";
import galleryItem8 from "../../assets/images/project4-pic8.png";
import galleryItem9 from "../../assets/images/project4-pic9.png";
import galleryItem10 from "../../assets/images/project4-pic10.png";
import galleryItem11 from "../../assets/images/project4-pic11.png";
import galleryItem12 from "../../assets/images/project4-pic12.png";
import galleryItem13 from "../../assets/images/project4-pic13.png";
import galleryItem14 from "../../assets/images/project4-pic14.png";

const Project4 = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-header__title">
          DEVELOPMENT OF AN ACCESSORIES COLLECTION
        </h2>
        <p className="project-header__number">/04</p>
        <div className="project-header__logo">
          <img
            className="project-gallery__img"
            src={galleryItem}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="project-article">
        <section className="project-article__item1">
          <h6 className="project-article__title">Project</h6>
          <p>Creation of a Welcome-Pack for New Employees</p>
          <h6 className="project-article__title">Project Objective</h6>
          <p>
            Each new employee encountered the issue of receiving disjointed
            items without a unified concept. Our goal was to create an
            integrated and meaningful welcome-pack that reflects Yandex's brand
            platform and demonstrates the company's care for its employees from
            their first day at work.
          </p>
        </section>
        <section className="project-article__item2">
          <h6 className="project-article__title">Conceptual Solution</h6>
          <p>
            We developed a unified merch concept where each element of the new
            employee's package was closely linked with others, forming a
            cohesive whole. This symbolises Yandex's key idea—collaborating,
            seeking new solutions, and creating together.
          </p>
          <h6 className="project-article__title">Core Idea</h6>
          <p>
            We created a system where each element of the welcome-pack can be
            connected to others using various attachment elements. This not only
            physically unites the items but also serves as a metaphor for
            teamwork at Yandex.
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
        <section className="project-article__item1">
          <h6 className="project-article__title">Project Features</h6>
          <p>Personalisation</p>
          <p>
            The welcome-pack gives new employees their first experience of
            customisation, offering choices of elements "To Attach To", "To Hook
            With", and "Other Options".
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
        <img
          className="project-gallery__img"
          src={galleryItem5}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-article">
        <section className="project-article__item1">
          <p>Universal Design</p>
          <p>
            The bag, part of the welcome-pack, is designed to be functional and
            stylish. It is available in three colour schemes and includes a
            small detachable pouch for greater versatility.
          </p>
        </section>
      </div>
      <div className="project-gallery">
        <img
          className="project-gallery__img"
          src={galleryItem6}
          alt=""
          width="100%"
          height="100%"
        />
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
        <section className="project-article__item1">
          <p>Practicality and Usefulness</p>
          <p>
            The contents of the bag were planned based on feedback from new
            hires, including all the necessary items for a comfortable start in
            the new role.
          </p>
          <p>Implementation of the Project</p>
          <p>
            First impressions are crucial. Yandex's welcome-pack is designed to
            reflect the corporate values and culture of the company, as well as
            to provide new employees with the necessary tools for successful
            integration into the team from day one.
          </p>
        </section>
      </div>
      <div className="project-gallery">
        <img
          className="project-gallery__img"
          src={galleryItem9}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img"
          src={galleryItem10}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img"
          src={galleryItem11}
          alt=""
          width="100%"
          height="100%"
        />{" "}
        <img
          className="project-gallery__img"
          src={galleryItem12}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img"
          src={galleryItem13}
          alt=""
          width="100%"
          height="100%"
        />
        <img
          className="project-gallery__img"
          src={galleryItem14}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="project-team">
        <h5 className="project-team__title">TEAM</h5>
        <div className="project-team__container">
          <div className="project-team__item">
            <p className="project-team__item_name">Anna Katsur</p>
          </div>
        </div>
      </div>
      <button className="project-switch">
        <h4 className="project-switch__title">
          CREATION OF A BRAND AND VISUAL IDENTITY FOR AN HR BRAND
        </h4>
        <p className="project-switch__number">/05</p>
      </button>
    </div>
  );
};

export default Project4;
