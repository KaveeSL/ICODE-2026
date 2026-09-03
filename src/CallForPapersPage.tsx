import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  PresentationChartBarIcon,
  PhotoIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Button } from "./components/ui/button";
import { importantDates, submissionDeadlineClosedLabel, submissionDeadlineDate, acceptanceNotificationDate, acceptanceNotificationSentLabel, conferenceConcludedLabel } from "./constants/importantDates";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
  WHATSAPP_ICON_PATH
} from "./constants/contact";
import extendedAbstractTemplateWord from "./assets/docs/ICODE2026-Extended Abstract Template.docx?url";
import slidesTemplatePptx from "./assets/docs/ICODE26 Slides template.pptx?url";
import posterTemplatePdf from "./assets/docs/Poster Template.pdf?url";
import posterGuidelinesImg from "./assets/posterguidelines.jpg";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import { useSiteTheme } from "./context/SiteThemeProvider";
import { closedCtaClass } from "./constants/ctaStyles";

/** Bundled from `src/assets/docs/` so it works on all hosts. */
const TEMPLATE_WORD_HREF = extendedAbstractTemplateWord;
const TEMPLATE_LATEX_HREF = `${import.meta.env.BASE_URL}docs/ICODE26_template_latex.zip`;
const TEMPLATE_PRESENTATION_HREF = slidesTemplatePptx;
const TEMPLATE_POSTER_HREF = posterTemplatePdf;

const themes = [
  "Digital transformation in education",
  "Artificial Intelligence in education",
  "Emerging methods, technologies and tools in education",
  "Online pedagogy, assessment, and learner engagement",
  "Open and distance learning systems and innovations",
  "Micro-credentials, credit transfer, and lifelong learning",
  "Ethics, Quality Assurance, and Governance in digital education",
  "Access, inclusion, and equity in digital education"
];

