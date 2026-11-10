import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import TimetablePreview from "./TimetablePreview";
import ProjectDiagram from "./ProjectDiagram";
import { operationalProjects } from "../data/operationalProjects";
const APP_URL = "https://sakaka-institute-timetable.onrender.com/";

function EstateDrawing({ t, language }) {
  return (
    <figure className="estate-visual">
      <div className="estate-top">
        <span dir="ltr" className="odoo-word">
          odoo
          <span> / {language === "ar" ? "إدارة العقارات" : "real estate"}</span>
        </span>
        <Icon name="lock" size={17} />
      </div>
      <svg
        className="estate-drawing"
        viewBox="0 0 540 300"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
          <path d="m90 215 170 70 190-97-165-65-195 92Z" opacity=".3" />
          <path d="m105 200 155 63 173-88M260 263V111M105 200V97l155 60 173-83v101" />
          <path d="m105 97 170-73 158 50-173 83-155-60Z" />
          <path d="M132 187v-61l95 36v63l-95-38Zm0-34 95 37m-64-52v62m32-49v62" />
          <path d="m284 162 121-58v55l-121 62v-59Zm0 29 121-61m-90 17v59m31-75v59m30-73v58" />
          <path d="m165 101 107-47 101 33-109 51-99-37Z" opacity=".7" />
          <path d="m188 93 76 28 85-39M264 121v17m-89 85v-54l30 12v54" />
          <path
            d="M71 235h382M70 74v138M455 70v132M57 87l26-12m360-22 26 9M63 204l17 7m364-10 23 9"
            opacity=".35"
          />
          <path d="m321 68 0-40m-30 29V16m60 62V39" opacity=".25" />
        </g>
        <g fill="currentColor">
          <circle cx="105" cy="97" r="3" />
          <circle cx="433" cy="74" r="3" />
          <circle cx="260" cy="263" r="3" />
        </g>
      </svg>
      <figcaption>
        <span className="mini-cross" aria-hidden="true">
          +
        </span>
        {t.projectOdooIllustration}
      </figcaption>
    </figure>
  );
}
export default function Projects({ t, language }) {
  const projects = [
    {
      id: "timetable",
      title: t.projectTimetableTitle,
      subtitle: t.projectTimetableSubtitle,
      category: t.projectTimetableCategory,
      description: t.projectTimetableDescription,
      role: t.projectTimetableRole,
      tech: t.projectTimetableTech,
      study: t.projectTimetableCaseStudy,
      decisions: t.projectTimetableDecisions,
      features: t.projectTimetableFeatures,
      url: APP_URL,
      accessNote: t.projectAccessNote,
    },
    ...operationalProjects[language],
    {
      id: "odoo",
      title: t.projectOdooTitle,
      subtitle: t.projectOdooSubtitle,
      category: t.projectOdooCategory,
      description: t.projectOdooDescription,
      role: t.projectOdooRole,
      tech: t.projectOdooTech,
      study: t.projectOdooCaseStudy,
      decisions: t.projectOdooDecisions,
      features: t.projectOdooFeatures,
      accessNote: t.projectOdooNote,
    },
  ];
  const [project, setProject] = useState(null);
  const [actualSize, setActualSize] = useState(false);
  const [groupId, setGroupId] = useState("g3");
  const dialog = useRef(null);
  const opener = useRef(null);
  useEffect(() => {
    if (project && !dialog.current.open) dialog.current.showModal();
  }, [project]);
  function openStudy(id, event, view = "case") {
    if (!projects.some((item) => item.id === id)) return;
    opener.current = event.currentTarget;
    setActualSize(false);
    setProject({ projectId: id, view });
  }
  function closeStudy() {
    setProject(null);
    opener.current?.focus();
  }
  function containTab(event) {
    if (event.key !== "Tab") return;
    const controls = [
      ...dialog.current.querySelectorAll(
        'button:not([disabled]), a[href], select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
      ),
    ].filter((element) => element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  const activeProject = projects.find((item) => item.id === project?.projectId);
  const isScreenshot = project?.view === "screenshot";
  const isDemo = project?.view === "demo";
  const study = activeProject?.study;
  const caseLabel = language === "ar" ? "دراسة المشروع" : "View case study";
  return (
    <>
      <section
        className="projects-section section container"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01 /</span> {t.projectsLabel}
            </p>
            <h2 id="projects-title">{t.projectsTitle}</h2>
          </div>
          <p className="section-intro">{t.projectsIntro}</p>
        </div>
        <article className="featured-project">
          <div className="project-visual timetable-visual">
            <TimetablePreview
              t={t}
              language={language}
              groupId={groupId}
              onGroupChange={setGroupId}
            />
            <div className="demo-preview-actions">
              <button
                className="text-link"
                type="button"
                onClick={(event) => openStudy("timetable", event, "demo")}
              >
                {t.demoOpenLabel}
                <Icon name="arrow" size={16} />
              </button>
              <button
                className="text-link muted-link"
                type="button"
                onClick={(event) => openStudy("timetable", event, "screenshot")}
              >
                {t.viewScreenshot}
                <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
          <div className="featured-copy">
            <div className="project-meta">
              <span className="project-index">01</span>
              <span>{t.projectTimetableCategory}</span>
              <span className="live-badge">{t.projectLive}</span>
            </div>
            <h3>{t.projectTimetableTitle}</h3>
            <p>{t.projectTimetableDescription}</p>
            <dl className="project-role">
              <dt>{t.projectRoleLabel}</dt>
              <dd>{t.projectTimetableRole}</dd>
            </dl>
            <div className="tag-row" aria-label={t.projectTechnology}>
              {t.projectTimetableTech.map((tag) => (
                <span key={tag} dir="ltr">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <button
                className="text-link"
                onClick={(event) => openStudy("timetable", event)}
              >
                {caseLabel}
                <Icon name="arrow" size={18} />
              </button>
              <a
                className="text-link muted-link"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.projectOpen}
                <Icon name="arrow" size={16} />
              </a>
            </div>
            <p className="access-note">
              <Icon name="lock" size={12} />
              {t.projectAccessNote}
            </p>
          </div>
        </article>
        <div className="project-collection">
          {projects.slice(1).map((item, index) => (
            <article
              className="project-card"
              id={"project-" + item.id}
              aria-labelledby={"project-title-" + item.id}
              key={item.id}
            >
              <div className="project-card-visual">
                {item.id === "odoo" ? (
                  <EstateDrawing t={t} language={language} />
                ) : (
                  <ProjectDiagram
                    kind={item.id}
                    caption={item.illustrationCaption}
                    labels={item.diagramLabels}
                  />
                )}
              </div>
              <div className="project-card-copy">
                <div className="project-meta">
                  <span className="project-index" dir="ltr">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <span>{item.category}</span>
                  <span className={item.url ? "live-badge" : "private-badge"}>
                    {!item.url && <Icon name="lock" size={12} />}
                    {item.url ? t.projectLive : t.projectPrivate}
                  </span>
                </div>
                <h3 id={"project-title-" + item.id}>{item.title}</h3>
                <p className="project-card-subtitle">{item.subtitle}</p>
                <p className="project-card-description">{item.description}</p>
                <dl className="project-role">
                  <dt>{t.projectRoleLabel}</dt>
                  <dd>{item.role}</dd>
                </dl>
                <div className="tag-row" aria-label={t.projectTechnology}>
                  {item.tech.map((tag) => (
                    <span key={tag} dir="ltr">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button
                    className="text-link"
                    onClick={(event) => openStudy(item.id, event)}
                    aria-label={caseLabel + ": " + item.title}
                  >
                    {caseLabel}
                    <Icon name="arrow" size={16} />
                  </button>
                  {item.url && (
                    <a
                      className="text-link muted-link"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.projectOpen + ": " + item.title}
                    >
                      {t.projectOpen}
                      <Icon name="arrow" size={14} />
                    </a>
                  )}
                </div>
                <p className="access-note">
                  {item.url && <Icon name="lock" size={12} />}
                  {item.accessNote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <dialog
        ref={dialog}
        className={`case-dialog${isScreenshot || isDemo ? " screenshot-dialog" : ""}`}
        aria-labelledby="case-title"
        aria-describedby="case-subtitle"
        onKeyDown={containTab}
        onClose={closeStudy}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        {activeProject && <div className="dialog-content">
          <div className="dialog-top">
            <p className="eyebrow">
              {isDemo
                ? t.demoTitle
                : isScreenshot
                  ? t.projectScreenshotCaption
                  : caseLabel}
            </p>
            <button
              className="icon-button"
              onClick={() => dialog.current.close()}
              aria-label={
                isScreenshot || isDemo
                  ? t.closeScreenshot
                  : language === "ar"
                    ? "إغلاق دراسة المشروع"
                    : "Close case study"
              }
              autoFocus
            >
              <Icon name="close" />
            </button>
          </div>
          <h2 id="case-title">
            {activeProject.title}
          </h2>
          <p className="dialog-subtitle" id="case-subtitle">
            {isDemo
              ? t.demoCaption
              : isScreenshot
                ? t.projectScreenshotCaption
                : activeProject.subtitle}
          </p>
          {isDemo ? (
            <TimetablePreview
              t={t}
              language={language}
              groupId={groupId}
              onGroupChange={setGroupId}
              expanded
            />
          ) : isScreenshot ? (
            <>
              <div className="screenshot-toolbar">
                <p>
                  {language === "ar"
                    ? "اعرض الصورة بالحجم الأصلي واسحب لمعاينة التفاصيل."
                    : "Switch to original size and scroll to inspect the details."}
                </p>
                <button
                  className="button button-quiet"
                  type="button"
                  aria-pressed={actualSize}
                  onClick={() => setActualSize((current) => !current)}
                >
                  {actualSize
                    ? language === "ar"
                      ? "ملاءمة النافذة"
                      : "Fit to window"
                    : language === "ar"
                      ? "الحجم الأصلي 100%"
                      : "Original size 100%"}
                </button>
              </div>
              <div
                className={`screenshot-scroll${actualSize ? " is-actual-size" : ""}`}
                tabIndex="0"
                role="region"
                aria-label={
                  language === "ar"
                    ? "صورة لوحة النظام، قابلة للتمرير"
                    : "Scrollable application dashboard screenshot"
                }
              >
                <img
                  src="/timetable-dashboard.png"
                  alt={t.projectScreenshotCaption}
                  width="1312"
                  height="596"
                />
              </div>
              <a
                className="text-link"
                href="/timetable-dashboard.png"
                download="sakaka-timetable-dashboard.png"
              >
                {language === "ar"
                  ? "تنزيل لقطة النظام"
                  : "Download dashboard screenshot"}
                <Icon name="down" size={16} />
              </a>
            </>
          ) : (
            <>
              <dl className="project-role dialog-project-role">
                <dt>{t.projectRoleLabel}</dt>
                <dd>
                  {activeProject.role}
                </dd>
                <dt>{t.projectTechnology}</dt>
                <dd className="tag-row">
                  {activeProject.tech.map((tag) => (
                    <span key={tag} dir="auto">
                      {tag}
                    </span>
                  ))}
                </dd>
              </dl>
              {study ? (
                <div className="study-sections">
                  {["challenge", "solution", "outcome"].map((key, index) => (
                    <section key={key}>
                      <span className="study-number" aria-hidden="true">
                        0{index + 1}
                      </span>
                      <div>
                        <h3>{t.caseStudyLabels[key]}</h3>
                        <p>{study[key]}</p>
                      </div>
                    </section>
                  ))}
                </div>
              ) : null}
              <section
                className="technical-decisions"
                aria-labelledby="decisions-title"
              >
                <h3 id="decisions-title">{t.decisionsLabel}</h3>
                <div>
                  {activeProject.decisions.map((decision) => (
                    <article key={decision.title}>
                      <h4>{decision.title}</h4>
                      <p>{decision.description}</p>
                    </article>
                  ))}
                </div>
              </section>
              <h3 className="study-features-title">{t.projectHighlights}</h3>
              <ul className="project-features">
                {activeProject.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              {activeProject.url ? (
                <>
                  <a
                    className="button button-primary"
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projectOpen}
                    <Icon name="arrow" size={18} />
                  </a>
                  <p className="access-note">{activeProject.accessNote}</p>
                </>
              ) : (
                <p className="private-notice">
                  <Icon name="lock" size={18} />
                  {activeProject.accessNote}
                </p>
              )}
            </>
          )}
        </div>}
      </dialog>
    </>
  );
}
