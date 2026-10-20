import Icon from "./Icon";
const email = "moh.samir2572976@gmail.com";
export default function Contact({ t, language }) {
  const links = [
    {
      label: "WhatsApp",
      value: "+966 56 391 6760",
      href: "https://wa.me/966563916760",
      icon: "whatsapp",
    },
    {
      label: "LinkedIn",
      value: "Mohammed Samir",
      href: "https://www.linkedin.com/in/mohammed-samir-13657a2ba/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "mohammed111001",
      href: "https://github.com/mohammed111001",
      icon: "github",
    },
  ];
  return (
    <>
      <section
        className="contact-section section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <p className="eyebrow">
            <span>06 /</span> {t.contact.label}
          </p>
          <div className="contact-heading">
            <h2 id="contact-title">
              {language === "ar" ? (
                <>
                  لنبنِ شيئًا
                  <br />
                  <em>يستحق.</em>
                </>
              ) : (
                <>
                  Let’s build
                  <br />
                  something <em>useful.</em>
                </>
              )}
            </h2>
            <div className="contact-note">
              <p>{t.contact.intro}</p>
              <a
                className="text-link"
                href={`/mohammed-samir-profile-${language}.pdf`}
                download
              >
                {t.resumeLabel}
                <Icon name="down" size={16} />
              </a>
              <p>
                <Icon name="pin" size={16} />
                {t.contact.locationValue}
              </p>
            </div>
          </div>
          <a className="contact-email" href={`mailto:${email}`}>
            <span className="email-label">{t.contact.email}</span>
            <span dir="ltr">{email}</span>
            <span className="email-arrow">
              <Icon name="arrow" size={29} />
            </span>
          </a>
          <div className="contact-links">
            {links.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={link.icon} size={21} />
                <div>
                  <span>{link.label}</span>
                  <small dir="ltr">{link.value}</small>
                </div>
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer container">
        <a className="brand footer-brand" href="#home">
          <span className="monogram" dir="ltr">
            ms.
          </span>
          <span>{t.name}</span>
        </a>
        <span>
          © {new Date().getFullYear()} · {t.footer.rights}
        </span>
        <a href="#home" className="back-top">
          {language === "ar" ? "العودة للأعلى" : "Back to top"}
          <Icon name="arrow" size={16} />
        </a>
      </footer>
    </>
  );
}
