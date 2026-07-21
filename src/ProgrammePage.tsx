import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ClockIcon,
  CursorArrowRaysIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import {
  day1Schedule,
  day2Schedule,
  day3Workshops,
  programmeDaysMeta,
  type ProgrammeSession
} from "./constants/programmeSchedule";

type ActiveDay = 1 | 2 | 3;

const workshopRegistrationFormHref =
  "https://docs.google.com/forms/d/e/1FAIpQLScRuIgWSXXABlJPju4kn_h6rI_k4QyGwBwPxlUbHGbUqeQWvg/viewform?usp=sharing&ouid=112433407747669958215";

const dayIcons = {
  1: AcademicCapIcon,
  2: UserGroupIcon,
  3: CursorArrowRaysIcon
} as const;

const daySlugByDay: Record<ActiveDay, string> = {
  1: "day1",
  2: "day2",
  3: "day3"
};

function dayFromSlug(slug: string | undefined): ActiveDay | null {
  if (slug === "day1") return 1;
  if (slug === "day2") return 2;
  if (slug === "day3") return 3;
  return null;
}

function getSpeakerLines(row: ProgrammeSession): string[] {
  if (row.isBreak) return [];
  if (row.speakers?.length) return row.speakers;
  if (row.panelists?.length) return row.panelists;
  if (row.detail) return [row.detail];
  return [];
}

function isTentativeSpeaker(name: string) {
  return /to be confirmed/i.test(name);
}

