import Icon from "./Icon";
export function About({ t, language }) {
  return (
    <section
      className="about-section section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div className="about-heading">
          <p className="eyebrow">
            <span>02 /</span> {t.aboutLabel}
          </p>
          <h2 id="about-title">
            {language === "ar" ? (
              <>
                بين البرمجيات،
                <br />
                <em>والناس.</em>
              </>
            ) : (
              <>
                Where software
                <br />
                meets <em>people.</em>
              </>
            )}
          </h2>
          <p className="about-location">
            <Icon name="pin" size={16} />
            {t.location}
          </p>
        </div>
        <div className="about-copy">
          <p className="about-lead">{t.aboutIntro}</p>
          <p>{t.aboutWork}</p>
        </div>
      </div>
    </section>
  );
}
export function Experience({ t, language }) {
  return (
    <section
      className="experience-section section container"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>03 /</span> {t.experienceLabel}
          </p>
          <h2 id="experience-title">{t.experienceTitle}</h2>
        </div>
        <p className="section-intro">{t.experienceIntro}</p>
      </div>
      <div className="timeline">
        {t.jobs.map((job, index) => (
          <article key={job.id} className="timeline-item">
            <div className="timeline-meta">
              <span className={`job-type ${index === 0 ? "current-job" : ""}`}>
                {index === 0 ? <span className="status-dot" /> : null}
                {job.type}
              </span>
              <p dir="auto">{job.period}</p>
              <span>{job.location}</span>
            </div>
            <div className="timeline-copy">
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <p>{job.description}</p>
              <details>
                <summary>
                  {language === "ar"
                    ? "المزيد من المسؤوليات"
                    : "More responsibilities"}
                  <span aria-hidden="true">+</span>
                </summary>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Skills({ t }) {
  return (
    <section
      className="skills-section section container"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>04 /</span> {t.skillsLabel}
          </p>
          <h2 id="skills-title">{t.skillsTitle}</h2>
        </div>
        <p className="section-intro">{t.skillsIntro}</p>
      </div>
      <div className="skills-grid">
        {t.skillGroups.map((group, index) => (
          <article key={group.id} className="skill-group">
            <div className="skill-heading">
              <Icon
                name={["code", "layers", "branch", "people"][index]}
                size={26}
              />
              <span>0{index + 1}</span>
            </div>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Education({ t }) {
  return (
    <section
      className="education-section container"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="education-label">
        <p className="eyebrow">
          <span>05 /</span> {t.educationLabel}
        </p>
        <h2 id="education-title">{t.educationTitle}</h2>
      </div>
      <div className="education-body">
        <div className="education-symbol">
          <Icon name="graduate" size={30} />
        </div>
        <div>
          <h3>{t.degree}</h3>
          <p className="university">{t.university}</p>
          <p>{t.faculty}</p>
          <p>
            {t.educationLocation} <span aria-hidden="true">·</span>{" "}
            {t.gradeLabel}: {t.grade}
          </p>
        </div>
        <span className="education-year" dir="ltr">
          2024
        </span>
      </div>
    </section>
  );
}
