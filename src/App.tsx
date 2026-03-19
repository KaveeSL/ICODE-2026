import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AcademicCapIcon,
  Bars3Icon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  CursorArrowRaysIcon,
  InformationCircleIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Accordion } from "./components/ui/accordion";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import mainBg from "./assets/bgmain.png";
import campusBg from "./assets/bgimg.PNG";
import { Footer } from "./Footer";

const importantDates = [
  {
    label: "Abstracts open",
    date: "1 April 2026",
    note: "Extended abstracts portal opens"
  },
  {
    label: "Extended abstract deadline",
    date: "20 May 2026",
    note: "Extended deadline: 27 May 2026"
  },
  {
    label: "Reviews due",
    date: "19 June 2026",
    note: "Final review deadline: 24 June 2026"
  },
  {
    label: "Acceptance notification",
    date: "1 July 2026",
    note: "Decision letters sent"
  },
  {
    label: "Registration deadline",
    date: "15 July 2026",
    note: "Presenter & participant registration"
  },
  {
    label: "Conference",
    date: "5–7 August 2026",
    note: "Hybrid – University of Moratuwa"
  }
];

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

const faqItems = [
  {
    id: "who",
    question: "Who is ICODE2026 for?",
    answer: (
      <p>
        ICODE2026 welcomes researchers, academics, instructional designers, policy
        makers, EdTech developers, doctoral students, educational technologists,
        and leaders in open, distance, and digital education from Sri Lanka and worldwide.
      </p>
    )
  },
  {
    id: "format",
    question: "What is the conference format?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Day 1 – Policy &amp; Leadership Summit (5 August)</li>
        <li>Day 2 – Academic Research Conference (6 August)</li>
        <li>Day 3 – Practice, Innovation &amp; Capacity Building Workshops (7 August)</li>
        <li>Hybrid participation with on-site and online options</li>
      </ul>
    )
  },
  {
    id: "submissions",
    question: "What type of submissions are expected?",
    answer: (
      <p>
        We invite extended abstracts (800–1,000 words) presenting empirical
        research, design-based studies, innovative practices, policy analyses, or
        case studies aligned with the conference themes. Detailed templates and
        submission guidelines will be provided via the submission portal.
      </p>
    )
  },
  {
    id: "proceedings",
    question: "Will there be published proceedings?",
    answer: (
      <p>
        Yes. All accepted and presented contributions will be included in the
        peer-reviewed ICODE2026 Conference Proceedings. Selected papers may be
        considered for extended publication in partnered outlets.
      </p>
    )
  },
  {
    id: "venue",
    question: "Where will the conference take place?",
    answer: (
      <p>
        The physical hub of ICODE2026 is the University of Moratuwa, Sri Lanka,
        hosted by the Centre for Open and Distance Learning (CODL). A fully
        supported virtual track will enable remote participation.
      </p>
    )
  }
];

const conferenceStart = new Date("2026-08-05T09:00:00+05:30").getTime();

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(target - now, 0);
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, completed: diff === 0 };
}

