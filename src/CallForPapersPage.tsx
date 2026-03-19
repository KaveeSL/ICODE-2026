import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  Bars3Icon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  MapPinIcon,
  CheckCircleIcon,
  XMarkIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import mainBg from "./assets/bgmain.png";
import { Footer } from "./Footer";
import { Button } from "./components/ui/button";

const themes = [
  "Digital transformation in higher education",
  "Open and distance learning systems and innovations",
  "Artificial intelligence and emerging technologies in education",
  "Online pedagogy, assessment, and learner engagement",
  "Open educational resources (OER) and open practices",
  "Micro-credentials, credit transfer, and lifelong learning",
  "Quality assurance and governance in digital education",
  "Access, inclusion, and equity in online learning"
];

export default function CallForPapersPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div
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
              <Link to="/#fees" className="hover:text-uom-maroon">
                Fees
              </Link>
              <Link to="/#committees" className="hover:text-uom-maroon">
                Committees
              </Link>
              <Link to="/#contact" className="hover:text-uom-maroon">
                Contact
              </Link>
              <Link to="/call-for-papers">
                <Button size="sm" className="ml-2 border border-uom-gold bg-uom-goldSoft/90 text-neutral-900">
                  <span className="flex items-center gap-1">
                    Submit Abstract
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </span>
                </Button>
              </Link>
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
                    to="/#fees"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Fees
                  </Link>
                  <Link
                    to="/#dates"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Important Dates
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
                  <Link to="/call-for-papers" onClick={() => setMobileNavOpen(false)}>
                    <Button
                      size="lg"
                      className="w-full border border-uom-gold bg-uom-goldSoft/90 text-neutral-900"
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        Submit Abstract
                        <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </Button>
                  </Link>
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
                <span>Call for papers</span>
              </div>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                ICODE2026 – International Conference on Open and Digital Education
              </h1>
              <p className="mt-4 text-sm text-neutral-700 md:text-base">
                Hosted by the{" "}
                <span className="font-semibold">
                  Centre for Open and Distance Learning (CODL), University of Moratuwa, Sri Lanka
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
                <span>University of Moratuwa · Hybrid</span>
              </span>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2 md:items-start">
              {/* Key submission dates – timeline-style card */}
              <div className="flex h-full flex-col rounded-3xl border border-uom-gold/70 bg-white/95 px-4 py-4 shadow-sm md:px-5 md:py-5">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <CalendarDaysIcon className="h-5 w-5 text-uom-maroon" />
                  Key submission dates
                </h2>
                <div className="mt-3 space-y-2 text-xs text-neutral-800 md:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      1
                    </div>
                    <p>
                      <span className="font-semibold">Abstracts open:</span> 1 April 2026
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      2
                    </div>
                    <p>
                      <span className="font-semibold">Extended abstract deadline:</span> 20 May 2026{" "}
                      <span className="text-neutral-600">(extended to 27 May 2026)</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      3
                    </div>
                    <p>
                      <span className="font-semibold">Reviews due:</span> 19 June 2026{" "}
                      <span className="text-neutral-600">(final review: 24 June 2026)</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      4
                    </div>
                    <p>
                      <span className="font-semibold">Acceptance notification:</span> 1 July 2026
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      5
                    </div>
                    <p>
                      <span className="font-semibold">Registration deadline:</span> 15 July 2026
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uom-goldSoft text-[11px] font-semibold text-neutral-900">
                      6
                    </div>
                    <p>
                      <span className="font-semibold">Conference date:</span> 6 August 2026
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-3 text-[11px] text-neutral-600 md:flex-row md:items-center md:justify-between md:text-xs">
                  <p>Submit via the online abstract portal.</p>
                  <Button
                    size="sm"
                    className="border border-uom-gold bg-uom-goldSoft/90 text-neutral-900 sm:whitespace-nowrap whitespace-normal"
                  >
                    <span className="flex items-center gap-1.5">
                      Upload Abstract
                      <ChevronRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Extended abstract – quick overview */}
              <div className="flex h-full flex-col rounded-3xl border border-uom-maroon/40 bg-white/95 px-4 py-5 shadow-sm md:px-6 md:py-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                  <DocumentTextIcon className="h-5 w-5 text-uom-maroon" />
                  Extended abstract – quick overview
                </h2>
                <p className="mt-2 text-xs text-neutral-700 md:text-sm">
                  Submit a{" "}
                  <span className="font-semibold">2–4 page extended abstract (700–1,000 words)</span>{" "}
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
                Conference themes
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

          {/* Guidelines */}
          <section className="mt-16">
            <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2 md:items-stretch">
              {/* Submission guidelines – visual checklist */}
              <div className="flex h-full w-full flex-col rounded-3xl border border-border bg-white/95 px-4 py-5 shadow-sm md:px-6 md:py-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-neutral-900 md:text-base">
                  <DocumentTextIcon className="h-5 w-5 text-uom-maroon" />
                  Submission guidelines
                </h3>

                <div className="mt-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3 text-xs md:text-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Snapshot
                  </p>
                  <p className="mt-1 text-neutral-800">
                    <span className="font-semibold">700–1,000 words</span> within a{" "}
                    <span className="font-semibold">2–4 page extended abstract template</span>.
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-xs text-neutral-800 md:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>
                      Clearly explain{" "}
                      <span className="font-semibold">
                        background, objectives, methodology/approach, and findings
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>
                      Emphasise{" "}
                      <span className="font-semibold">
                        significance and implications for open and digital education
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>
                      Use <span className="font-semibold">APA 7th edition</span> for a concise reference
                      list.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none shrink-0 text-emerald-600" />
                    <span>
                      Prepare your file in{" "}
                      <span className="font-semibold">MS Word (.docx)</span> and upload it via the
                      online submission portal.
                    </span>
                  </li>
                </ul>

                <p className="mt-4 text-[11px] text-neutral-600 md:text-xs">
                  A downloadable template and the submission link will be available on the official
                  conference website.
                </p>
              </div>

              {/* Why participate – benefit tiles */}
              <div className="flex h-full w-full flex-col rounded-3xl border border-neutral-800 bg-neutral-950 text-neutral-50 px-4 py-5 shadow-sm md:px-6 md:py-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold md:text-base">
                  <CheckCircleIcon className="h-5 w-5 text-uom-goldSoft" />
                  Why participate?
                </h3>

                <div className="mt-3 grid flex-1 grid-cols-1 gap-3 text-xs md:text-sm md:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Visibility
                    </p>
                    <p className="mt-1">
                      Share high-impact research and practice with an{" "}
                      <span className="font-semibold">international audience</span>.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Networks
                    </p>
                    <p className="mt-1">
                      Build collaborations across{" "}
                      <span className="font-semibold">institutions, sectors, and regions</span>.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Influence
                    </p>
                    <p className="mt-1">
                      Engage with{" "}
                      <span className="font-semibold">
                        policy and institutional leaders in digital education
                      </span>
                      .
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-700 bg-neutral-900/80 px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Innovation
                    </p>
                    <p className="mt-1">
                      Showcase{" "}
                      <span className="font-semibold">
                        innovations in open, distance, and online learning
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Template overview */}
          <section className="mt-12">
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-border bg-white/95 px-4 py-6 shadow-sm md:px-6 md:py-7">
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                <DocumentTextIcon className="h-6 w-6 text-uom-maroon" />
                Extended abstract template – section overview
              </h2>
              <p className="mt-3 text-sm text-neutral-700 md:text-base">
                The ICODE2026 extended abstract template (2–4 pages) is designed to keep submissions
                focused while providing enough detail for rigorous review.
              </p>

            <div className="mt-5 space-y-3 text-xs text-neutral-800 md:text-sm">
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  1
                </span>
                <p>
                  <span className="font-semibold">Introduction</span> – Background, problem
                  statement, rationale, relevance to open/digital education, and link to conference
                  themes.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  2
                </span>
                <p>
                  <span className="font-semibold">Objectives / Research questions</span> – Main
                  objectives and key research questions or hypotheses.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  3
                </span>
                <p>
                  <span className="font-semibold">Literature context</span> – Concise overview of
                  theoretical or empirical foundations and contribution to existing work.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  4
                </span>
                <p>
                  <span className="font-semibold">Methodology / Approach</span> – Research design,
                  participants, data collection and analysis, or description of the innovation.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  5
                </span>
                <p>
                  <span className="font-semibold">Findings / Expected outcomes</span> – Key results,
                  preliminary findings, or anticipated impact.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  6
                </span>
                <p>
                  <span className="font-semibold">Discussion</span> – Significance, implications for
                  theory, policy, and practice in digital/open education.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  7
                </span>
                <p>
                  <span className="font-semibold">Conclusion</span> – Main takeaways, broader impact,
                  and future directions.
                </p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-uom-maroon text-[11px] font-semibold text-uom-goldSoft">
                  8
                </span>
                <p>
                  <span className="font-semibold">References</span> – APA 7th edition, limited to
                  works cited in the abstract.
                </p>
              </div>
            </div>

              <p className="mt-4 text-[11px] text-neutral-600 md:text-xs">
                For practice or innovation-focused submissions, authors may emphasise{" "}
                <span className="font-semibold">context, intervention, implementation, outcomes,</span>{" "}
                and <span className="font-semibold">scalability</span> rather than formal research
                methods.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

