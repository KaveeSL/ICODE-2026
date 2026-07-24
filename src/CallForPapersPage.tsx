import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Button } from "./components/ui/button";
import { importantDates, submissionDeadlineClosedLabel, submissionDeadlineDate, acceptanceNotificationDate, acceptanceNotificationSentLabel } from "./constants/importantDates";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
  WHATSAPP_ICON_PATH
} from "./constants/contact";
import extendedAbstractTemplateWord from "./assets/docs/ICODE2026-Extended Abstract Template.docx?url";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import { useSiteTheme } from "./context/SiteThemeProvider";
import { submitAbstractInlineClass } from "./constants/ctaStyles";

/** Bundled from `src/assets/docs/` so it works on all hosts. */
const TEMPLATE_WORD_HREF = extendedAbstractTemplateWord;
const TEMPLATE_LATEX_HREF = `${import.meta.env.BASE_URL}docs/ICODE26_template_latex.zip`;

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

      <main className="mx-auto flex-1 w-full max-w-7xl px-4 pb-20 pt-[calc(60px+2.5rem)] md:px-6 md:pb-28 md:pt-[calc(68px+4rem)]">
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
                  <a
                    href="https://cmt3.research.microsoft.com/ICODE2026"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="sm"
                      className={submitAbstractInlineClass(isDark, "sm:whitespace-nowrap whitespace-normal")}
                    >
                      <span className="flex items-center gap-1.5">
                        Submit Abstract
                        <ChevronRightIcon className="h-3.5 w-3.5" />
                      </span>
                    </Button>
                  </a>
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

          <section className="mt-12">
            <Reveal variant="scale">
              <div className="mx-auto w-full max-w-7xl rounded-3xl border border-uom-gold/45 bg-white/95 px-4 py-6 shadow-sm md:px-6 md:py-7">
              <Reveal variant="up">
                <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  <ClipboardDocumentListIcon className="h-6 w-6 text-uom-maroon" />
                  ICODE2026 Author Guidelines
                </h2>
              </Reveal>
              <Reveal variant="up" delayMs={120}>
                <p className="mt-2 text-sm text-neutral-700 md:text-base">
                  Follow these checkpoints to make your submission review-ready.
                </p>
              </Reveal>

              <div className="mt-5 grid gap-4">
                <Reveal variant="up" delayMs={0}>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <DocumentTextIcon className="h-4 w-4 text-uom-maroon" />
                    General Guidelines
                  </p>
                  <div className="mt-3 space-y-2 text-xs text-neutral-800 md:text-sm">
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">Language:</span> English
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">Word limit:</span> 700-1000 words (excluding author block and
                        references)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">Camera-ready:</span> maximum 3 pages (including author blocks and references, appendices are not permitted)

                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">Templates:</span> follow the official conference formats strictly
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <a
                      href={TEMPLATE_WORD_HREF}
                      download="ICODE2026-Extended Abstract Template.docx"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-700 bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                    >
                      <DocumentTextIcon className="h-4 w-4 text-white/90" />
                      <span>Word template</span>
                    </a>
                    <a
                      href={TEMPLATE_LATEX_HREF}
                      download="ICODE26_template_latex.zip"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-700 bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1"
                    >
                      <CodeBracketIcon className="h-4 w-4 text-white/90" />
                      <span>LaTeX template (.zip)</span>
                    </a>
                  </div>
                  </div>
                </Reveal>

                <Reveal variant="up" delayMs={120}>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                    Extended Abstract Submission
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">All extended abstract submissions</span> must be done through{" "}
                        <a
                          href="https://cmt3.research.microsoft.com/ICODE2026"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-uom-maroon underline underline-offset-2"
                        >
                          CMT
                        </a>
                        .
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        Please note that first time users are required to create a new{" "}
                        <a
                          href="https://cmt3.research.microsoft.com/ICODE2026"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-uom-maroon underline underline-offset-2"
                        >
                          CMT
                        </a>{" "}
                        account. You are advised to use an email address that you access regularly when
                        registering.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>Submissions should be in Portable Document Format (PDF) only.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        Submissions must comply with the specified word limit and page limit. Submissions that do
                        not meet these requirements will be desk rejected.
                      </p>
                    </li>
                    {/* <li className="flex items-start gap-2">
                      <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>When submitting, select the most appropriate track for your paper.</p>
                    </li> */}
                  </ul>
                  </div>
                </Reveal>

                <Reveal variant="up" delayMs={240}>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                    Blind Review Policy and Compliance
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">The initial submission</span> must not contain any identifying information such as author names, affiliations, emails, or acknowledgements. However, author details must be entered in the correct order within the CMT before submission.
                      </p>
                    </li>
                    {/* <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        Once accepted, all Camera-Ready extended abstracts should comply with the ICODE2026 
                        template. The extended abstracts must conform to the word and page limits.
                      </p>
                    </li> */}
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                         We request all authors to carefully review the submissions for language and formatting.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>All submissions will undergo a plagiarism check.</p>
                    </li>
                  </ul>
                  </div>
                </Reveal>

                <Reveal variant="up" delayMs={360}>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                    Author Responsibilities
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        The submission must present original research conducted by the authors and must not infringe
                        upon the intellectual property rights of any third party.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        The work must not have been previously published or be under consideration elsewhere, and
                        should not be simultaneously submitted to another conference, journal, or publication venue.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        The list of authors must accurately include only those who have made significant intellectual
                        contributions to the research.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        All data sources, images, figures, and other referenced materials must be properly
                        acknowledged and cited.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        Authors must also ensure that they have obtained the necessary permissions to reproduce any
                        third-party material, including images and figures.
                      </p>
                    </li>
                  </ul>
                  <br></br>
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                    Ethics and Conduct
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        Authors are expected to adhere to the highest standards of research integrity. Any form of
                        academic misconduct, including plagiarism, data fabrication, or falsification, will result
                        in immediate rejection of the submission and potential reporting to the authors&apos;
                        institutions.
                      </p>
                    </li>
                  </ul>
                  </div>
                </Reveal>
              </div>

              <Reveal variant="up" delayMs={480}>
                <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                  Review Process and AI Policy
                </p>
                <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Submissions will undergo a rigorous double-blind peer-review
                      process.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Program Committee members will review submissions based on research expertise and relevance.
                      Authors may be given a brief period to address initial review comments and submit a revised
                      version. Final decisions will be made by the program chairs.
                    </p>
                  </li>
                  <br></br>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                    <p>
                      <span className="font-semibold">Policy on Using Generative AI</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Authors are fully responsible for the submitted content. Generative AI tools must not be listed
                      as authors, and any substantive use of such tools in content creation should be disclosed in the
                      Acknowledgements section.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Use of generative AI for language assistance (e.g., paraphrasing, grammar or spell checking) does
                      not require disclosure.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRightIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Any AI-generated or AI-assisted content related to ideas or text must be clearly indicated, properly
                      cited where applicable, and disclosed when such ideas have been further developed by the authors.
                    </p>
                  </li>
                </ul>
                </div>
              </Reveal>

              <Reveal variant="up" delayMs={580}>
                <div className="mt-4 rounded-2xl border border-neutral-200 bg-white/80 px-4 py-4 text-xs md:text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-uom-gold/40 bg-uom-goldSoft/30">
                    <ChevronRightIcon className="h-5 w-5 text-uom-maroon" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-uom-maroon">
                      Warm regards,
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-neutral-900">
                      Conference Secretariat
                    </p>
                    <p className="mt-3 font-semibold text-neutral-900">
                      ICODE2026, Centre for Open and Distance Learning (CODL)
                    </p>
                    <p className="mt-1 text-neutral-900">
                      University of Moratuwa, Sri Lanka
                    </p>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl border border-neutral-200 bg-white px-3 py-2">
                        <p className="flex items-center gap-2 font-semibold text-neutral-900">
                          <EnvelopeIcon className="h-4 w-4 text-uom-maroon" />
                          Email:
                        </p>
                        <a
                          href="mailto:icode@codl.lk"
                          className="mt-1 block font-semibold text-uom-maroon hover:underline"
                        >
                          icode@codl.lk
                        </a>
                      </div>
                      <div className="rounded-xl border border-neutral-200 bg-white px-3 py-2">
                        <p className="flex items-center gap-2 font-semibold text-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 flex-none text-uom-maroon"
                            aria-hidden="true"
                          >
                            <path fill="currentColor" d={WHATSAPP_ICON_PATH} />
                          </svg>
                          WhatsApp:
                        </p>
                        <a
                          href={CONTACT_WHATSAPP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 block font-semibold text-uom-maroon hover:underline"
                          aria-label={`WhatsApp ${CONTACT_PHONE_DISPLAY}`}
                        >
                          {CONTACT_PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Reveal>
            </div>
            </Reveal>
          </section>
        </main>

        <Footer />
    </SitePageShell>
  );
}

