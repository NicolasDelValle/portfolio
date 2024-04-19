import { useRef, useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

import "./HomeStyle.css";
import "./ProjectsSection.css";

import Section from "../../components/Secation/Section";
import NavBar from "../../components/NavBar/NavBar";
import Toast from "../../components/Toast/Toast";

import mainWhite2Rectangle from "../../assets/main-white-2-rectangle.svg";
import downloadArrow from "../../assets/download-arrow.svg";
import copyIcon from "../../assets/copy-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import nicolas from "../../assets/Nicolas.png";
import nicolsaWhiteBorder from "../../assets/NicolasWhiteBorder.png";

/* import losiDesktopImg1 from "../../assets/project-images/losi/losi-desktop.png";
import losiDesktopImg2 from "../../assets/project-images/losi/losi-desktop-2.png"; */
import losiDesktopImg3 from "../../assets/project-images/losi/losi-desktop-3.png";

import bootstrapIcon from "../../assets/tech-icons/bootstrap.svg";
import css3Icon from "../../assets/tech-icons/css3.svg";
import expressIcon from "../../assets/tech-icons/express.svg";
import html5Icon from "../../assets/tech-icons/html5.svg";
import reactIcon from "../../assets/tech-icons/react.svg";
import sequelizeIcon from "../../assets/tech-icons/sequelize.svg";
import vueIcon from "../../assets/tech-icons/vue.svg";

import igIcon from "../../assets/contact-icons/ig-icon.svg";
import linkedinIcon from "../../assets/contact-icons/linkedin-icon.svg";
import mailIcon from "../../assets/contact-icons/mail-icon.svg";
import telephomeIcon from "../../assets/contact-icons/telephone-icon.svg";
import ubicationIcon from "../../assets/contact-icons/ubication-icon.svg";

import scrollWhite from "../../assets/Scroll-Down-white.svg";
import moveIcon from "../../assets/move-icon.svg";

function Home() {
  const homeRef = useRef(null);
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const constraintsRef = useRef(null);

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
        iconOnly: true,
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

  return (
    <>
      <NavBar navigation={navigation} />
      <div className="sections-container ">
        <Section>
          <div id="home" className="home-name-container" ref={homeRef}>
            <span className="home-name default-shadow z-i-0 ticker2">
              NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS -
              NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS - NICOLAS -
            </span>
            <img
              className="nico-img default-shadow z-i-1"
              src={nicolas}
              alt=""
            />
            <span className="home-name default-shadow z-i-2 ticker1">
              DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL
              VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE - DEL VALLE
              - DEL VALLE -
            </span>
            <img className="scroll-down-img z-i-2" src={scrollWhite} alt="" />
          </div>
        </Section>
        <Section backgroundColor="bg-main-color">
          <>
            <div className="content-container" ref={meRef}>
              <div className="content font-main-white">
                <div className="me-section-card-container default-shadow">
                  <img
                    className="me-section-nico-img"
                    src={nicolsaWhiteBorder}
                    alt="Nicolas del Valle, Desarrollador web Full Stack"
                  />

                  <div className="me-section-card-text-container">
                    <div className="me-section-name-text">
                      <span>{t("meSection.hi, i'm")}</span>
                      <h1 tabIndex={11} className="font-main-attention-color">
                        Nicolas Del Valle
                      </h1>
                    </div>
                    <span tabIndex={12} className="me-section-line-2">
                      {t("meSection.full stack web developer")}
                    </span>
                    <div className="me-section-lerner-text">
                      <span>{t("meSection.and")}</span>
                      <span
                        tabIndex={13}
                        className="font-main-attention-color me-section-p-l-5"
                      >
                        {t("meSection.learner")}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  tabIndex={14}
                  className="me-section-tech-text default-shadow"
                  ref={meRef}
                >
                  {t("meSection.a few things I can help you with")}
                </span>

                <div className="me-section-slider-container ">
                  <div className="me-section-slider-container-front" />
                  <Slider
                    key="juan"
                    className="me-section-slider-item-container"
                    {...meSectionSliderSettings}
                  >
                    {techHandler}
                  </Slider>
                </div>

                <span
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
          <div id="projects" className="content-container" ref={projectsRef}>
            <div className="content">
              <motion.div
                className="motion-container bg-main-white-2"
                ref={constraintsRef}
              >
                <motion.div
                  className="motion-item"
                  drag
                  dragConstraints={constraintsRef}
                >
                  <div className="project-section-title bg-main-white">
                    {t("projectsSection.projects i have learned from")}
                    <img src={moveIcon} alt="" />
                  </div>
                  <div className="default-shadow card-container bg-main-white project-losi">
                    <div>
                      {/* <img
                        className="project-image"
                        src={losiDesktopImg1}
                        alt=""
                      /> */}
                      <img
                        className="project-image"
                        src={losiDesktopImg3}
                        alt=""
                      />

                      {/* <img
                        className="project-image"
                        src={losiDesktopImg2}
                        alt=""
                      /> */}
                    </div>

                    <div className="bg-main-color font-main-white">
                      losi e-commerce
                    </div>
                    <a
                      href="https://losi.vercel.app/"
                      className="bg-main-color "
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img src={externalLinkIcon} alt="" />
                      <span className="font-main-white">losi.vercel.app</span>
                    </a>
                    <div className="bg-main-color font-main-white">
                      {t("projectsSection.projects.losi.desc")}
                    </div>
                    <div className="bg-main-color font-main-white">
                      React - Bootstrap - Sequelize - Redux - JWT - Express
                    </div>
                  </div>

                  <div className="default-shadow wip-block">
                    <span className="wip-block-text font-main-white">
                      {t("projectsSection.work in progress...")}
                    </span>
                  </div>
                  <div className="default-shadow wip-block-2">
                    <span className="wip-block-text font-main-white">
                      {t("projectsSection.work in progress...")}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>
        <Section backgroundColor="bg-main-color">
          <img
            src={mainWhite2Rectangle}
            alt=""
            className="decorative-rectengle default-shadow"
          />
          <div id="contact" className="content-container" ref={contactRef}>
            <div className="content font-main-white">
              <div className="contact-section-info-container">
                <div className="contact-section-title-container">
                  <span className="contact-section-title default-shadow">
                    {t("contactSection.so,")}
                    <span className="font-main-attention-color me-section-p-l-5">
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
                  <span className="contact-section-item-text">
                    Montevideo, Uruguay
                  </span>
                </div>

                <div className="contact-section-item-container">
                  <img
                    className="default-shadow contact-section-logos"
                    src={mailIcon}
                    alt=""
                  />
                  <span className="contact-section-item-text contact-section-item-link">
                    contact@nicolasdelvalle.dev
                  </span>

                  <button
                    className="contact-section-copy-button bg-main-color-2  default-shadow"
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
                  <span className="contact-section-item-text">
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
