import { useEffect, useId, useRef, useState } from "react";
import demo from "../data/timetable-demo.json";
import Icon from "./Icon";

const byId = (items, id) => items.find((item) => item.id === id);

export default function TimetablePreview({
  t,
  language,
  groupId,
  onGroupChange,
  expanded = false,
}) {
  const tableId = useId();
  const scrollRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHasOverflow(entry.target.scrollWidth > entry.target.clientWidth + 1);
    });
    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, []);
  const group = byId(demo.groups, groupId);
  const lessons = demo.lessons.filter((lesson) => lesson.groupId === groupId);
  const periods = demo.periods.filter((period) =>
    lessons.some((lesson) => lesson.periodIndex === period.id),
  );
  return (
    <div className={`demo-preview${expanded ? " is-expanded" : ""}`}>
      <div className="demo-preview-heading">
        <span>{t.demoTitle}</span>
        <span className="demo-validation">
          <Icon name="check" size={14} />
          {language === "ar" ? "مثال تم فحصه" : "Validated example"}
        </span>
      </div>
      <div
        className="demo-group-controls"
        role="group"
        aria-label={t.demoGroupLabel}
      >
        {demo.groups.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label[language]}
            aria-pressed={groupId === item.id}
            aria-controls={tableId}
            onClick={() => onGroupChange(item.id)}
          >
            {item.label[language].split(" - ")[0]}
          </button>
        ))}
      </div>
      <div className="demo-selection" aria-live="polite">
        <span>{group.label[language]}</span>
        <span>
          {lessons.length} {language === "ar" ? "دروس" : "lessons"}
        </span>
      </div>
      <div
        className="demo-table-scroll"
        ref={scrollRef}
        tabIndex="0"
        role="region"
        aria-label={t.demoTitle}
      >
        <table id={tableId} className="demo-table">
          <caption className="sr-only">
            {t.demoTitle} — {group.label[language]} — {t.demoCaption}
          </caption>
          <thead>
            <tr>
              <th scope="col">{t.demoTimeLabel}</th>
              {demo.days.map((day) => (
                <th scope="col" key={day.id}>
                  {day.label[language]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((period) => (
              <tr key={period.id}>
                <th scope="row">
                  <span dir="ltr">{period.label[language]}</span>
                </th>
                {demo.days.map((day) => {
                  const lesson = lessons.find(
                    (item) =>
                      item.periodIndex === period.id &&
                      item.dayIndex === day.id,
                  );
                  if (!lesson)
                    return (
                      <td
                        key={day.id}
                        data-day={day.id}
                        data-period={period.id}
                      >
                        <span
                          className="demo-empty"
                          aria-label={
                            language === "ar" ? "لا يوجد درس" : "No lesson"
                          }
                        >
                          —
                        </span>
                      </td>
                    );
                  const subject = byId(demo.subjects, lesson.subjectId);
                  const trainer = byId(demo.trainers, lesson.trainerId);
                  const room = byId(demo.rooms, lesson.roomId);
                  return (
                    <td
                      key={day.id}
                      data-day={day.id}
                      data-period={period.id}
                      data-lesson-id={lesson.id}
                    >
                      <div
                        className={`demo-lesson subject-${lesson.subjectId}`}
                        title={`${subject.label[language]} · ${trainer.label[language]} · ${room.label[language]}`}
                      >
                        <strong>{subject.label[language]}</strong>
                        {expanded ? (
                          <>
                            <span>
                              {t.demoTrainerLabel}: {trainer.label[language]}
                            </span>
                            <span>
                              {t.demoRoomLabel}: {room.label[language]}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {hasOverflow ? (
        <p className="demo-scroll-hint">
          {language === "ar"
            ? "اسحب لرؤية بقية الأسبوع"
            : "Scroll to explore the week"}
          <span aria-hidden="true">↔</span>
        </p>
      ) : null}
      <div className="demo-provenance">
        <span>{t.demoCaption}</span>
        {expanded ? (
          <strong>
            {language === "ar" ? "كل الشعب: " : "All sections: "}
            {demo.validation.scheduledHours}/{demo.validation.requiredHours}{" "}
            {language === "ar"
              ? "درسًا في المثال · دون تعارضات"
              : "demo lessons · no conflicts"}
          </strong>
        ) : null}
      </div>
    </div>
  );
}

