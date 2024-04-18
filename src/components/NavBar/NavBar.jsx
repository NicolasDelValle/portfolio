import { useState, useEffect, useCallback } from "react";
import "./NavBarStyle.css";
import { useTranslation } from "react-i18next";
import nicoDev from "../../assets/nico_dev.svg";

function NavBar({ navigation }) {
  const [en, setEn] = useState(false);
  const [es, setEs] = useState(false);

  const { sections, action } = navigation;

  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const handleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    setEn(i18n.language === "en");
    setEs(i18n.language === "es");
  }, [i18n.language]);

  return (
    <nav className="navBar-container">
      <div className="navBar-content">
        <div
          className={`navBar bg-main-white default-shadow ${
            menuOpen ? "j-c-center" : ""
          }`}
        >
          <img
            onClick={() => action(sections.home.ref)}
            className={`${menuOpen ? "responsive-2" : ""}`}
            src={nicoDev}
            alt="Portfolio - Nicolas del valle"
            tabIndex={1}
          />
          <div className="menu-container" title="Menu">
            <button
              onClick={() => handleMenu()}
              className={`menu-element p-l-5 responsive-1`}
              tabIndex={2}
            >
              {menuOpen ? "_" : "web_dev"}
            </button>
            <label className="responsive-2">web_dev</label>
            <label className={`${menuOpen ? "menu-size-scaling" : ""} `}>
              (
            </label>
            <button
              onClick={() => handleMenu()}
              className={`menu-element p-l-5 active-menu-element menu-dots ${
                menuOpen ? "responsive-2" : ""
              }`}
            >
              ...
            </button>
            <button
              onClick={() => action(sections.home.ref)}
              tabIndex={3}
              className={`menu-element ${
                menuOpen ? "menu-size-scaling" : "menu-option"
              } ${sections.home.state ? "active-menu-element" : ""} p-l-5`}
            >
              {t("navBar.home")}
            </button>
            <label className={` ${menuOpen ? "menu-size-scaling" : "deco"}`}>
              ,
            </label>
            <button
              onClick={() => action(sections.me.ref)}
              tabIndex={4}
              className={`menu-element ${
                menuOpen ? "menu-size-scaling" : "menu-option"
              } ${sections.me.state ? "active-menu-element" : ""} p-l-5`}
            >
              {t("navBar.me")}
            </button>
            <label className={` ${menuOpen ? "menu-size-scaling" : "deco"}`}>
              ,
            </label>
            <button
              onClick={() => action(sections.projects.ref)}
              tabIndex={5}
              className={`menu-element ${
                menuOpen ? "menu-size-scaling" : "menu-option"
              } ${sections.projects.state ? "active-menu-element" : ""} p-l-5`}
            >
              {t("navBar.projects")}
            </button>
            <label className={` ${menuOpen ? "menu-size-scaling" : "deco"}`}>
              ,
            </label>
            <button
              onClick={() => action(sections.contact.ref)}
              tabIndex={6}
              className={`menu-element ${
                menuOpen ? "menu-size-scaling" : "menu-option"
              } ${sections.contact.state ? "active-menu-element" : ""} p-l-5`}
            >
              {t("navBar.contact")}
            </button>
            <label
              className={`responsive-3 ${
                menuOpen ? "menu-size-scaling" : "deco"
              }`}
            >
              ,
            </label>
            <label
              className={`p-l-5 responsive-3 ${
                menuOpen ? "menu-size-scaling" : "deco"
              }`}
            >
              [
            </label>
            <button
              className={`menu-element ${
                menuOpen ? "menu-size-scaling" : "menu-option"
              } p-l-5 responsive-3 ${en ? "active-menu-element" : ""}`}
              onClick={() => changeLanguage("en")}
              tabIndex={7}
            >
              En
            </button>
            <label
              className={`responsive-3 ${
                menuOpen ? "menu-size-scaling" : "deco"
              }`}
            >
              ,
            </label>
            <button
              className={`menu-element ${
                menuOpen ? "menu-size-scaling" : "menu-option"
              } p-l-5 responsive-3 ${es ? "active-menu-element" : ""}`}
              onClick={() => changeLanguage("es")}
              tabIndex={8}
            >
              Es
            </button>
            <label
              className={`p-l-5 responsive-3 ${
                menuOpen ? "menu-size-scaling" : "deco"
              }`}
            >
              ]
            </label>
            <label className={`${menuOpen ? "menu-size-scaling" : ""} p-l-5`}>
              )
            </label>
          </div>

          <div className="menu-container responsive-0" title="Menu">
            <label>web_dev(</label>
            <button className={`menu-element p-l-5`}>{t("navBar.home")}</button>
            ,<button className={`menu-element p-l-5`}>{t("navBar.me")}</button>,
            <button className={`menu-element p-l-5`}>
              {t("navBar.projects")}
            </button>
            ,
            <button className={`menu-element p-l-5`}>
              {t("navBar.contact")}
            </button>
            <label>,</label>
            <label className="p-l-5">[</label>
            <button
              tabIndex={9}
              className={`menu-element p-l-5 ${
                en ? "active-menu-element" : ""
              }`}
              onClick={() => changeLanguage("en")}
            >
              En
            </button>
            <label>,</label>
            <button
              tabIndex={10}
              className={`menu-element p-l-5 ${
                es ? "active-menu-element" : ""
              }`}
              onClick={() => changeLanguage("es")}
            >
              Es
            </button>
            <label className="p-l-5">]</label>
            <label className="p-l-5">)</label>
          </div>
          <div className="menu-container leng-menu" title="Lenguaje">
            <label>leng(</label>
            <button
              className={`menu-element p-l-5 ${
                en ? "active-menu-element" : ""
              }`}
              onClick={() => changeLanguage("en")}
            >
              En
            </button>
            ,
            <button
              className={`menu-element p-l-5 ${
                es ? "active-menu-element" : ""
              }`}
              onClick={() => changeLanguage("es")}
            >
              Es
            </button>
            <label className="p-l-5">)</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