export default function CallForPapersPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isDark } = useSiteTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#key-submission-dates") return;
    const el = document.getElementById("key-submission-dates");
    if (!el) return;
    const rafId = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);

  // Override only the final milestone to show the conference day (6 August 2026)
  // for "Key submission dates", while the home page keeps the full 5–7 August range.
  const keySubmissionDates = importantDates.map((item, index, arr) =>
    index === arr.length - 1 ? { ...item, date: "5 August 2026" } : item
  );

  const scrollToExtendedAbstractTemplate = () => {
    const el = document.getElementById("extended-abstract-template");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /** Hero row — date + location chips share the same brown / cream UoM styling. */
  const cfpHeroBrownChipClass = isDark
    ? "inline-flex box-border min-h-[2rem] items-center gap-1.5 rounded-full border border-uom-gold/45 bg-uom-maroon/90 px-3 py-1.5 text-uom-goldSoft shadow-sm backdrop-blur-sm"
    : "inline-flex box-border min-h-[2rem] items-center gap-1.5 rounded-full border border-uom-maroon/30 bg-uom-goldSoft/85 px-3 py-1.5 text-neutral-900 shadow-sm";

  const cfpHeroBrownChipIconClass = isDark ? "text-uom-goldSoft" : "text-uom-maroon";

  return (
    <SitePageShell variant="glass" className="flex flex-col" id="call-for-papers-page">
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
        submitAbstractHref="https://cmt3.research.microsoft.com/ICODE2026"
        submitAbstractExternal
      />

      <main className="mx-auto flex-1 w-full max-w-7xl min-w-0 overflow-x-hidden px-4 pb-20 pt-[calc(60px+2.5rem)] md:px-6 md:pb-28 md:pt-[calc(68px+4rem)]">
          {/* Hero intro */}
          <section>
            <div className="max-w-3xl">
              <Reveal variant="up" delayMs={0}>
                <div className="inline-flex items-center gap-2 rounded-full bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
                  <ClipboardDocumentListIcon className="h-3.5 w-3.5 text-uom-maroon" />
                  <span>Call for Papers</span>
                </div>
              </Reveal>
              <Reveal variant="up" delayMs={120}>
                <h1 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  ICODE2026 – International Conference on Open and Digital Education
                </h1>
              </Reveal>
              <Reveal variant="up" delayMs={220}>
                <p className="mt-4 text-sm text-neutral-700 md:text-base">
                  Hosted by the{" "}
                  <span className="font-semibold">
                    Centre for Open and Distance Learning (CODL), Colombo, Sri Lanka
                  </span>
                  , ICODE2026 invites extended abstracts that explore the future of open, distance,
                  online, and digital education.
                </p>
              </Reveal>
            </div>

            <Reveal variant="up" delayMs={320}>
              <div className="mt-5 flex flex-col gap-2.5">
                <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                  <span className={cfpHeroBrownChipClass}>
                    <CalendarDaysIcon
                      className={`h-3.5 w-3.5 shrink-0 ${cfpHeroBrownChipIconClass}`}
                    />
                    <span className="leading-snug">5 August 2026</span>
                  </span>
                  <span className={cfpHeroBrownChipClass}>
                    <MapPinIcon className={`h-3.5 w-3.5 shrink-0 ${cfpHeroBrownChipIconClass}`} />
                    <span className="leading-snug">University of Moratuwa, Sri Lanka · Hybrid</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="mt-7 grid gap-6 md:grid-cols-2 md:items-start">
              {/* Key submission dates – timeline-style card */}
              <div
                id="key-submission-dates"
                className="flex h-full scroll-mt-24 flex-col rounded-3xl border border-uom-gold/70 bg-white/95 px-4 py-4 shadow-sm md:px-5 md:py-5"
              >
                <h2 className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <CalendarDaysIcon className="h-5 w-5 text-uom-maroon" />
                  Key Submission Dates
                </h2>
                <div className="mt-3 space-y-2 text-xs text-neutral-800 md:text-sm">
                  {keySubmissionDates.map((item, index) => {
                    const isExtendedSubmissionDeadline =
                      item.label === "Submission Deadline" && item.date === submissionDeadlineDate;
                    const isAcceptanceNotification =
                      item.label === "Acceptance notification" &&
                      item.date === acceptanceNotificationDate;
                    const isConferenceDate = item.label === "ICODE2026";
                    return (
                      <div
                        key={`${item.label}-${item.date}`}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                          {index + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          {isExtendedSubmissionDeadline ? (
                            <>
                              <p>
                                <span className="font-semibold">Submission Deadline:</span>{" "}
                                <span className="font-semibold text-neutral-400 line-through">
                                  {item.date}
                                </span>
                              </p>
                              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-red-600 md:text-xs">
                                {submissionDeadlineClosedLabel}
                              </p>
                              <p className="mt-0.5 text-[11px] text-neutral-600 md:text-xs">
                                {item.note}
                              </p>
                            </>
                          ) : isAcceptanceNotification ? (
                            <>
                              <p>
                                <span className="font-semibold">{item.label}:</span> {item.date}
                              </p>
                              <p className="mt-0.5 text-[11px] text-neutral-600 md:text-xs">
                                {item.note}
                              </p>
                              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-600 md:text-xs">
                                {acceptanceNotificationSentLabel}
                              </p>
                            </>
                          ) : isConferenceDate ? (
                            <>
                              <p>
                                <span className="font-semibold">{item.label}:</span>{" "}
                                <span className="font-semibold text-neutral-400 line-through">
                                  {item.date}
                                </span>
                              </p>
                              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-red-600 md:text-xs">
                                {conferenceConcludedLabel}
                              </p>
                              <p className="mt-0.5 text-[11px] text-neutral-600 md:text-xs">
                                {item.note}
                              </p>
                            </>
                          ) : (
                            <>
                              <p>
                                <span className="font-semibold">{item.label}:</span> {item.date}
                              </p>
                              <p className="mt-0.5 text-[11px] text-neutral-600 md:text-xs">
                                {item.note}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-3 text-[11px] text-neutral-600 md:flex-row md:items-center md:justify-between md:text-xs">
                  <p>Submit via the online abstract portal.</p>
                  <Button
                    type="button"
                    size="sm"
                    disabled
                    aria-disabled="true"
                    className={closedCtaClass}
                  >
                    <span className="font-bold uppercase tracking-[0.12em]">
                      {submissionDeadlineClosedLabel}
                    </span>
                  </Button>
                </div>
              </div>

              {/* Extended abstract – quick overview */}
              <div className="flex h-full flex-col rounded-3xl border border-uom-maroon/40 bg-white/95 px-4 py-5 shadow-sm md:px-6 md:py-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <DocumentTextIcon className="h-5 w-5 text-uom-maroon" />
                  Extended Abstract – Quick Overview
                </h2>
                <p className="mt-2 text-xs text-neutral-700 md:text-sm">
                  Submit a{" "}
                  <span className="font-semibold">2–3 page extended abstract (700–1,000 words)</span>{" "}
                  outlining your study, practice, or innovation in open and digital education.
                </p>

                <ul className="mt-3 space-y-2 text-xs text-neutral-800 md:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>Background and objectives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>Methodology or innovation approach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>Key findings or expected outcomes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>Significance and implications for practice, policy, or research.</span>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 text-[11px] text-neutral-700 md:text-xs">
                  <p>
                    <span className="font-semibold">Who can submit?</span> Researchers,
                    practitioners, instructional designers, educational technologists, and policy
                    leaders working in higher education, professional learning, and open/distance
                    systems.
                  </p>
                  <p>
                    All submissions will undergo <span className="font-semibold">peer review</span>.
                    Accepted contributions will be scheduled for presentation and included in the
                    ICODE2026 proceedings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Themes */}
          <section className="mt-16">
            <div className="mx-auto w-full max-w-7xl">
              <Reveal variant="up">
                <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  <ClipboardDocumentListIcon className="h-6 w-6 text-uom-maroon" />
                  Conference Themes
                </h2>
              </Reveal>
              <Reveal variant="up" delayMs={120}>
                <p className="mt-2 text-sm text-neutral-700 md:text-base">
                  Submissions are invited under, but not limited to, the following themes.
                </p>
              </Reveal>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {themes.map((theme, index) => (
                  <Reveal key={theme} variant="up" delayMs={index * 70}>
                    <div className="hover-lift flex items-center gap-3 rounded-2xl border border-uom-gold/50 bg-white/95 px-3 py-3 text-xs text-neutral-900 shadow-sm md:text-sm">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                        {index + 1}
                      </span>
                      <p className="leading-snug">{theme}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </section>

          <section id="extended-abstract-template" className="mt-12">
            <Reveal variant="scale">
              <div className="mx-auto w-full max-w-7xl rounded-3xl border border-border bg-white/95 px-4 py-6 shadow-sm md:px-6 md:py-7">
                <Reveal variant="up">
                  <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                    <DocumentTextIcon className="h-6 w-6 text-uom-maroon" />
                    Extended Abstract Template – Section Overview
                  </h2>
                </Reveal>
                <Reveal variant="up" delayMs={120}>
                  <p className="mt-3 text-sm text-neutral-700 md:text-base">
                    The ICODE2026 extended abstract template (2–3 pages) is designed to
                    keep submissions focused while providing enough detail for rigorous
                    review.
                  </p>
                </Reveal>

              <div className="mt-5 space-y-3 text-xs text-neutral-800 md:text-sm">
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">1. Introduction</span> – Background, problem
                    statement, rationale, relevance to open/digital education, and link to
                    conference themes.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">2. Objectives / Research questions</span> – Main
                    objectives and key research questions or hypotheses.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">3. Literature context</span> – Concise overview
                    of theoretical or empirical foundations and contribution to existing work.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">4. Methodology / Approach</span> – Research
                    design, participants, data collection and analysis, or description of the
                    innovation.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">5. Findings / Expected outcomes</span> – Key
                    results, preliminary findings, or anticipated impact.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">6. Discussion</span> – Significance,
                    implications for theory, policy, and practice in digital/open education.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">7. Conclusion</span> – Main takeaways, broader
                    impact, and future directions.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                  <p>
                    <span className="font-semibold">8. References</span> – IEEE style, numbered in the order of citation and limited to works cited in the abstract.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-neutral-600 md:text-xs">
                For practice or innovation-focused submissions, authors may emphasise
                context, intervention, implementation, outcomes, and scalability rather
                than formal research methods.
              </p>
              </div>
            </Reveal>
          </section>

          <section className="mt-12" id="author-guidelines">
            <Reveal variant="scale">
              <div className="mx-auto w-full max-w-7xl rounded-3xl border border-uom-gold/45 bg-white/95 px-4 py-5 shadow-sm md:px-5 md:py-6">
                <Reveal variant="up">
                  <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-uom-maroon" />
                    ICODE2026 Author Guidelines
                  </h2>
                </Reveal>
                <Reveal variant="up" delayMs={80}>
                  <p className="mt-1.5 text-sm text-neutral-700 md:text-base">
                    Follow these checkpoints to make your submission review-ready.
                  </p>
                </Reveal>

                <Reveal variant="up" delayMs={120}>
                  <nav className="cfp-guide-nav mt-3.5" aria-label="Author guidelines sections">
                    <a href="#cfp-guide-submission" className="cfp-guide-nav__chip">
                      Submission
                    </a>
                    <a href="#cfp-guide-oral" className="cfp-guide-nav__chip">
                      Oral presentation
                    </a>
                    <a href="#cfp-guide-poster" className="cfp-guide-nav__chip">
                      Poster
                    </a>
                    <a href="#cfp-guide-policies" className="cfp-guide-nav__chip">
                      Policies
                    </a>
                  </nav>
                </Reveal>

                {/* Submission essentials */}
                <div id="cfp-guide-submission" className="cfp-guide-block mt-4 scroll-mt-28">
                  <p className="cfp-guide-block__label">1 · Submission essentials</p>
                  <div className="mt-2.5 grid gap-3.5 lg:grid-cols-2">
                    <Reveal variant="up">
                      <article className="cfp-guide-card">
                        <header className="cfp-guide-card__header">
                          <DocumentTextIcon className="h-5 w-5 text-uom-maroon" />
                          <h3>General Guidelines</h3>
                        </header>
                        <dl className="cfp-guide-specs">
                          <div>
                            <dt>Language</dt>
                            <dd>English</dd>
                          </div>
                          <div>
                            <dt>Word limit</dt>
                            <dd>700–1000 words (excluding author block and references)</dd>
                          </div>
                          <div>
                            <dt>Camera-ready</dt>
                            <dd>
                              Maximum 3 pages (including author blocks and references; appendices
                              are not permitted)
                            </dd>
                          </div>
                          <div>
                            <dt>Templates</dt>
                            <dd>Follow the official conference formats strictly</dd>
                          </div>
                        </dl>
                        <div className="cfp-guide-downloads">
                          <a
                            href={TEMPLATE_WORD_HREF}
                            download="ICODE2026-Extended Abstract Template.docx"
                            className="cfp-guide-download cfp-guide-download--blue"
                          >
                            <DocumentTextIcon className="h-4 w-4" />
                            Word template
                          </a>
                          <a
                            href={TEMPLATE_LATEX_HREF}
                            download="ICODE26_template_latex.zip"
                            className="cfp-guide-download cfp-guide-download--green"
                          >
                            <CodeBracketIcon className="h-4 w-4" />
                            LaTeX template (.zip)
                          </a>
                        </div>
                      </article>
                    </Reveal>

                    <Reveal variant="up" delayMs={80}>
                      <article className="cfp-guide-card">
                        <header className="cfp-guide-card__header">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                          <h3>Extended Abstract Submission</h3>
                        </header>
                        <ul className="cfp-guide-list">
                          <li>
                            <span className="font-semibold">All extended abstract submissions</span>{" "}
                            must be done through{" "}
                            <span
                              className="cursor-not-allowed font-semibold text-neutral-400"
                              aria-disabled="true"
                            >
                              CMT
                            </span>
                            .
                          </li>
                          <li>
                            First-time users must create a new{" "}
                            <span
                              className="cursor-not-allowed font-semibold text-neutral-400"
                              aria-disabled="true"
                            >
                              CMT
                            </span>{" "}
                            account. Use an email address you access regularly when registering.
                          </li>
                          <li>Submissions should be in Portable Document Format (PDF) only.</li>
                          <li>
                            Submissions must comply with the specified word limit and page limit.
                            Submissions that do not meet these requirements will be desk rejected.
                          </li>
                        </ul>
                      </article>
                    </Reveal>
                  </div>

                  <Reveal variant="up" delayMs={100}>
                    <article className="cfp-guide-card mt-3.5">
                      <header className="cfp-guide-card__header">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                        <h3>Blind Review Policy and Compliance</h3>
                      </header>
                      <ul className="cfp-guide-list cfp-guide-list--row">
                        <li>
                          <span className="font-semibold">The initial submission</span> must not
                          contain any identifying information such as author names, affiliations,
                          emails, or acknowledgements. However, author details must be entered in
                          the correct order within the CMT before submission.
                        </li>
                        <li>
                          We request all authors to carefully review the submissions for language
                          and formatting.
                        </li>
                        <li>All submissions will undergo a plagiarism check.</li>
                      </ul>
                    </article>
                  </Reveal>
                </div>

                {/* Conference day */}
                <div className="cfp-guide-block mt-6">
                  <p className="cfp-guide-block__label">2 · Conference day</p>
                  <div className="mt-2.5 grid gap-3.5 lg:grid-cols-2">
                    <Reveal variant="up">
                      <article id="cfp-guide-oral" className="cfp-guide-card scroll-mt-28">
                        <header className="cfp-guide-card__header">
                          <PresentationChartBarIcon className="h-5 w-5 text-uom-maroon" />
                          <h3>Oral Presentation Instructions</h3>
                        </header>
                        <dl className="cfp-guide-specs cfp-guide-specs--compact">
                          <div>
                            <dt>Language</dt>
                            <dd>English</dd>
                          </div>
                          <div>
                            <dt>Time</dt>
                            <dd>15 minutes (≈12 present + 3 Q&amp;A)</dd>
                          </div>
                          <div>
                            <dt>Slides</dt>
                            <dd>About 10–12 slides recommended</dd>
                          </div>
                          <div>
                            <dt>Format</dt>
                            <dd>PowerPoint or PDF</dd>
                          </div>
                        </dl>
                        <ul className="cfp-guide-list mt-4">
                          <li>
                            All presentations must be delivered in English, the language of the
                            conference.
                          </li>
                          <li>
                            Each presentation is allocated <span className="font-semibold">15 minutes</span>.
                            We recommend about 12 minutes for presenting and 3 minutes for discussion
                            or questions.
                          </li>
                          <li>
                            A PC, projector, and microphones will be available. The PC will have sound
                            for videos and internet access.
                          </li>
                          <li>
                            You may submit your slides online before the conference. Please also bring
                            your file on a memory stick in case of technical issues. We recommend MS
                            PowerPoint or PDF.
                          </li>
                          <li>
                            If you have not submitted your slides beforehand, please upload your
                            presentation to the session PC at least 15 minutes before the session
                            starts.
                          </li>
                          <li>All presenters will be introduced to the audience by the session chair.</li>
                          <li>
                            For a 12-minute talk, around{" "}
                            <span className="font-semibold">10–12 slides</span> is recommended.
                          </li>
                        </ul>

                        <div className="cfp-guide-tips">
                          <div className="cfp-guide-tips__header">
                            <LightBulbIcon className="h-4 w-4 text-uom-maroon" aria-hidden />
                            <h4>How to deliver a good oral presentation</h4>
                          </div>
                          <div className="cfp-guide-tips__grid">
                            <section className="cfp-guide-tips__group" aria-labelledby="cfp-tips-structure">
                              <p id="cfp-tips-structure" className="cfp-guide-tips__label">
                                Structure
                              </p>
                              <ol className="cfp-guide-tips__list">
                                <li>
                                  Structure the presentation logically and include title,
                                  introduction, methods, results, discussion, and conclusions.
                                </li>
                                <li>
                                  Prepare a storyboard before building slides so the talk stays
                                  structured and on topic.
                                </li>
                              </ol>
                            </section>
                            <section className="cfp-guide-tips__group" aria-labelledby="cfp-tips-slides">
                              <p id="cfp-tips-slides" className="cfp-guide-tips__label">
                                Slides
                              </p>
                              <ol className="cfp-guide-tips__list">
                                <li>Use bullet points rather than long paragraphs of text.</li>
                                <li>Avoid small fonts that are hard for the audience to read.</li>
                                <li>
                                  Limit graphics to about 1–3 per slide so the content stays clear.
                                </li>
                                <li>Avoid using all capital letters.</li>
                                <li>Combine words, pictures, and graphics thoughtfully.</li>
                              </ol>
                            </section>
                            <section className="cfp-guide-tips__group" aria-labelledby="cfp-tips-delivery">
                              <p id="cfp-tips-delivery" className="cfp-guide-tips__label">
                                Delivery
                              </p>
                              <ol className="cfp-guide-tips__list">
                                <li>
                                  Do not read the text word for word. Slides should support your
                                  talk, not replace it.
                                </li>
                                <li>Make eye contact with the audience.</li>
                                <li>
                                  Use the laser pointer to highlight the most relevant parts of each
                                  slide.
                                </li>
                                <li>Speak loudly and clearly.</li>
                              </ol>
                            </section>
                          </div>
                        </div>

                        <div className="cfp-guide-downloads">
                          <a
                            href={TEMPLATE_PRESENTATION_HREF}
                            download="ICODE26-Slides-Template.pptx"
                            className="cfp-guide-download cfp-guide-download--violet"
                          >
                            <PresentationChartBarIcon className="h-4 w-4" />
                            Presentation template (.pptx)
                          </a>
                        </div>
                      </article>
                    </Reveal>

                    <Reveal variant="up" delayMs={80}>
                      <article id="cfp-guide-poster" className="cfp-guide-card scroll-mt-28">
                        <header className="cfp-guide-card__header">
                          <PhotoIcon className="h-5 w-5 text-uom-maroon" />
                          <h3>Poster Guidelines</h3>
                        </header>
                        <dl className="cfp-guide-specs cfp-guide-specs--compact">
                          <div>
                            <dt>Size</dt>
                            <dd>60 inches high × 30 inches wide</dd>
                          </div>
                          <div>
                            <dt>Printing</dt>
                            <dd>Bring your own poster (no venue printing)</dd>
                          </div>
                          <div>
                            <dt>Readability</dt>
                            <dd>Readable from about 2 metres</dd>
                          </div>
                        </dl>

                        <p className="cfp-guide-subhead">Poster Preparation Guidelines</p>
                        <ul className="cfp-guide-list">
                          <li>
                            Authors should bring their poster to the conference. Printing services are
                            not available at the venue.
                          </li>
                          <li>
                            Poster size:{" "}
                            <span className="font-semibold">60 inches high × 30 inches wide</span>.
                          </li>
                          <li>Include a clear mix of words, pictures, and graphics.</li>
                          <li>Your poster should be readable from about 2 metres away.</li>
                          <li>
                            There has to be eyelets (as shown in the image) in each of the four
                            corners of the poster. This is for attaching the poster on to the stand.
                            Poster stands will be available at the venue.
                          </li>
                        </ul>

                        <figure className="cfp-guide-figure">
                          <img
                            src={posterGuidelinesImg}
                            alt="ICODE2026 poster on an X-frame stand, with eyelets in each of the four corners for mounting"
                            className="cfp-guide-figure__img"
                          />
                          <figcaption className="cfp-guide-figure__caption">
                            Authors are requested to affix eyelets or holes at each of the four
                            corners of the poster to facilitate mounting on the display stand
                            provided at the venue.
                          </figcaption>
                        </figure>

                        <p className="cfp-guide-subhead">Poster Presentation Guidelines</p>
                        <ul className="cfp-guide-list">
                          <li>The poster should present the results and conclusions of the paper.</li>
                          <li>
                            Stay next to your poster while it is on display in case anyone has
                            questions.
                          </li>
                        </ul>

                        <div className="cfp-guide-downloads">
                          <a
                            href={TEMPLATE_POSTER_HREF}
                            download="ICODE26-Poster-Template.pdf"
                            className="cfp-guide-download cfp-guide-download--amber"
                          >
                            <PhotoIcon className="h-4 w-4" />
                            Poster template (.pdf)
                          </a>
                        </div>
                      </article>
                    </Reveal>
                  </div>
                </div>

                {/* Policies */}
                <div id="cfp-guide-policies" className="cfp-guide-block mt-6 scroll-mt-28">
                  <p className="cfp-guide-block__label">3 · Policies &amp; integrity</p>
                  <div className="mt-2.5 grid gap-3.5 lg:grid-cols-2">
                    <Reveal variant="up">
                      <article className="cfp-guide-card">
                        <header className="cfp-guide-card__header">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                          <h3>Author Responsibilities</h3>
                        </header>
                        <ul className="cfp-guide-list">
                          <li>
                            The submission must present original research conducted by the authors and
                            must not infringe upon the intellectual property rights of any third party.
                          </li>
                          <li>
                            The work must not have been previously published or be under consideration
                            elsewhere, and should not be simultaneously submitted to another conference,
                            journal, or publication venue.
                          </li>
                          <li>
                            The list of authors must accurately include only those who have made
                            significant intellectual contributions to the research.
                          </li>
                          <li>
                            All data sources, images, figures, and other referenced materials must be
                            properly acknowledged and cited.
                          </li>
                          <li>
                            Authors must also ensure that they have obtained the necessary permissions
                            to reproduce any third-party material, including images and figures.
                          </li>
                        </ul>
                      </article>
                    </Reveal>

                    <Reveal variant="up" delayMs={80}>
                      <article className="cfp-guide-card">
                        <header className="cfp-guide-card__header">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                          <h3>Ethics and Conduct</h3>
                        </header>
                        <ul className="cfp-guide-list">
                          <li>
                            Authors are expected to adhere to the highest standards of research
                            integrity. Any form of academic misconduct, including plagiarism, data
                            fabrication, or falsification, will result in immediate rejection of the
                            submission and potential reporting to the authors&apos; institutions.
                          </li>
                        </ul>

                        <p className="cfp-guide-subhead">Review Process and AI Policy</p>
                        <ul className="cfp-guide-list">
                          <li>
                            Submissions will undergo a rigorous double-blind peer-review process.
                          </li>
                          <li>
                            Program Committee members will review submissions based on research
                            expertise and relevance. Authors may be given a brief period to address
                            initial review comments and submit a revised version. Final decisions will
                            be made by the program chairs.
                          </li>
                        </ul>

                        <p className="cfp-guide-subhead">Policy on Using Generative AI</p>
                        <ul className="cfp-guide-list">
                          <li>
                            Authors are fully responsible for the submitted content. Generative AI
                            tools must not be listed as authors, and any substantive use of such tools
                            in content creation should be disclosed in the Acknowledgements section.
                          </li>
                          <li>
                            Use of generative AI for language assistance (e.g., paraphrasing, grammar or
                            spell checking) does not require disclosure.
                          </li>
                          <li>
                            Any AI-generated or AI-assisted content related to ideas or text must be
                            clearly indicated, properly cited where applicable, and disclosed when such
                            ideas have been further developed by the authors.
                          </li>
                        </ul>
                      </article>
                    </Reveal>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section className="mt-8 md:mt-10" id="cfp-secretariat" aria-label="Conference secretariat">
            <Reveal variant="up">
              <aside className="cfp-signoff">
                <p className="cfp-signoff__greeting">Warm regards,</p>
                <p className="cfp-signoff__title">Conference Secretariat</p>
                <p className="cfp-signoff__org">
                  ICODE2026, Centre for Open and Distance Learning (CODL)
                  <br />
                  University of Moratuwa, Sri Lanka
                </p>
                <div className="cfp-signoff__contacts">
                  <a href="mailto:icode@codl.lk">
                    <EnvelopeIcon className="h-4 w-4" aria-hidden />
                    icode@codl.lk
                  </a>
                  <span className="cfp-signoff__dot" aria-hidden>
                    ·
                  </span>
                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp ${CONTACT_PHONE_DISPLAY}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 flex-none"
                      aria-hidden="true"
                    >
                      <path fill="currentColor" d={WHATSAPP_ICON_PATH} />
                    </svg>
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </aside>
            </Reveal>
          </section>
        </main>

        <Footer />
    </SitePageShell>
  );
}

