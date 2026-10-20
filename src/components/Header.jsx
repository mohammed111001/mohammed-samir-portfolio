import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function Header({ t, language, theme, onLanguage, onTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef(null);
  const header = useRef(null);
  const links = ["projects", "about", "experience", "skills"];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    header.current?.querySelector("#main-navigation a")?.focus();
    function closeOutside(event) {
      if (!header.current?.contains(event.target)) setMenuOpen(false);
    }
    function closeEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    }
    const query = window.matchMedia("(min-width: 1001px)");
    const closeWide = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeEscape);
    query.addEventListener("change", closeWide);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeEscape);
      query.removeEventListener("change", closeWide);
    };
  }, [menuOpen]);
  return (
    <header className="site-header" ref={header}>
      <div className="header-inner container">
        <a
          className="brand"
          href="#home"
          aria-label={t.name}
          onClick={() => setMenuOpen(false)}
        >
          <span className="monogram" aria-hidden="true" dir="ltr">
            m<span>s</span>.
          </span>
          <span className="brand-name">{t.name}</span>
        </a>
        <nav
          id="main-navigation"
          className={`site-nav ${menuOpen ? "is-open" : ""}`}
          aria-label={
            language === "ar" ? "القائمة الرئيسية" : "Main navigation"
          }
        >
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={active === id ? "location" : undefined}
            >
              {t.nav[id]}
            </a>
          ))}
          <a
            className="mobile-nav-link"
            href="#education"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.education}
          </a>
          <a
            className="mobile-nav-link"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact}
            <Icon name="arrow" size={16} />
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="language-button"
            type="button"
            onClick={() => {
              onLanguage();
              setMenuOpen(false);
            }}
            aria-label={
              language === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
            lang={language === "ar" ? "en" : "ar"}
          >
            {language === "ar" ? "EN" : "عربي"}
          </button>
          <span className="action-divider" aria-hidden="true" />
          <button
            className="icon-button theme-button"
            type="button"
            onClick={onTheme}
            aria-label={
              theme === "dark"
                ? language === "ar"
                  ? "تفعيل المظهر الفاتح"
                  : "Switch to light theme"
                : language === "ar"
                  ? "تفعيل المظهر الداكن"
                  : "Switch to dark theme"
            }
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
          </button>
          <a className="header-contact" href="#contact">
            {t.nav.contact}
            <Icon name="arrow" size={15} />
          </a>
          <button
            ref={toggle}
            className="icon-button menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