function App() {
  const countdown = useCountdown(conferenceStart);
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Smooth scroll to in-page anchors with header offset
  useEffect(() => {
    const headerOffset = 96;
    const { hash } = location;

    const id = window.setTimeout(() => {
      if (hash) {
        const targetId = hash.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = window.pageYOffset + rect.top - headerOffset;
          window.scrollTo({ top: offset, behavior: "smooth" });
          return;
        }
      }
      // Default: scroll to top when there is no hash or target not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(id);
  }, [location.pathname, location.hash]);

  // Close mobile navigation on route/hash changes
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname, location.hash]);
  return (
    <div
      id="top"
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="min-h-screen bg-white/70 hero-gradient backdrop-blur-2xl">
        <header className="border-b border-white/60 bg-white/55 backdrop-blur-xl sticky top-0 z-40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 relative">
            <a href="#top" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
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
            </a>
            <nav className="hidden items-center gap-6 text-xs font-medium text-neutral-700 md:flex">
              <a href="#about" className="hover:text-uom-maroon">
                About
              </a>
              <a href="#dates" className="hover:text-uom-maroon">
                Timeline
              </a>
              <a href="#days" className="hover:text-uom-maroon">
                3-day programme
              </a>
              <a href="#committees" className="hover:text-uom-maroon">
                Committees
              </a>
              <a href="#faq" className="hover:text-uom-maroon">
                FAQs
              </a>
              <a href="#contact" className="hover:text-uom-maroon">
                Contact
              </a>
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
              {mobileNavOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
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
                    Timeline
                  </Link>
                  <Link
                    to="/#days"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    3-day programme
                  </Link>
                  <Link
                    to="/#committees"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Committees
                  </Link>
                  <Link
                    to="/#faq"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:text-uom-maroon"
                  >
                    Contact
                  </Link>
                  <div className="pt-2">
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
            </div>
          )}
        </header>

        {/* Top visual hero with main campus image using theme colours */}
        <section
          className="relative overflow-visible border-b border-white/40 md:overflow-hidden"
          aria-labelledby="icode-hero-heading"
        >
          <div
            className="relative min-h-[600px] w-full md:h-[80vh] md:min-h-0 md:pt-0 md:pb-0 pt-[calc(7.5rem+env(safe-area-inset-top))] pb-[calc(3.5rem+env(safe-area-inset-bottom))]"
          >
            <img
              src={mainBg}
              alt="University of Moratuwa main campus greenery"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/75 via-neutral-900/45 to-uom-maroon/55 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="relative z-10 flex items-start md:h-full md:items-center">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
                <div className="max-w-xl text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-uom-goldSoft">
                    ICODE2026 · International Conference
                  </p>
                  <h1
                    id="icode-hero-heading"
                    className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.8rem] md:leading-[1.05]"
                  >
                    ICODE2026
                    <span className="block text-uom-goldSoft">
                      International Conference on Open and Digital Education
                    </span>
                  </h1>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-100 md:text-base">
                    Proudly hosted by the{" "}
                    <span className="font-semibold">
                      Centre for Open and Distance Learning (CODL), University of
                      Moratuwa
                    </span>{" "}
                    – celebrating 20 years of excellence in digital higher education.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-neutral-900 shadow-sm">
                      <CalendarDaysIcon className="h-3.5 w-3.5 text-uom-maroon" />
                      <span className="text-[11px] tracking-[0.22em]">
                        5–7 August 2026
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] tracking-[0.22em] text-neutral-900 shadow-sm">
                      <MapPinIcon className="h-3 w-3 text-uom-maroon" />
                      <span>Colombo · Sri Lanka · Hybrid</span>
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
                    <Link to="/call-for-papers">
                      <Button
                        size="lg"
                        className="h-auto min-h-12 w-full sm:w-auto border border-uom-gold bg-uom-goldSoft/90 text-neutral-900"
                      >
                        <span className="flex items-center gap-1.5">
                          Submit Abstract
                          <ChevronRightIcon className="h-4 w-4 shrink-0" />
                        </span>
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-auto min-h-12 w-full sm:w-auto border-white/80 bg-white/5 text-white hover:bg-white/15 hover:text-white font-semibold shadow-sm"
                    >
                      <span className="flex items-center gap-1.5">
                        <CursorArrowRaysIcon className="h-4 w-4 shrink-0" />
                        <span className="flex-1 text-center whitespace-normal leading-snug">
                          Register your interest
                        </span>
                        <ChevronRightIcon className="h-4 w-4 shrink-0" />
                      </span>
                    </Button>
                    <Link to="/programme">
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-auto min-h-12 w-full sm:w-auto border-white/80 bg-white/5 text-white hover:bg-white/15 hover:text-white font-semibold shadow-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          <CalendarDaysIcon className="h-4 w-4 shrink-0" />
                          <span className="flex-1 text-center whitespace-normal leading-snug">
                            View 3-day schedule (coming soon)
                          </span>
                          <ChevronRightIcon className="h-4 w-4 shrink-0" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pb-28 md:pt-10">
        {/* About */}
        <section id="about" className="mt-10 md:mt-14 scroll-mt-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,3.1fr)_minmax(0,2.4fr)] md:items-stretch">
            <div className="flex h-full flex-col">
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                <InformationCircleIcon className="h-6 w-6 text-uom-maroon" />
                About ICODE2026
              </h2>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 md:text-base">
                <p>
                  ICODE2026 is an international conference curated by the{" "}
                  <span className="font-semibold">
                    Centre for Open and Distance Learning (CODL)
                  </span>{" "}
                  of the University of Moratuwa. It was conceived as a space where
                  policy makers, researchers, and practitioners could design the
                  next generation of{" "}
                  <span className="font-semibold">
                    open, distance, and digital education
                  </span>{" "}
                  together.
                </p>
                <p>
                  Over three days, the programme moves intentionally from{" "}
                  <span className="font-semibold">policy rooms</span> to{" "}
                  <span className="font-semibold">research sessions</span> and then
                  into <span className="font-semibold">classrooms and platforms</span>.
                  Conversations focus on resilient digital ecosystems, inclusive
                  learning pathways, micro-credentials, and quality assurance in a
                  rapidly changing higher education landscape.
                </p>
              </div>

              <div className="mt-4 overflow-hidden rounded-3xl border border-white/80 bg-white/60 shadow-sm">
                <img
                  src={campusBg}
                  alt="Green campus setting at the University of Moratuwa"
                  className="h-40 w-full object-cover md:h-48"
                />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
                While rooted in Sri Lanka, ICODE2026 is{" "}
                <span className="font-semibold">international in scope</span>,
                welcoming contributors from across the Global South and Global North
                working on open, distance, and digital learning in universities,
                professional education, and lifelong learning systems.
              </p>
            </div>

            <Card className="h-full border border-uom-gold/40 bg-white/95">
              <CardHeader>
                <CardTitle>Why participate?</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col space-y-3 text-sm text-neutral-800">
                <div className="space-y-3">
                  <p className="text-sm text-neutral-700">
                    Join a focused community working at the intersection of{" "}
                    <span className="font-semibold">
                      policy, research, and practice
                    </span>{" "}
                    in open and digital education.
                  </p>

                  <div className="space-y-1.5 border-l border-uom-gold/60 pl-3">
                    <p>• Present high-impact work to an international audience.</p>
                    <p>• Build collaborations across institutions and sectors.</p>
                    <p>• Showcase innovative digital learning initiatives.</p>
                    <p>• Engage with regional and global leaders in ODL.</p>
                    <p>• Help shape an inclusive, future-ready digital agenda.</p>
                  </div>

                  <div className="mt-2 space-y-1 text-xs text-neutral-600">
                    <p className="font-semibold text-neutral-700">
                      Especially valuable for:
                    </p>
                    <p>• Early- and mid-career academics seeking feedback and networks.</p>
                    <p>• Instructional designers and EdTech teams scaling digital programmes.</p>
                    <p>• Policy and quality leaders planning national or institutional reforms.</p>
                  </div>
                </div>

                <div className="mt-auto rounded-2xl border border-uom-gold/30 bg-uom-goldSoft/20 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700">
                    What you can take home
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">
                    Practical insights you can apply immediately, from governance and
                    quality assurance to learning analytics, AI support tools, and
                    sustainable ODL models.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-white/90 px-4 py-4 md:px-5 md:py-5 space-y-4">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              <AcademicCapIcon className="h-4 w-4 text-uom-maroon" />
              About the host institution
            </h3>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-uom-maroon/10 text-uom-maroon">
                <InformationCircleIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  CODL
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Centre for Open and Distance Learning
                </p>
                <p className="mt-1 text-xs text-neutral-700">
                  Over two decades of leadership in technology-enhanced higher
                  education, large-scale virtual learning environments, and national
                  and international collaborations in open education.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-uom-gold/40 pt-3">
              <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-uom-goldSoft/80 text-neutral-900">
                <CursorArrowRaysIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  BIT programme
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Bachelor of Information Technology (External)
                </p>
                <p className="mt-1 text-xs text-neutral-700">
                  A nationally recognised, industry-aligned computing degree that
                  has enabled thousands of learners to join Sri Lanka&apos;s digital
                  workforce.
                </p>
                <div className="mt-2">
                  <a
                    href="https://bit.uom.lk/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-uom-maroon hover:underline"
                  >
                    Visit BIT programme site
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-border pt-3">
              <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-neutral-900 text-neutral-50">
                <GlobeAltIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  University of Moratuwa
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  A leading technological university in South Asia
                </p>
                <p className="mt-1 text-xs text-neutral-700">
                  Known for engineering, architecture, and IT programmes, the
                  university has a strong track record in digital learning, industry
                  partnerships, and EdTech innovation across the region.
                </p>
                <div className="mt-2">
                  <a
                    href="https://uom.lk/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-uom-maroon hover:underline"
                  >
                    Visit University of Moratuwa site
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-day structure */}
        <section id="days" className="mt-16 md:mt-20 scroll-mt-24">
          <div className="flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              <CursorArrowRaysIcon className="h-6 w-6 text-uom-maroon" />
              A Three-day Integrated Programme
            </h2>
            <div className="hidden items-center gap-4 md:flex">
              <Badge variant="solid">5–7 August 2026</Badge>
              <Link
                to="/programme"
                className="flex items-center gap-1.5 text-[11px] font-semibold text-uom-maroon hover:underline"
              >
                <span>View full programme</span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="border border-uom-maroon/25 bg-white/95">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>Day 1 · Policy &amp; Leadership Summit</CardTitle>
                  <span className="hidden rounded-full border border-uom-maroon/40 bg-uom-maroon/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-uom-maroon md:inline-flex">
                    Policy
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-uom-maroon">
                  5 August 2026
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-800">
                <div className="flex gap-3">
                  <div className="mt-1 h-full w-1 rounded-full bg-uom-maroon" />
                  <div className="space-y-2">
                    <p>
                      Governance, quality, and digital transformation in higher
                      education – designed for ministries, UGC, QA bodies, and
                      institutional leaders.
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-700">
                      <li>• Ministerial and agency panels</li>
                      <li>• Vice-Chancellors&apos; roundtables</li>
                      <li>• Strategic policy dialogues</li>
                      <li>• Leadership communiqué</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-uom-gold/45 bg-uom-goldSoft/70">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>Day 2 · Academic Research Conference</CardTitle>
                  <span className="hidden rounded-full border border-uom-maroon/50 bg-uom-maroon/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-uom-goldSoft md:inline-flex">
                    Research
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-uom-maroon">
                  6 August 2026
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-900">
                <div className="flex gap-3">
                  <div className="mt-1 h-full w-1 rounded-full bg-uom-gold" />
                  <div className="space-y-2">
                    <p>
                      A peer-reviewed research forum for scholars exploring the
                      future of open, distance, and digital education.
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-800">
                      <li>• Keynote addresses and invited talks</li>
                      <li>• Parallel paper sessions and symposia</li>
                      <li>• Poster and demonstration space</li>
                      <li>• Best paper recognitions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-uom-maroon/18 bg-white/95">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>Day 3 · Practice &amp; Innovation Workshops</CardTitle>
                  <span className="hidden rounded-full border border-uom-gold/60 bg-uom-gold/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-900 md:inline-flex">
                    Practice
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-uom-maroon">
                  7 August 2026
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-800">
                <div className="flex gap-3">
                  <div className="mt-1 h-full w-1 rounded-full bg-uom-maroon" />
                  <div className="space-y-2">
                    <p>
                      Deep-dive, hands-on sessions for instructional designers,
                      Moodle administrators, faculty, and EdTech teams.
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-800">
                      <li>• Course design studios and LX labs</li>
                      <li>• Learning analytics and AI tools</li>
                      <li>• Case-based institutional showcases</li>
                      <li>• Micro-credential and recognition dialogues</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important dates timeline */}
        <section id="dates" className="mt-16 md:mt-20 scroll-mt-24">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                <span className="inline-flex items-center gap-2">
                  <CalendarDaysIcon className="h-6 w-6 text-uom-maroon" />
                  Timeline
                </span>
              </h2>
              <p className="mt-2 text-sm text-neutral-700 md:text-base">
                Plan your submissions and registration for ICODE2026.
              </p>
            </div>
            <Badge variant="outline" className="hidden md:inline-flex">
              5–7 August 2026
            </Badge>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="mt-8 md:hidden">
            <ol className="relative space-y-4">
              <div
                aria-hidden="true"
                className="absolute left-[19px] top-4 bottom-4 w-px bg-neutral-300"
              />

              {importantDates.map((item) => (
                <li key={item.label} className="relative flex items-start gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-uom-gold bg-uom-goldSoft/80 shadow-sm">
                    <CalendarDaysIcon className="h-5 w-5 text-uom-maroon" />
                  </div>

                  <div className="flex-1 rounded-xl border border-uom-gold/40 bg-white/95 px-4 py-3 shadow-sm">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-uom-maroon">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-neutral-900">
                      {item.date}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-700">
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="mt-8 hidden md:block">
            <ol className="flex flex-row gap-8 md:flex-row md:items-stretch md:justify-between">
              {importantDates.map((item, index) => (
                <li key={item.label} className="flex flex-1">
                  <div className="flex w-full flex-col items-center text-center md:px-2">
                    <div className="flex w-full items-center gap-2">
                      <div
                        className={`hidden h-px flex-1 md:block ${
                          index === 0 ? "bg-transparent" : "bg-neutral-300"
                        }`}
                      />
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-uom-gold bg-uom-goldSoft/80 shadow-sm">
                        <CalendarDaysIcon className="h-4 w-4 text-uom-maroon" />
                      </div>
                      <div
                        className={`hidden h-px flex-1 md:block ${
                          index === importantDates.length - 1
                            ? "bg-transparent"
                            : "bg-neutral-300"
                        }`}
                      />
                    </div>
                    <div className="mt-3 flex w-full flex-col justify-start rounded-2xl border border-uom-gold/80 bg-white/95 px-3 py-4 shadow-[0_12px_30px_rgba(161,98,7,0.28)] md:h-full md:justify-between md:px-4 md:py-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-uom-maroon">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-neutral-900 md:text-base">
                        {item.date}
                      </p>
                      <p className="mt-1 text-xs text-neutral-700 md:text-sm">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Registration fee structure */}
        <section className="mt-16 md:mt-20 scroll-mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              <CurrencyDollarIcon className="h-7 w-7 text-uom-maroon" />
              <span>Registration Fees</span>
            </h2>
            <p className="mt-2 flex items-start justify-center gap-2 text-sm text-neutral-700 md:items-center md:text-base">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 text-uom-maroon" />
              <span>Choose the option that best fits how you plan to join ICODE2026.</span>
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {/* International tier */}
            <div className="relative flex flex-col rounded-3xl border border-uom-maroon/50 bg-white/90 p-6 shadow-sm md:p-7">
              <p
                id="tier-international"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-uom-maroon"
              >
                International participants
              </p>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  $150
                </span>
                <span className="text-xs text-neutral-500">from (physical academic)</span>
              </p>
              <p className="mt-2 text-xs text-neutral-600 md:text-sm">
                For academics and students based outside Sri Lanka, with physical and online options.
              </p>
              <ul className="mt-5 space-y-2 text-xs md:text-sm">
                <li className="flex gap-2 text-emerald-700">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <span>
                    <span className="font-semibold">$150</span> – Physical (Academic)
                  </span>
                </li>
                <li className="flex gap-2 text-emerald-700">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <span>
                    <span className="font-semibold">$100</span> – Physical (Student)
                  </span>
                </li>
                <li className="flex gap-2 text-sky-700">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-sky-600" />
                  <span>
                    <span className="font-semibold">$75</span> – Online (Academic)
                  </span>
                </li>
                <li className="flex gap-2 text-sky-700">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-sky-600" />
                  <span>
                    <span className="font-semibold">$50</span> – Online (Student)
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-neutral-500 md:text-xs">
                Early bird (before 10 July) – 10–15% off the above rates. Group / institutional rates for multiple registrations.
              </p>
            </div>

            {/* Local tier */}
            <div className="relative flex flex-col rounded-3xl border border-uom-gold/60 bg-uom-goldSoft/80 p-6 shadow-sm md:p-7">
              <p
                id="tier-local"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-900"
              >
                Sri Lanka participants
              </p>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  LKR ≈ $75
                </span>
                <span className="text-xs text-neutral-700">from (physical academic)</span>
              </p>
              <p className="mt-2 text-xs text-neutral-800 md:text-sm">
                Fees payable in LKR, calculated at the prevailing exchange rate.
              </p>
              <ul className="mt-5 space-y-2 text-xs md:text-sm">
                <li className="flex gap-2 text-emerald-800">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-700" />
                  <span>
                    <span className="font-semibold">LKR equivalent of $75</span> – Physical (Academic)
                  </span>
                </li>
                <li className="flex gap-2 text-emerald-800">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-700" />
                  <span>
                    <span className="font-semibold">LKR equivalent of $40</span> – Physical (Student)
                  </span>
                </li>
                <li className="flex gap-2 text-sky-800">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-sky-700" />
                  <span>
                    <span className="font-semibold">LKR equivalent of $40</span> – Online (Academic)
                  </span>
                </li>
                <li className="flex gap-2 text-sky-800">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-sky-700" />
                  <span>
                    <span className="font-semibold">LKR equivalent of $25</span> – Online (Student)
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-neutral-700 md:text-xs">
                Early bird (before 10 July) – 10–15% off the above rates. Group / institutional rates for multiple registrations.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsors carousel */}
        <section className="mt-16 md:mt-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  <UsersIcon className="h-6 w-6 text-uom-maroon" />
                  Partners &amp; Sponsors
                </h2>
                <p className="mt-1 text-sm text-neutral-700 md:text-base">
                  Grateful for the institutions supporting ICODE2026.
                </p>
              </div>
            </div>

            <div className="mt-5 sponsor-slider">
              <div className="sponsor-track gap-12 items-center">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex h-16 items-center justify-center md:h-20"
                  >
                    <img
                      src={logo}
                      alt="University of Moratuwa logo"
                      className="h-10 w-auto opacity-90 md:h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Committees & organising structure (high-level) */}
        <section id="committees" className="mt-16 md:mt-20 scroll-mt-24">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            <UsersIcon className="h-6 w-6 text-uom-maroon" />
            Conference Governance and Organisation
          </h2>
          <p className="mt-2 text-sm text-neutral-700 md:text-base">
            ICODE2026 is guided by a layered governance model that brings together
            strategic leadership, academic quality, and day-to-day operations.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="relative overflow-hidden h-full">
              <CardHeader>
                <CardTitle>Strategic leadership</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-3 text-sm text-neutral-800">
                <p>
                  Event Patron and Co‑chairs provide overall direction with support
                  from the International Advisory Board and summit steering groups.
                </p>
                <Link to="/governance#strategic" className="block mt-auto pt-1">
                  <span className="group flex w-full min-h-[44px] items-center justify-between gap-2 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-4 text-[11px] font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-uom-goldSoft hover:to-white hover:shadow-md">
                    <span className="inline-flex items-center gap-1.5 sm:whitespace-nowrap whitespace-normal">
                      <UsersIcon className="h-3.5 w-3.5 text-uom-maroon" />
                      <span>View strategic leadership</span>
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden h-full">
              <CardHeader>
                <CardTitle>Academic &amp; publications</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-3 text-sm text-neutral-800">
                <p>
                  Programme, review, and publications teams coordinate submissions,
                  peer review, and the ICODE2026 proceedings.
                </p>
                <Link to="/governance#academic" className="block mt-auto pt-1">
                  <span className="group flex w-full min-h-[44px] items-center justify-between gap-2 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-4 text-[11px] font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-uom-goldSoft hover:to-white hover:shadow-md">
                    <span className="inline-flex items-center gap-1.5 sm:whitespace-nowrap whitespace-normal">
                      <AcademicCapIcon className="h-3.5 w-3.5 text-uom-maroon group-hover:text-uom-maroon" />
                      <span>View academic &amp; publications</span>
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden h-full">
              <CardHeader>
                <CardTitle>Operations &amp; experience</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-3 text-sm text-neutral-800">
                <p>
                  Dedicated committees handle finance, logistics, media, ethics,
                  risk, and volunteer coordination to ensure a smooth hybrid event.
                </p>
                <Link to="/governance#operations" className="block mt-auto pt-1">
                  <span className="group flex w-full min-h-[44px] items-center justify-between gap-2 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-4 text-[11px] font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-uom-goldSoft hover:to-white hover:shadow-md">
                    <span className="inline-flex items-center gap-1.5 sm:whitespace-nowrap whitespace-normal">
                      <CursorArrowRaysIcon className="h-3.5 w-3.5 text-uom-maroon group-hover:text-uom-maroon" />
                      <span>View operations &amp; experience</span>
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16 md:mt-20 scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.5fr)] md:items-start">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                <QuestionMarkCircleIcon className="h-6 w-6 text-uom-maroon" />
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-neutral-700 md:text-base">
                A quick overview for prospective authors, participants, and
                partners. More details will be available via the full conference
                website.
              </p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 md:mt-20 scroll-mt-24">
          <div className="mx-auto max-w-6xl rounded-[28px] border border-uom-gold/60 bg-white/85 px-4 py-5 shadow-sm md:px-6 md:py-6">
            <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.3fr)] md:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
                  <EnvelopeIcon className="h-3.5 w-3.5" />
                  Contact
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  Get in Touch
                </h2>
                <p className="mt-2 text-sm text-neutral-700 md:text-base">
                  For questions about submissions, registration, or logistics,
                  the{" "}
                  <span className="font-semibold">
                    ICODE2026 Conference Organising Committee
                  </span>{" "}
                  is your primary point of contact.
                </p>
                <p className="mt-2 text-xs text-neutral-600 md:text-sm">
                  Email is preferred. We aim to respond within{" "}
                  <span className="font-semibold">3–5 working days</span>.
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-800">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-uom-maroon text-neutral-50">
                    <EnvelopeIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      Email
                    </p>
                    <a
                      href="mailto:info@codl.lk"
                      className="mt-1 inline-flex items-center text-sm font-medium text-uom-maroon hover:underline"
                    >
                      info@codl.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-50">
                    <PhoneIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      Phone (office hours)
                    </p>
                    <p className="mt-1 text-sm">
                      +94 11 308 2787 / +94 11 308 2788
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-uom-goldSoft text-neutral-900">
                    <MapPinIcon className="h-4 w-4" />
                  </div>
                  <div className="w-full">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      Postal address
                    </p>
                    <p>Centre for Open &amp; Distance Learning (CODL)</p>
                    <p>University of Moratuwa</p>
                    <p>Katubedda, Sri Lanka</p>
                    <div className="mt-3 rounded-2xl border border-border overflow-hidden bg-neutral-100">
                      <div className="relative h-40 w-full md:h-48">
                        <iframe
                          title="University of Moratuwa location"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7920910557937!2d79.89829207553322!3d6.795132919946063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7f34b5%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1773647678993!5m2!1sen!2slk"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="h-full w-full border-0"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-50">
                    <GlobeAltIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      Social &amp; web
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
                      <a
                        href="https://www.facebook.com/bit.mrt.ac.lk?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 hover:border-uom-maroon hover:text-uom-maroon"
                      >
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-neutral-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M13.5 21v-7h2.25L16 11h-2.5V9.25C13.5 8.56 13.69 8 14.7 8H16V5.75C15.49 5.68 14.8 5.5 13.93 5.5 11.96 5.5 10.5 6.74 10.5 9v2H8v3h2.5v7h3Z"
                            />
                          </svg>
                        </span>
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://www.instagram.com/bitatuom/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 hover:border-uom-maroon hover:text-uom-maroon"
                      >
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-neutral-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3 w-3"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="5"
                              ry="5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="17" cy="7" r="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.youtube.com/@BITUoMLK"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 hover:border-uom-maroon hover:text-uom-maroon"
                      >
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-neutral-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.947C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.87.554A2.75 2.75 0 0 0 2.2 8.001 28.4 28.4 0 0 0 1.5 12a28.4 28.4 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.947C5.9 18.5 12 18.5 12 18.5s6.1 0 7.87-.554a2.75 2.75 0 0 0 1.93-1.947A28.4 28.4 0 0 0 22.5 12a28.4 28.4 0 0 0-.7-3.999Z"
                            />
                            <path
                              fill="black"
                              d="m10 15.5 5-3-5-3v6Z"
                            />
                          </svg>
                        </span>
                        <span>YouTube</span>
                      </a>
                      <a
                        href="https://bit.uom.lk/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-1 hover:border-uom-maroon hover:text-uom-maroon"
                      >
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-neutral-100">
                          www
                        </span>
                        <span>bit.uom.lk</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>

        <footer className="bg-neutral-950/95 text-neutral-100 border-t border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 lg:py-10">
            <div className="md:flex md:justify-between md:items-start">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={logo}
                      alt="University of Moratuwa logo"
                      className="h-9 w-9 object-contain"
                    />
                    <div className="hidden h-10 w-10 overflow-hidden rounded-[18px] md:flex items-center justify-center">
                      <img
                        src={codlLogo}
                        alt="CODL logo"
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                      ICODE2026
                    </p>
                    <p className="text-sm font-semibold">
                      International Conference on Open and Digital Education
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-400">
                  Centre for Open and Distance Learning (CODL) <br></br> University of
                  Moratuwa · Sri Lanka
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 text-xs text-neutral-300">
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-neutral-100 uppercase">
                    Conference
                  </h2>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>
                      <a href="#about" className="hover:underline">
                        About ICODE2026
                      </a>
                    </li>
                    <li>
                      <a href="#dates" className="hover:underline">
                        Important dates
                      </a>
                    </li>
                    <li>
                      <a href="#days" className="hover:underline">
                        3-day programme
                      </a>
                    </li>
                    <li>
                      <a href="#committees" className="hover:underline">
                        Committees
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="hover:underline">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:underline">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-neutral-100 uppercase">
                    Get in touch
                  </h2>
                  <ul className="space-y-1.5">
                    <li>Centre for Open Distance Learning</li>
                    <li>University of Moratuwa, Katubedda</li>
                    <li>Sri Lanka</li>
                    <li className="pt-1">
                      <div className="inline-flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              d="M4 7.5 9.5 12 12 14l2.5-2 5.5-4.5M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Z"
                            />
                          </svg>
                        </span>
                        <a
                          href="mailto:info@codl.lk"
                          className="text-xs font-medium text-uom-gold hover:underline"
                        >
                          info@codl.lk
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              d="M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v11A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-11Z"
                            />
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              d="M9 12h6M9 9h6M9 15h3"
                            />
                          </svg>
                        </span>
                        <a
                          href="https://bit.uom.lk/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-uom-gold hover:underline"
                        >
                          bit.uom.lk
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-neutral-100 uppercase">
                    Follow us
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.facebook.com/bit.mrt.ac.lk?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-uom-gold"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M13.5 21v-7h2.25L16 11h-2.5V9.25C13.5 8.56 13.69 8 14.7 8H16V5.75C15.49 5.68 14.8 5.5 13.93 5.5 11.96 5.5 10.5 6.74 10.5 9v2H8v3h2.5v7h3Z"
                            />
                          </svg>
                        </span>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bitatuom/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-uom-gold"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="5"
                              ry="5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="17" cy="7" r="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@BITUoMLK"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-uom-gold"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.947C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.87.554A2.75 2.75 0 0 0 2.2 8.001 28.4 28.4 0 0 0 1.5 12a28.4 28.4 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.947C5.9 18.5 12 18.5 12 18.5s6.1 0 7.87-.554a2.75 2.75 0 0 0 1.93-1.947A28.4 28.4 0 0 0 22.5 12a28.4 28.4 0 0 0-.7-3.999Z"
                            />
                            <path
                              fill="black"
                              d="m10 15.5 5-3-5-3v6Z"
                            />
                          </svg>
                        </span>
                        <span>YouTube</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-6 border-white/10 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between text-[11px] text-neutral-500">
              <span className="sm:text-center">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold">
                  ICODE2026 · CODL · University of Moratuwa
                </span>
                . All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

