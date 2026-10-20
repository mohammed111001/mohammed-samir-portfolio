import { useEffect, useState } from "react";
import { content } from "./data/content";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Projects from "./components/Projects";
import {
  About,
  Experience,
  Skills,
  Education,
} from "./components/ProfileSections";
import Contact from "./components/Contact";
function readPreference(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}
export default function App() {
  const [language, setLanguage] = useState(() =>
    readPreference("ms-language", ["en", "ar"], "en"),
  );
  const [theme, setTheme] = useState(() =>
    readPreference("ms-theme", ["dark", "light"], "dark"),
  );
  const t = content[language];
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    root.dataset.theme = theme;
    document.title = `${t.name} — ${t.title}`;
    document.querySelector('meta[name="description"]').content = t.description;
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#141513" : "#f7f5ef";
    try {
      localStorage.setItem("ms-language", language);
      localStorage.setItem("ms-theme", theme);
    } catch {
      /* Preferences remain usable when storage is restricted. */
    }
  }, [language, theme, t]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skipLink}
      </a>
      <Header
        t={t}
        language={language}
        theme={theme}
        onLanguage={() =>
          setLanguage((current) => (current === "en" ? "ar" : "en"))
        }
        onTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
      <main id="main-content" tabIndex="-1">
        <section
          className="hero container"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="hero-intro">
              <span className="short-rule" />
              {t.heroIntro || t.name}
            </p>
            <h1 id="hero-title">
              {t.heroNameParts[0]}
              <br />
              <em>
                {t.heroNameParts[1]}
                <span className="name-period" aria-hidden="true">
                  .
                </span>
              </em>
            </h1>
            <p className="hero-value">{t.heroValueLead}</p>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.heroProjects}
                <Icon name="arrow" size={19} />
              </a>
              <a
                className="button button-quiet"
                href={`/mohammed-samir-profile-${language}.pdf`}
                download
              >
                {t.resumeLabel}
                <Icon name="down" size={18} />
              </a>
            </div>
            <div className="hero-stack">
              <span>{t.heroToolsLabel}</span>
              <div dir="ltr">
                <b>React</b>
                <i />
                <b>Python</b>
                <i />
                <b>Odoo</b>
              </div>
            </div>
          </div>
          <div className="portrait-composition">
            <div className="portrait-index" dir="ltr">
              <span>MOHAMMED SAMIR</span>
              <span>
                {language === "ar" ? "معرض الأعمال / 2026" : "PORTFOLIO / 2026"}
              </span>
            </div>
            <div className="portrait-frame">
              <img
                src="/profile-studio.webp"
                width="1122"
                height="1402"
                alt={t.photoAlt}
                fetchPriority="high"
              />
              <div className="portrait-shade" />
              <div className="portrait-caption">
                <Icon name="pin" size={16} />
                <span>{t.heroBasedIn}</span>
              </div>
            </div>
            <div className="portrait-label" aria-hidden="true" dir="ltr">
              SOFTWARE. SYSTEMS. PEOPLE.
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              <span className="status-dot" />
              {t.location}
            </p>
            <a href="#projects">
              {language === "ar" ? "اكتشف الأعمال" : "SCROLL TO EXPLORE"}
              <Icon name="down" size={15} />
            </a>
            <span>{t.heroEyebrow}</span>
          </div>
        </section>
        <Projects t={t} language={language} />
        <About t={t} language={language} />
        <Experience t={t} language={language} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} language={language} />
      </main>
    </>
  );
}