function SessionTimeline({
  caption,
  rows
}: {
  caption: string;
  rows: ProgrammeSession[];
}) {
  return (
    <div className="programme-day-panel__body">
      <ol className="programme-timeline" aria-label={caption}>
        {rows.map((row, index) => {
          const speakerLines = getSpeakerLines(row);
          const isMulti = speakerLines.length > 1;

          return (
            <li
              key={`${row.time}-${row.session}-${row.halls ?? ""}`}
              className={`programme-timeline__item${
                row.isBreak ? " programme-timeline__item--break" : ""
              }`}
            >
              <div className="programme-timeline__rail" aria-hidden>
                <span className="programme-timeline__dot" />
                {index < rows.length - 1 && <span className="programme-timeline__line" />}
              </div>

              <article
                className={`programme-timeline__card${
                  row.isBreak ? " programme-timeline__card--break" : ""
                }`}
              >
                <div className="programme-timeline__time" aria-label={`Time: ${row.time}`}>
                  <ClockIcon className="programme-timeline__time-icon" aria-hidden />
                  <span className="programme-timeline__time-text">{row.time}</span>
                </div>
                <div className="programme-timeline__content">
                  <h3 className="programme-timeline__title">{row.session}</h3>
                  {row.halls && (
                    <p className="programme-timeline__halls">
                      Location: <span>{row.halls}</span>
                    </p>
                  )}
                  {speakerLines.length === 1 && (
                    <p
                      className={
                        isTentativeSpeaker(speakerLines[0])
                          ? "programme-timeline__speaker programme-timeline__speaker--tba"
                          : "programme-timeline__speaker"
                      }
                    >
                      {speakerLines[0]}
                    </p>
                  )}
                  {isMulti && (
                    <ul className="programme-timeline__panelists">
                      {speakerLines.map((name) => (
                        <li
                          key={name}
                          className={
                            isTentativeSpeaker(name)
                              ? "programme-timeline__panelist programme-timeline__panelist--tentative"
                              : "programme-timeline__panelist"
                          }
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function WorkshopTimeline({ caption }: { caption: string }) {
  return (
    <div className="programme-day-panel__body">
      <ol className="programme-timeline" aria-label={caption}>
        {day3Workshops.map((workshop, index) => {
          const timeLabel = workshop.time ?? "To be confirmed";

          return (
            <li key={workshop.title} className="programme-timeline__item">
              <div className="programme-timeline__rail" aria-hidden>
                <span className="programme-timeline__dot" />
                {index < day3Workshops.length - 1 && (
                  <span className="programme-timeline__line" />
                )}
              </div>

              <article className="programme-timeline__card">
                <div className="programme-timeline__time" aria-label={`Time: ${timeLabel}`}>
                  <ClockIcon className="programme-timeline__time-icon" aria-hidden />
                  <span className="programme-timeline__time-text">{timeLabel}</span>
                </div>
                <div className="programme-timeline__content">
                  <h3 className="programme-timeline__title">{workshop.title}</h3>
                  {workshop.description ? (
                    <div className="programme-timeline__about">
                      <p className="programme-timeline__description">{workshop.description}</p>
                    </div>
                  ) : null}
                  <div className="programme-timeline__audience-row">
                    <span className="programme-timeline__audience-label">Target audience</span>
                    <span className="programme-timeline__audience-pill">{workshop.audience}</span>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function ProgrammePage() {
  const { daySlug } = useParams<{ daySlug: string }>();
  const activeDay = dayFromSlug(daySlug);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  if (!activeDay) {
    return <Navigate to="/programme/day1" replace />;
  }

  const activeMeta = programmeDaysMeta.find((item) => item.day === activeDay)!;
  const ActiveIcon = dayIcons[activeDay];

  return (
    <SitePageShell className="flex flex-col">
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main className="mx-auto flex-1 w-full max-w-7xl px-4 pb-16 pt-[calc(60px+2.5rem)] md:px-6 md:pb-20 md:pt-[calc(68px+3.5rem)]">
        <section className="site-panel w-full rounded-3xl border border-uom-gold/50 bg-gradient-to-br from-white via-uom-goldSoft/25 to-white p-5 shadow-sm md:p-8">
          <Reveal variant="up" delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-uom-gold/40 bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
              <CalendarDaysIcon className="h-3.5 w-3.5 text-uom-maroon" />
              Programme
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={80}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              3-Day Conference Schedule
            </h1>
          </Reveal>
          <Reveal variant="up" delayMs={140}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
              ICODE2026 runs from{" "}
              <span className="font-semibold text-neutral-900">5–7 August 2026</span> — research,
              policy, and practice across three connected days.
            </p>
          </Reveal>
        </section>

        <section className="mt-8 w-full md:mt-10">
          <Reveal variant="up" className="w-full">
            <div className="programme-day-tabs w-full" role="tablist" aria-label="Programme days">
              {programmeDaysMeta.map((item) => {
                const Icon = dayIcons[item.day as ActiveDay];
                const isActive = activeDay === item.day;
                const to = `/programme/${daySlugByDay[item.day as ActiveDay]}`;
                return (
                  <Link
                    key={item.day}
                    to={to}
                    role="tab"
                    aria-selected={isActive}
                    className={`programme-day-tab${isActive ? " programme-day-tab--active" : ""}`}
                  >
                    <span className="programme-day-tab__top">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      <span className="programme-day-tab__day">Day {item.day}</span>
                    </span>
                    <span className="programme-day-tab__title">{item.title}</span>
                    <span className="programme-day-tab__meta">
                      <span>{item.date}</span>
                      {"timeNote" in item && item.timeNote ? (
                        <span className="programme-day-tab__time">{item.timeNote}</span>
                      ) : null}
                      <span className="programme-day-tab__access">{item.access}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <div
            role="tabpanel"
            className="programme-day-panel mt-5 w-full overflow-hidden rounded-3xl border border-uom-gold/45 bg-white shadow-sm md:mt-6"
          >
            <div className="programme-day-panel__header">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-uom-maroon">
                  Day {activeMeta.day} · {activeMeta.accent}
                </p>
                <h2 className="mt-1 flex items-center gap-2 text-lg font-semibold text-neutral-900 md:text-xl">
                  <ActiveIcon className="h-5 w-5 shrink-0 text-uom-maroon" aria-hidden />
                  {activeMeta.title}
                </h2>
                <p className="mt-1.5 text-sm text-neutral-600">
                  {activeMeta.date}
                  <span className="mx-2 text-uom-gold" aria-hidden>
                    ·
                  </span>
                  {activeMeta.access}
                  {"timeNote" in activeMeta && activeMeta.timeNote ? (
                    <>
                      <span className="mx-2 text-uom-gold" aria-hidden>
                        ·
                      </span>
                      {activeMeta.timeNote}
                    </>
                  ) : null}
                </p>
              </div>
            </div>

            {activeDay === 3 && (
              <div className="programme-day-panel__cta">
                <p className="programme-day-panel__cta-copy">
                  Reserve your place for Day 3 workshops.
                </p>
                <a
                  href={workshopRegistrationFormHref}
                  target="_blank"
                  rel="noreferrer"
                  className="programme-day-panel__cta-btn"
                >
                  Register for Workshops
                  <ChevronRightIcon className="h-4 w-4" aria-hidden />
                </a>
              </div>
            )}

            {activeDay === 1 && (
              <SessionTimeline
                caption="Day 1 Academic Research Conference schedule"
                rows={day1Schedule}
              />
            )}
            {activeDay === 2 && (
              <SessionTimeline
                caption="Day 2 Policy and Leadership Summit schedule"
                rows={day2Schedule}
              />
            )}
            {activeDay === 3 && (
              <WorkshopTimeline caption="Day 3 Practice and Innovation Workshops" />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </SitePageShell>
  );
}
