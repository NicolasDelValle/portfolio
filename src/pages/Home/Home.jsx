import { useRef, useEffect, useState, useMemo } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeStyle.css";
import "./ProjectsSection.css";

import Section from "../../components/Secation/Section";
import NavBar from "../../components/NavBar/NavBar";
import Toast from "../../components/Toast/Toast";

import downloadArrow from "../../assets/download-arrow.svg";
import copyIcon from "../../assets/copy-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import nicolas from "../../assets/Nicolas.png";
import nicolsaWhiteBorder from "../../assets/NicolasWhiteBorder.png";

import losiLogo from "../../assets/project-images/losi/losi-logo.png";

import bootstrapIcon from "../../assets/tech-icons/bootstrap.svg";
import css3Icon from "../../assets/tech-icons/css3.svg";
import expressIcon from "../../assets/tech-icons/express.svg";
import html5Icon from "../../assets/tech-icons/html5.svg";
import reactIcon from "../../assets/tech-icons/react.svg";
import sequelizeIcon from "../../assets/tech-icons/sequelize.svg";
import vueIcon from "../../assets/tech-icons/vue.svg";
import reduxIcon from "../../assets/tech-icons/redux.svg";

import igIcon from "../../assets/contact-icons/ig-icon.svg";
import linkedinIcon from "../../assets/contact-icons/linkedin-icon.svg";
import mailIcon from "../../assets/contact-icons/mail-icon.svg";
import telephomeIcon from "../../assets/contact-icons/telephone-icon.svg";
import ubicationIcon from "../../assets/contact-icons/ubication-icon.svg";

import scrollWhite from "../../assets/Scroll-Down-white.svg";
import scrollPurple from "../../assets/Scroll-Down-purple.svg";

