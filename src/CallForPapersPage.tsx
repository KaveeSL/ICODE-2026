import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AcademicCapIcon,
  Bars3Icon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  CheckCircleIcon,
  XMarkIcon,
  ChevronRightIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import mainBg from "./assets/bgmain.png";
import { Footer } from "./Footer";
import { Button } from "./components/ui/button";
import { importantDates } from "./constants/importantDates";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "./constants/contact";

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
    index === arr.length - 1 ? { ...item, date: "6 August 2026" } : item
  );

  const scrollToExtendedAbstractTemplate = () => {
    const el = document.getElementById("extended-abstract-template");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="call-for-papers-page"
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="min-h-screen bg-white/80 backdrop-blur-xl flex flex-col">
        <header className="border-b border-white/60 bg-white/75 backdrop-blur-xl sticky top-0 z-40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 relative">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <div className="flex items-center gap-1.5">
                <div className="h-10 w-10 overflow-hidden rounded-[18px] md:h-11 md:w-11">
                  <img
                    src={logo}
                    alt="University of Moratuwa logo"
                    className="h-9 w-9 object-contain md:h-10 md:w-10"
                  />
                </div>
                <div className="h-10 w-10 overflow-hidden rounded-[18px] items-center justify-center flex">
                  <img
                    src={codlLogo}
                    alt="CODL logo"
                    className="h-9 w-9 object-contain"
                  />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-500">
                  CODL
                </p>
                <p className="text-[11px] font-semibold text-neutral-900">
                  University of Moratuwa · Sri Lanka
                </p>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 text-xs font-medium text-neutral-700 md:flex">
              <Link to="/#about" className="hover:text-uom-maroon">
                About
              </Link>
              <Link to="/#dates" className="hover:text-uom-maroon">
                Important Dates
              </Link>
              <Link to="/registration" className="hover:text-uom-maroon">
                Registration
              </Link>
              <Link to="/#committees" className="hover:text-uom-maroon">
                Committees
              </Link>
              <Link to="/#contact" className="hover:text-uom-maroon">
                Contact
              </Link>
              <a
                href="https://cmt3.research.microsoft.com/ICODE2026"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="sm"
                  className="ml-2 border border-uom-gold bg-uom-goldSoft/90 text-neutral-900"
                >
                  <span className="flex items-center gap-1">
                    Submit Abstract
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </span>
                </Button>
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/70 bg-white/65 p-2 text-uom-maroon"
              aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileNavOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden border-t border-white/60 bg-white/85 backdrop-blur-xl">
              <div className="mx-auto max-w-6xl px-4 py-4">
                <div className="flex flex-col gap-3 text-sm font-medium text-neutral-800">
                  <Link
                    to="/#about"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    About
                  </Link>
                  <Link
                    to="/#dates"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Important Dates
                  </Link>
                  <Link
                    to="/registration"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Registration
                  </Link>
                  <Link
                    to="/#committees"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Committees
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Contact
                  </Link>
                  <a
                    href="https://cmt3.research.microsoft.com/ICODE2026"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileNavOpen(false)}
                    className="w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full border border-uom-gold bg-uom-goldSoft/90 text-neutral-900"
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        Submit Abstract
                        <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="mx-auto flex-1 w-full max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pb-28 md:pt-16">
          {/* Hero intro */}
          <section>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
                <ClipboardDocumentListIcon className="h-3.5 w-3.5 text-uom-maroon" />
                <span>Call for Papers</span>
              </div>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                ICODE2026 – International Conference on Open and Digital Education
              </h1>
              <p className="mt-4 text-sm text-neutral-700 md:text-base">
                Hosted by the{" "}
                <span className="font-semibold">
                  Centre for Open and Distance Learning (CODL), Colombo, Sri Lanka
                </span>
                , ICODE2026 invites extended abstracts that explore the future of open, distance,
                online, and digital education.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-neutral-50 px-3 py-1">
                <CalendarDaysIcon className="h-3.5 w-3.5 text-uom-goldSoft" />
                <span>6 August 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-neutral-900 shadow-sm">
                <MapPinIcon className="h-3.5 w-3.5 text-uom-maroon" />
                <span>Colombo, Sri Lanka · Hybrid</span>
              </span>
            </div>

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
                  {keySubmissionDates.map((item, index) => (
                    <div
                      key={`${item.label}-${item.date}`}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                        {index + 1}
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">{item.label}:</span> {item.date}
                        </p>
                        <p className="mt-0.5 text-[11px] text-neutral-600 md:text-xs">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
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
                      className="border border-uom-gold bg-uom-goldSoft/90 text-neutral-900 sm:whitespace-nowrap whitespace-normal"
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
            <div className="mx-auto w-full max-w-6xl">
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                <ClipboardDocumentListIcon className="h-6 w-6 text-uom-maroon" />
                Conference Themes
              </h2>
              <p className="mt-2 text-sm text-neutral-700 md:text-base">
                Submissions are invited under, but not limited to, the following themes.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {themes.map((theme, index) => (
                  <div
                    key={theme}
                    className="flex items-center gap-3 rounded-2xl border border-uom-gold/50 bg-white/95 px-3 py-3 text-xs text-neutral-900 shadow-sm md:text-sm"
                  >
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      {index + 1}
                    </span>
                    <p className="leading-snug">{theme}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>

          <section id="extended-abstract-template" className="mt-12">
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-border bg-white/95 px-4 py-6 shadow-sm md:px-6 md:py-7">
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                <DocumentTextIcon className="h-6 w-6 text-uom-maroon" />
                Extended Abstract Template – Section Overview
              </h2>
              <p className="mt-3 text-sm text-neutral-700 md:text-base">
                The ICODE2026 extended abstract template (2–3 pages) is designed to
                keep submissions focused while providing enough detail for rigorous
                review.
              </p>

              <div className="mt-5 space-y-3 text-xs text-neutral-800 md:text-sm">
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">1. Introduction</span> – Background, problem
                    statement, rationale, relevance to open/digital education, and link to
                    conference themes.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">2. Objectives / Research questions</span> – Main
                    objectives and key research questions or hypotheses.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">3. Literature context</span> – Concise overview
                    of theoretical or empirical foundations and contribution to existing work.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">4. Methodology / Approach</span> – Research
                    design, participants, data collection and analysis, or description of the
                    innovation.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">5. Findings / Expected outcomes</span> – Key
                    results, preliminary findings, or anticipated impact.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">6. Discussion</span> – Significance,
                    implications for theory, policy, and practice in digital/open education.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">7. Conclusion</span> – Main takeaways, broader
                    impact, and future directions.
                  </p>
                </div>
                <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <p>
                    <span className="font-semibold">8. References</span> – APA 7th edition, limited
                    to works cited in the abstract.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-neutral-600 md:text-xs">
                For practice or innovation-focused submissions, authors may emphasise
                context, intervention, implementation, outcomes, and scalability rather
                than formal research methods.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-uom-gold/45 bg-white/95 px-4 py-6 shadow-sm md:px-6 md:py-7">
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                <ClipboardDocumentListIcon className="h-6 w-6 text-uom-maroon" />
                ICODE2026 Author Guidelines
              </h2>
              <p className="mt-2 text-sm text-neutral-700 md:text-base">
                Follow these checkpoints to make your submission review-ready.
              </p>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <DocumentTextIcon className="h-4 w-4 text-uom-maroon" />
                    General Guidelines
                  </p>
                  <div className="mt-3 space-y-2 text-xs text-neutral-800 md:text-sm">
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        <span className="font-semibold">Language:</span> English
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        <span className="font-semibold">Word limit:</span> 700-1000 words (excluding author block and
                        references)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        <span className="font-semibold">Camera-ready:</span> maximum 3 pages
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white/70 px-3 py-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        <span className="font-semibold">Templates:</span> follow the official conference formats strictly
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <a
                      href="/src/assets/docs/ICODE26_template_word.docx"
                      download
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-blue-700 bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                    >
                      <DocumentTextIcon className="h-4 w-4 text-white/90" />
                      <span>Word template</span>
                    </a>
                    <a
                      href="/src/assets/docs/ICODE26_template_latex.zip"
                      download
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-700 bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1"
                    >
                      <CodeBracketIcon className="h-4 w-4 text-white/90" />
                      <span>LaTeX template (.zip)</span>
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <ClipboardDocumentListIcon className="h-4 w-4 text-uom-maroon" />
                    Paper Submission
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        <span className="font-semibold">All paper submissions</span> must be done through{" "}
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
                      <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
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
                      <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>Submissions should be in Portable Document Format (PDF) only.</p>
                    </li>
                    {/* <li className="flex items-start gap-2">
                      <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>When submitting, select the most appropriate track for your paper.</p>
                    </li> */}
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <AcademicCapIcon className="h-4 w-4 text-uom-maroon" />
                    Blind Review and Compliance
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        <span className="font-semibold">Initial submissions</span> must not contain any identifying
                        information such as author names, affiliations, emails, or acknowledgements. Initial
                        submissions violating the blind review policy will be desk rejected.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        Once accepted, all Camera-Ready papers should comply with the ICODE2026 conference paper
                        template. The papers must conform to the word and page limits.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>
                        Submissions that do not meet the word limit and the page limit will be desk rejected. We
                        request all authors to carefully review the submissions for language and formatting.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <p>All submissions will undergo a plagiarism check.</p>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <CheckCircleIcon className="h-4 w-4 text-uom-maroon" />
                    Ethics and Conduct
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                    <li className="flex items-start gap-2">
                      <AcademicCapIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                      <p>
                        Authors are expected to adhere to the highest standards of research integrity. Any form of
                        academic misconduct, including plagiarism, data fabrication, or falsification, will result
                        in immediate rejection of the submission and potential reporting to the authors&apos;
                        institutions.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <ClipboardDocumentListIcon className="h-4 w-4 text-uom-maroon" />
                  Review Process and AI Policy
                </p>
                <ul className="mt-2 space-y-2 text-xs text-neutral-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                    <p>
                      <span className="font-semibold">Submissions</span> will undergo a rigorous double-blind peer-review
                      process. Initial submissions with a high similarity index will be desk-rejected.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                    <p>
                      Program Committee members will review submissions based on research expertise and relevance.
                      Authors may be given a brief period to address initial review comments and submit a revised
                      version. Final decisions will be made by the program chairs.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      <span className="font-semibold">Policy on Using Generative AI</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Authors are fully responsible for the submitted content. Generative AI tools must not be listed
                      as authors, and any substantive use of such tools in content creation should be disclosed in the
                      Acknowledgements section.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Use of generative AI for language assistance (e.g., paraphrasing, grammar or spell checking) does
                      not require disclosure.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <DocumentTextIcon className="mt-0.5 h-4 w-4 flex-none text-uom-maroon" />
                    <p>
                      Any AI-generated or AI-assisted content related to ideas or text must be clearly indicated, properly
                      cited where applicable, and disclosed when such ideas have been further developed by the authors.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-neutral-200 bg-white/80 px-4 py-4 text-xs md:text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-uom-gold/40 bg-uom-goldSoft/30">
                    <ChevronRightIcon className="h-5 w-5 text-uom-maroon" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-uom-maroon">
                      Warm regards, Conference Secretariat
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-neutral-900">
                      (Conference Secretariat)
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
                          <PhoneIcon className="h-4 w-4 text-uom-maroon" />
                          Phone:
                        </p>
                        <a
                          href={`tel:${CONTACT_PHONE_TEL}`}
                          className="mt-1 block font-semibold text-uom-maroon hover:underline"
                        >
                          {CONTACT_PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