function Home() {
  const homeRef = useRef(null);
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeRefIsInView = useInView(homeRef, { once: true });

  const [home, setHome] = useState(false);
  const [me, setMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  const HandleCopyEmail = () => {
    navigator.clipboard
      .writeText("contact@nicolasdelvalle.dev")
      .then(setShow(true));
  };

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.8) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }

      setHome(homeRef.current.classList.contains("active"));
      setMe(meRef.current.classList.contains("active"));
      setProjects(projectsRef.current.classList.contains("active"));
      setContact(contactRef.current.classList.contains("active"));
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const meSectionSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
          autoplaySpeed: 1500,
        },
      },
    ],
  };

  const observer = new IntersectionObserver(callbackFunction, options);

  useEffect(() => {
    observer.observe(homeRef.current);
    observer.observe(meRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);
  });

  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  const techList = useMemo(
    () => [
      {
        icon: bootstrapIcon,
        alt: "known technology: Bootstrap",
        name: "Bootstrap",
        iconOnly: false,
      },
      {
        icon: css3Icon,
        alt: "known technology: CSS3",
        name: "CSS3",
        iconOnly: false,
      },
      {
        icon: html5Icon,
        alt: "known technology: HTML5",
        name: "HTML5",
        iconOnly: false,
      },
      {
        icon: expressIcon,
        alt: "known technology: Express.js",
        name: "Express.JS",
        iconOnly: false,
      },
      {
        icon: reactIcon,
        alt: "known technology: React.js",
        name: "React.JS",
        iconOnly: false,
      },
      {
        icon: reactIcon,
        alt: "known technology: React Native",
        name: "React Native",
        iconOnly: false,
      },
      {
        icon: sequelizeIcon,
        alt: "known technology: Sequelize",
        name: "Sequelize",
        iconOnly: false,
      },
      {
        icon: vueIcon,
        alt: "known technology: Vue.js",
        name: "Vue.JS",
        iconOnly: false,
      },
      {
        icon: reduxIcon,
        alt: "known technology: Redux",
        name: "Redux",
        iconOnly: false,
      },
    ],
    []
  );

  const techHandler = useMemo(() => {
    return techList.map((element) => {
      if (element.iconOnly) {
        return (
          <div key={element.name}>
            <div>
              <div className="me-section-slider-item-container">
                <div className="me-section-slider-item">
                  <img
                    className="me-section-slider-item-tech-only-image default-shadow"
                    src={element.icon}
                    alt={element.alt}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div key={element.name}>
          <div>
            <div className="me-section-slider-item-container">
              <div className="me-section-slider-item">
                <img
                  className="me-section-slider-item-tech-image default-shadow"
                  src={element.icon}
                  alt={element.alt}
                />
                <span className="me-section-slider-item-tech-name default-shadow">
                  {element.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [techList]);

  const navigation = useMemo(
    () => ({
      sections: {
        home: {
          ref: homeRef,
          state: home,
        },
        me: {
          ref: meRef,
          state: me,
        },
        projects: {
          ref: projectsRef,
          state: projects,
        },
        contact: {
          ref: contactRef,
          state: contact,
        },
      },
      action: scrollTo,
    }),
    [home, me, projects, contact]
  );

  const tabeIndexThenProjects = 29;

  return (
    <>
      <NavBar navigation={navigation} />
      <div className="sections-container ">
        <Section>
          <div
            tabIndex={11}
            id="home"
            className="home-name-container"
            ref={homeRef}
          >
            <span
              style={{
                opacity: homeRefIsInView ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="home-name default-shadow z-i-0 ticker2"
            >
              NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS -
              NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS -
            </span>
            <img
              style={{
                transform: homeRefIsInView ? "none" : "translateY(200px)",
                opacity: homeRefIsInView ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="nico-img default-shadow z-i-1"
              src={nicolas}
              alt=""
            />

            <span
              style={{
                opacity: homeRefIsInView ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="home-name default-shadow z-i-2 ticker1"
            >
              DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL
              VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE
              - DEL VALLE -
            </span>
            <img className="scroll-down-img z-i-2" src={scrollWhite} alt="" />
          </div>
        </Section>

        <Section backgroundColor="bg-main-color">
          <>
            <div
              tabIndex={12}
              id="me"
              className="content-container"
              ref={meRef}
            >
              <div className="content font-main-white">
                <div className="me-section-card-container bg-main-color-2 default-shadow">
                  <img
                    className="me-section-nico-img"
                    src={nicolsaWhiteBorder}
                    alt="Nicolas del Valle, Desarrollador web Full Stack"
                  />

                  <div className="me-section-card-text-container">
                    <div className="me-section-name-text">
                      <span>{t("meSection.hi, i'm")}</span>
                      <h1 tabIndex={13} className="font-main-attention-color">
                        Nicolas Del Valle
                      </h1>
                    </div>
                    <span tabIndex={14} className="me-section-line-2">
                      {t("meSection.full stack web developer")}
                    </span>
                    <div className="me-section-lerner-text">
                      <span>{t("meSection.and")}</span>
                      <span
                        tabIndex={15}
                        className="font-main-attention-color me-section-p-l-5"
                      >
                        {t("meSection.learner")}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  tabIndex={16}
                  className="me-section-tech-text default-shadow"
                  ref={meRef}
                >
                  {t("meSection.a few things I can help you with")}
                </span>

                <div className="me-section-slider-container bg-main-color-2">
                  <div className="me-section-slider-container-front" />
                  <Slider
                    className="me-section-slider-item-container"
                    {...meSectionSliderSettings}
                  >
                    {techHandler}
                  </Slider>
                </div>

                <span
                  tabIndex={17}
                  className="me-section-then-tech-text default-shadow"
                  ref={meRef}
                >
                  {t(
                    "meSection.if your needs are not on that list we can talk about it, i am"
                  )}
                  <span className="font-main-attention-color me-section-p-l-5">
                    {t("meSection.flexible")}
                  </span>
                </span>

                <a
                  tabIndex={18}
                  href="./CV - Nicolás Del Valle - 2024.pdf"
                  download="Nicolas Del Valle - CV.pdf"
                  className="me-section-download-cv default-shadow"
                >
                  <img
                    className="me-section-download-arrow"
                    src={downloadArrow}
                    alt=""
                  />
                  {t("meSection.download cv")}
                </a>
              </div>
            </div>
            <div className="me-section-scroll-container">
              <img className="scroll-down-img z-i-2" src={scrollWhite} alt="" />
            </div>
          </>
        </Section>

        <Section>
          <>
            <div
              tabIndex={19}
              id="projects"
              className="content-container"
              ref={projectsRef}
            >
              <div className="content project-section">
                <div
                  tabIndex={20}
                  className="project-section-title font-main-color"
                >
                  {t("projectsSection.projects i have learned from")}
                </div>
                <div className="project-section-card-container">
                  <a
                    tabIndex={21}
                    className="card default-shadow"
                    style={{ backgroundColor: "#000" }}
                    href="https://losi.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="card-banner-image"
                      src={losiLogo}
                      alt="LOSI e-commerce"
                    />

                    <div className="card-body font-main-white">
                      <span tabIndex={22} className="card-date default-shadow">
                        22/03/22 - 28/03/22
                      </span>
                      <span tabIndex={23} className="card-title default-shadow">
                        LOSI E-Commerce
                      </span>
                      <span
                        tabIndex={24}
                        className="card-description default-shadow"
                      >
                        {t("projectsSection.projects.losi.desc")}
                      </span>
                      <div className="card-body-bottom-conainer default-shadow">
                        <span className="card-tech-text">
                          {t("projectsSection.tech")}
                        </span>
                        <div className="card-tech">
                          <ul className="tech-list">
                            <li className="tech-item">
                              <img
                                tabIndex={25}
                                className="project-item-tech-image default-shadow"
                                src={reactIcon}
                                alt="React.js"
                                title="React.Js"
                              />
                            </li>
                            <li className="tech-item">
                              <img
                                tabIndex={26}
                                className="project-item-tech-image default-shadow"
                                src={bootstrapIcon}
                                alt="Bootstrap"
                                title="Bootstrap"
                              />
                            </li>
                            <li className="tech-item">
                              <img
                                tabIndex={27}
                                className="project-item-tech-image default-shadow"
                                src={sequelizeIcon}
                                alt="Sequelize"
                                title="Sequelize"
                              />
                            </li>
                            <li className="tech-item">
                              <img
                                tabIndex={28}
                                className="project-item-tech-image default-shadow"
                                src={expressIcon}
                                alt="Express.js"
                                title="Express.Js"
                              />
                            </li>
                            <li className="tech-item">
                              <img
                                tabIndex={29}
                                className="project-item-tech-image default-shadow"
                                src={reduxIcon}
                                alt="Redux"
                                title="Redux"
                              />
                            </li>
                          </ul>
                          <img
                            className="card-link-img"
                            src={externalLinkIcon}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="me-section-scroll-container">
              <img
                className="scroll-down-img z-i-2"
                src={scrollPurple}
                alt=""
              />
            </div>
          </>
        </Section>

        <Section backgroundColor="bg-main-color">
          <div
            tabIndex={tabeIndexThenProjects + 1}
            id="contact"
            className="content-container"
            ref={contactRef}
          >
            <div className="content font-main-white">
              <div className="contact-section-info-container">
                <div className="contact-section-title-container">
                  <span
                    tabIndex={tabeIndexThenProjects + 2}
                    className="contact-section-title default-shadow"
                  >
                    {t("contactSection.so,")}
                    <span
                      tabIndex={tabeIndexThenProjects + 3}
                      className="font-main-attention-color me-section-p-l-5"
                    >
                      {t("contactSection.can i help you")}
                    </span>
                    ?
                  </span>
                </div>
                <div className="contact-section-item-container">
                  <img
                    className="contact-section-logos default-shadow "
                    src={ubicationIcon}
                    alt=""
                  />
                  <span
                    tabIndex={tabeIndexThenProjects + 4}
                    className="contact-section-item-text"
                  >
                    Montevideo, Uruguay
                  </span>
                </div>

                <div className="contact-section-item-container">
                  <img
                    className="default-shadow contact-section-logos"
                    src={mailIcon}
                    alt=""
                  />
                  <a
                    tabIndex={tabeIndexThenProjects + 5}
                    title="contact@nicolasdelvalle.dev"
                    href="mailto:contact@nicolasdelvalle.dev"
                    rel="noreferrer"
                  >
                    <span className="contact-section-item-text contact-section-item-link contact-section-item-link-underline">
                      contact@nicolasdelvalle.dev
                    </span>
                  </a>
                  <button
                    tabIndex={tabeIndexThenProjects + 6}
                    title="Copy Email"
                    className="contact-section-copy-button bg-main-color-2   default-shadow"
                    onClick={HandleCopyEmail}
                  >
                    <img src={copyIcon} alt="" />
                  </button>
                </div>
                <div className="contact-section-item-container">
                  <img
                    className="default-shadow contact-section-logos"
                    src={telephomeIcon}
                    alt=""
                  />
                  <span
                    tabIndex={tabeIndexThenProjects + 6}
                    className="contact-section-item-text"
                  >
                    +598 97 688 183
                  </span>
                </div>
                <div className="contact-section-item-container ">
                  <img
                    className="default-shadow contact-section-logos"
                    src={linkedinIcon}
                    alt=""
                  />
                  <a
                    tabIndex={tabeIndexThenProjects + 7}
                    title="Linkedin"
                    className="contact-section-item-text contact-section-item-link font-main-white"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/nico-del-valle-dev/"
                    target="_blank"
                  >
                    <span className=" contact-section-item-link-underline">
                      Nicolas del valle
                    </span>
                    <img src={externalLinkIcon} alt="" />
                  </a>
                </div>
                <div className="contact-section-item-container">
                  <img
                    className="default-shadow contact-section-logos"
                    src={igIcon}
                    alt=""
                  />

                  <a
                    tabIndex={tabeIndexThenProjects + 8}
                    title="Instagram"
                    className="contact-section-item-text contact-section-item-link font-main-white"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/nicolasdelvalledev/"
                  >
                    <span className=" contact-section-item-link-underline">
                      @nicolasdelvalledev
                    </span>
                    <img src={externalLinkIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Toast
            show={show}
            onClose={setShow}
            delay={1000}
            text={t("contactSection.copied text")}
          />
        </Section>
      </div>
    </>
  );
}

export default Home;
