import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AcademicCapIcon,
  Bars3Icon,
  CalendarDaysIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  XMarkIcon,
  SparklesIcon,
  UserGroupIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  BuildingLibraryIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Accordion } from "./components/ui/accordion";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import anniversary20Logo from "./assets/20thAnniversarylogo.png";
import modesLogo from "./assets/modesl.jpg";
import emojotLogo from "./assets/emojot.png";
import servoLogo from "./assets/SERVO.jpg";
import mainBg from "./assets/bgmain.png";
import campusBg from "./assets/bgimg.PNG";
import { Footer } from "./Footer";
import { importantDates, submissionDeadlineClosedLabel, submissionDeadlineDate, acceptanceNotificationDate, acceptanceNotificationSentLabel, registrationDeadlineDate, registrationClosedLabel, conferenceConcludedLabel } from "./constants/importantDates";
import { ContactBitWebsiteFooterItem } from "./components/ContactBitWebsiteFooterItem";
import { ContactWhatsAppFooterItem } from "./components/ContactWhatsAppFooterItem";
import { FooterConferenceLinks } from "./components/FooterConferenceLinks";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "./constants/contact";
import { Reveal } from "./components/Reveal";
import { HomepageThemeToggle } from "./components/HomepageThemeToggle";
import { WorkshopFlyerModal } from "./components/WorkshopFlyerModal";
import { useHomepageTheme } from "./hooks/useHomepageTheme";

const partnerSponsors = [
  {
    id: "uom",
    src: logo,
    name: "University of Moratuwa",
    role: "Hosting Partner",
    wide: false
  },
  {
    id: "codl",
    src: codlLogo,
    name: "CODL",
    role: "Organised by",
    wide: false
  },
  {
    id: "mode",
    src: modesLogo,
    name: "Ministry of Digital Economy",
    role: "Government Partner",
    wide: true
  },
  {
    id: "emojot",
    src: emojotLogo,
    name: "Emojot",
    role: "Engagement Partner",
    wide: false
  },
  {
    id: "servo",
    src: servoLogo,
    name: "Lanka IOC/ SERVO",
    role: "Hospitality partner",
    wide: true
  }
] as const;

const WHY_PARTICIPATE_BENEFITS = [
  {
    icon: PresentationChartLineIcon,
    text: "Present high-impact work to an international audience.",
  },
  {
    icon: UserGroupIcon,
    text: "Build collaborations across institutions and sectors.",
  },
  {
    icon: RocketLaunchIcon,
    text: "Showcase innovative digital learning initiatives.",
  },
  {
    icon: GlobeAltIcon,
    text: "Engage with regional and global leaders in Open and Digital Education.",
  },
  {
    icon: LightBulbIcon,
    text: "Help shape an inclusive, future-ready digital agenda.",
  },
] as const;

const WHY_PARTICIPATE_AUDIENCES = [
  {
    icon: AcademicCapIcon,
    title: "Early- & mid-career academics",
    detail: "Seeking feedback, visibility, and cross-institutional networks.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Instructional designers & EdTech teams",
    detail: "Scaling digital programmes with evidence and peer exchange.",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Policy & quality leaders",
    detail: "Planning national or institutional reforms with regional context.",
  },
] as const;

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

type ImportantDateItem = (typeof importantDates)[number];

const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11
};

function formatYMD(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function parseImportantDate(dateStr: string) {
  // Supported formats:
  // - "1 April 2026"
  // - "5–7 August 2026"
  const rangeMatch = dateStr.match(
    /^(\d{1,2})\s*[–-]\s*(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
  );
  if (rangeMatch) {
    const startDay = Number(rangeMatch[1]);
    const endDay = Number(rangeMatch[2]);
    const monthName = rangeMatch[3].toLowerCase();
    const year = Number(rangeMatch[4]);
    const monthIndex = MONTH_INDEX[monthName];
    const start = new Date(year, monthIndex, startDay);
    const endExclusive = new Date(year, monthIndex, endDay + 1);
    return { start, endExclusive };
  }

  const singleMatch = dateStr.match(
    /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
  );
  if (!singleMatch) return null;

  const day = Number(singleMatch[1]);
  const monthName = singleMatch[2].toLowerCase();
  const year = Number(singleMatch[3]);
  const monthIndex = MONTH_INDEX[monthName];
  const start = new Date(year, monthIndex, day);
  const endExclusive = new Date(year, monthIndex, day + 1);
  return { start, endExclusive };
}

function addToCalendar(item: ImportantDateItem) {
  const parsed = parseImportantDate(item.date);
  if (!parsed) return;

  const title = `ICODE2026 - ${item.label}`;
  const details = item.note;
  const location = "University of Moratuwa · Sri Lanka · Hybrid";

  const googleUrl =
    `https://www.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${formatYMD(parsed.start)}/${formatYMD(parsed.endExclusive)}` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(location)}`;

  window.open(googleUrl, "_blank", "noopener,noreferrer");
}

function ImportantDateAddToCalendarButton({ item }: { item: ImportantDateItem }) {
  const title = "Opens Google Calendar in a new tab with this date";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        addToCalendar(item);
      }}
      title={title}
      aria-label={`Mark date — add ${item.label} (${item.date}) to your calendar`}
      className="group mt-2 inline-flex w-fit max-w-full items-center gap-1.5 rounded-md border border-emerald-300 bg-emerald-50/90 px-2 py-1.5 text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-1 md:mx-auto"
    >
      <CalendarIcon
        className="h-4 w-4 shrink-0 text-emerald-700 group-hover:text-emerald-800"
        aria-hidden
      />
      <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-800 group-hover:text-emerald-900">
        Mark date
      </span>
    </button>
  );
}

function isExtendedSubmissionDeadlineSlot(item: ImportantDateItem) {
  return item.label === "Submission Deadline" && item.date === submissionDeadlineDate;
}

function isRegistrationDeadlineSlot(item: ImportantDateItem) {
  return item.label === "Registration deadline" && item.date === registrationDeadlineDate;
}

function isConferenceDateSlot(item: ImportantDateItem) {
  return item.label === "ICODE2026";
}

function dateClosedLabel(item: ImportantDateItem): string | null {
  if (isExtendedSubmissionDeadlineSlot(item)) return submissionDeadlineClosedLabel;
  if (isRegistrationDeadlineSlot(item)) return registrationClosedLabel;
  if (isConferenceDateSlot(item)) return conferenceConcludedLabel;
  return null;
}

function isAcceptanceNotificationSlot(item: ImportantDateItem) {
  return item.label === "Acceptance notification" && item.date === acceptanceNotificationDate;
}

const programmeVenues = {
  uom: {
    label: "University of Moratuwa, Sri Lanka",
    mapsUrl: "https://maps.app.goo.gl/mreWezR5WpEDyadU9",
    embedSrc:
      "https://maps.google.com/maps?q=University+of+Moratuwa,+Moratuwa,+Sri+Lanka&z=16&output=embed"
  },
  bmich: {
    label: "BMICH Colombo, Sri Lanka",
    mapsUrl: "https://maps.app.goo.gl/L1ukAoDeGpPrPxYB8",
    embedSrc:
      "https://maps.google.com/maps?q=BMICH,+Colombo,+Sri+Lanka&z=16&output=embed"
  }
} as const;

type ProgrammeVenueId = keyof typeof programmeVenues;

function ProgrammeDayVenue({ venueId }: { venueId: ProgrammeVenueId }) {
  const venue = programmeVenues[venueId];

  return (
    <a
      href={venue.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="programme-day-map-mini group flex items-center gap-2.5 overflow-hidden rounded-xl border border-uom-gold/30 bg-transparent p-1.5 transition hover:border-uom-maroon/35 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uom-gold focus-visible:ring-offset-2"
      aria-label={`Open ${venue.label} in Google Maps`}
      onClick={(event) => event.stopPropagation()}
    >
      <span className="programme-day-map-mini__thumb relative h-10 w-[3.35rem] shrink-0 overflow-hidden rounded-lg border border-uom-gold/30 bg-transparent shadow-sm">
        <iframe
          src={venue.embedSrc}
          title={`Map: ${venue.label}`}
          className="programme-day-map-mini__iframe pointer-events-none absolute left-1/2 top-1/2 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span
          className="pointer-events-none absolute bottom-0.5 right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-uom-maroon text-white shadow-sm"
          aria-hidden
        >
          <MapPinIcon className="h-2.5 w-2.5" />
        </span>
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block text-[11px] font-medium text-neutral-800">{venue.label}</span>
        <span className="mt-0.5 block text-[10px] font-semibold text-uom-maroon group-hover:underline">
          View on map
        </span>
      </span>
    </a>
  );
}

function ImportantDateClosedCard({
  item,
  closedLabel,
  variant = "mobile"
}: {
  item: ImportantDateItem;
  closedLabel: string;
  variant?: "mobile" | "desktop";
}) {
  const cardWidth =
    variant === "desktop"
      ? "mx-auto w-full max-w-[10.5rem] md:max-w-[11.25rem]"
      : "important-dates-mobile-card w-full min-w-0 flex-1";

  const cardClass =
    variant === "desktop"
      ? `hover-lift ${cardWidth} mt-3 flex flex-col justify-start rounded-2xl border border-uom-gold/80 bg-white/95 px-2.5 py-3 shadow-[0_12px_30px_rgba(161,98,7,0.28)] md:h-full md:justify-between md:px-3 md:py-3.5`
      : `hover-lift ${cardWidth} rounded-xl border border-uom-gold/40 bg-white/95 px-4 py-3.5 shadow-sm`;

  const dateClass =
    variant === "desktop"
      ? "text-sm font-semibold leading-snug text-neutral-400 line-through md:text-base"
      : "text-base font-semibold leading-snug text-neutral-400 line-through";

  const closedClass =
    variant === "desktop"
      ? "mt-1 text-sm font-bold uppercase tracking-[0.12em] text-red-600 md:text-base"
      : "mt-1 text-base font-bold uppercase tracking-[0.12em] text-red-600";

  return (
    <div className={cardClass}>
      <p className={dateClass}>{item.date}</p>
      <p className={closedClass}>{closedLabel}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-uom-maroon">{item.label}</p>
      <p className={`mt-1 leading-relaxed text-neutral-700 ${variant === "desktop" ? "text-xs md:text-sm" : "text-xs"}`}>
        {item.note}
      </p>
      <ImportantDateAddToCalendarButton item={item} />
    </div>
  );
}

const faqItems = [
  {
    id: "who",
    question: "Who is ICODE2026 for?",
    answer: (
      <p>
        ICODE2026 welcomes researchers, academics, instructional designers, policy makers,
        EdTech developers, doctoral students, educational technologists, and leaders in
        open, distance, and digital education from Sri Lanka and worldwide.
      </p>
    )
  },
  {
    id: "format",
    question: "What is the event format?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Day 1 – Academic Research Conference</li>
        <li>Day 2 – Policy &amp; Leadership Summit</li>
        <li>Day 3 – Practice, Innovation &amp; Capacity Building Workshops</li>
        <li>Hybrid participation with on-site and online options</li>
      </ul>
    )
  },
  {
    id: "submissions",
    question: "What type of submissions are expected?",
    answer: (
      <p>
        We invite 2–3 page extended abstracts (700–1,000 words) presenting empirical
        research, design-based studies, innovative practices, policy analyses, or case
        studies that align with the conference themes in open and digital education. All submissions must be in PDF format.
      </p>
    )
  },
  {
    id: "how-to-submit",
    question: "How do I submit my extended abstract?",
    answer: (
      <p>
        Extended abstracts should be submitted via the online submission portal. This can be found in the 'Submit Abstract' page. Any other method of submission will not be accepted.
      </p>
    )
  },
  // {
  //   id: "proceedings",
  //   question: "Will there be published proceedings?",
  //   answer: (
  //     <p>
  //       Yes. All accepted and presented contributions will be included in the peer‑reviewed
  //       ICODE2026 Conference Proceedings. Selected papers may be considered for extended
  //       publication in partnered outlets.
  //     </p>
  //   )
  // },
  {
    id: "fees",
    question: "How do I register for the event?",
    answer: (
      <p>
        Registration for ICODE2026 is now closed. Fees and programme access details remain on the
        Registration page.
      </p>
    )
  },
  {
    id: "venue",
    question: "Where will the conference take place?",
    answer: (
      <>
        <p>
          ICODE2026 is a hybrid conference with on-site sessions across Sri Lanka and a fully
          supported virtual track for remote participation.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <span className="font-semibold">Day 1 – Academic Research Conference (5 August 2026):</span>{" "}
            University of Moratuwa, Sri Lanka
          </li>
          <li>
            <span className="font-semibold">Day 2 – Policy &amp; Leadership Summit (6 August 2026):</span>{" "}
            BMICH Colombo, Sri Lanka
          </li>
          <li>
            <span className="font-semibold">Day 3 – Practice, Innovation &amp; Capacity Building Workshops (7 August 2026):</span>{" "}
            University of Moratuwa, Sri Lanka
          </li>
        </ul>
      </>
    )
  },
  {
    id: "language",
    question: "What is the language of the conference and submissions?",
    answer: (
      <p>
        The working language of ICODE2026 is English. Extended abstracts, presentations,
        and conference materials should be prepared in English.
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
  const [workshopFlyerOpen, setWorkshopFlyerOpen] = useState(false);
  const [activePartner, setActivePartner] = useState<(typeof partnerSponsors)[number] | null>(
    null
  );
  const { theme, isDark, toggleTheme } = useHomepageTheme();

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
      className={
        isDark ? "min-h-screen bg-[#1c1c20]" : "min-h-screen bg-background"
      }
    >
      <header
        className={`homepage-site-header ${
          isDark ? "homepage-dark" : ""
        } border-b border-white/60 bg-white/55 backdrop-blur-xl`}
      >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 relative">
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
            <nav className="hidden items-center gap-4 text-xs font-medium text-neutral-700 md:flex">
              <a href="#about" className="hover:text-uom-maroon">
                About
              </a>
              <a href="#dates" className="hover:text-uom-maroon">
                Important Dates
              </a>
              <Link to="/programme/day1" className="hover:text-uom-maroon">
                Schedule
              </Link>
              <Link to="/gallery/day1" className="hover:text-uom-maroon">
                Gallery
              </Link>
              <Link to="/proceedings" className="hover:text-uom-maroon">
                Programme
              </Link>
              <a href="#contact" className="hover:text-uom-maroon">
                Contact
              </a>
              <HomepageThemeToggle theme={theme} onToggle={toggleTheme} />
              <Link to="/call-for-papers">
                <Button
                  size="sm"
                  className={
                    isDark
                      ? "homepage-hero-cta homepage-hero-cta--primary ml-2 border-2 border-uom-gold bg-uom-maroon text-white hover:bg-uom-maroonDark hover:text-white shadow-sm"
                      : "ml-2 border border-uom-gold bg-uom-goldSoft/90 text-neutral-900"
                  }
                >
                  <span className="flex items-center gap-1">
                    Submit Abstract
                    <ChevronRightIcon className="h-3.5 w-3.5" />
                  </span>
                </Button>
              </Link>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <HomepageThemeToggle theme={theme} onToggle={toggleTheme} />
              <button
                type="button"
                onClick={() => setMobileNavOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/65 p-2 text-uom-maroon"
                aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileNavOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden border-t border-white/60 bg-white/85 backdrop-blur-xl">
              <div className="mx-auto max-w-7xl px-4 py-4">
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
                  to="/programme/day1"
                  onClick={() => setMobileNavOpen(false)}
                  className="hover:text-uom-maroon"
                >
                  Schedule
                </Link>
                <Link
                  to="/gallery/day1"
                  onClick={() => setMobileNavOpen(false)}
                  className="hover:text-uom-maroon"
                >
                  Gallery
                </Link>
                <Link
                  to="/proceedings"
                  onClick={() => setMobileNavOpen(false)}
                  className="hover:text-uom-maroon"
                >
                  Programme
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
                        className={
                          isDark
                            ? "homepage-hero-cta homepage-hero-cta--primary w-full border-2 border-uom-gold bg-uom-maroon text-white hover:bg-uom-maroonDark hover:text-white shadow-sm"
                            : "w-full border border-uom-gold bg-uom-goldSoft/90 text-neutral-900"
                        }
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

      <div
        className={`pt-[60px] md:pt-[68px] ${
          isDark
            ? "homepage-dark homepage-ruler-texture homepage-ambient-glow min-h-screen transition-colors duration-500"
            : "min-h-screen bg-white/70 hero-gradient homepage-ruler-texture transition-colors duration-500"
        }`}
      >
        {/* Top visual hero with main campus image using theme colours */}
        <section
          className={`relative overflow-visible border-b md:overflow-hidden ${
            isDark ? "border-uom-gold/20 homepage-hero-neon" : "border-white/40"
          }`}
          aria-labelledby="icode-hero-heading"
        >
          <div
            className="relative min-h-[560px] w-full md:h-[80vh] md:min-h-0 md:pt-0 md:pb-0 pt-10 pb-[calc(3.5rem+env(safe-area-inset-bottom))]"
          >
            <img
              src={mainBg}
              alt="University of Moratuwa main campus greenery"
              className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
            />
            <div
              className={
                isDark
                  ? "absolute inset-0 bg-gradient-to-br from-neutral-950/60 via-neutral-900/40 to-uom-maroon/25"
                  : "absolute inset-0 bg-gradient-to-br from-neutral-900/75 via-neutral-900/45 to-uom-maroon/55 mix-blend-multiply animated-sheen"
              }
            />
            <div
              className={
                isDark
                  ? "absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                  : "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
              }
            />

            <div className="relative z-10 flex items-start md:h-full md:items-center">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
                <div className="w-full min-w-0 text-white md:flex-1 md:min-h-0">
                  <div className="max-w-xl md:max-w-2xl">
                  <Reveal variant="up" delayMs={0}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-uom-goldSoft">
                      ICODE2026 · UoM · CODL Research Conference
                    </p>
                  </Reveal>
                  <Reveal variant="up" delayMs={120}>
                    <h1
                      id="icode-hero-heading"
                      className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.8rem] md:leading-[1.05]"
                    >
                      ICODE2026
                      <span className="block text-uom-goldSoft">
                        International Conference on Open and Digital Education
                      </span>
                    </h1>
                  </Reveal>
                  <Reveal variant="up" delayMs={220}>
                    <div className="mt-4 grid grid-cols-[auto,1fr] items-stretch gap-4">
                    <div className="shrink-0">
                      <div className="relative aspect-square h-full min-h-12 max-h-20 overflow-hidden rounded-full sm:h-14 sm:min-h-0 sm:max-h-none md:h-16">
                        <img
                          src={anniversary20Logo}
                          alt="CODL 20th Anniversary"
                          className="h-full w-full object-contain object-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-100 md:text-base">
                      Proudly hosted by the{" "}
                      <span className="font-semibold">
                        Centre for Open and Distance Learning (CODL), University of
                        Moratuwa
                      </span>{" "}
                      – celebrating 20 years of excellence in digital higher education.
                    </p>
                  </div>
                  </Reveal>
                  </div>

                  <Reveal variant="up" delayMs={320}>
                    <div className="mt-4 flex w-full min-w-0 flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
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
                    </div>
                  </Reveal>

                  <div className="max-w-xl md:max-w-2xl">
                  <Reveal variant="up" delayMs={420}>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
                    <Link to="/call-for-papers">
                      <Button
                        size="lg"
                        className="submit-abstract-cta homepage-hero-cta homepage-hero-cta--primary h-auto min-h-12 w-full sm:w-auto border-2 border-uom-gold bg-uom-maroon text-white hover:bg-uom-maroonDark hover:text-white shadow-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          Submit Abstract
                          <ChevronRightIcon className="h-4 w-4 shrink-0" />
                        </span>
                      </Button>
                    </Link>
                    <Link to="/registration" aria-label="Registration is closed. View registration details.">
                      <Button
                        size="lg"
                        variant="outline"
                        className="homepage-hero-cta homepage-hero-cta--outline homepage-hero-cta--closed h-auto min-h-12 w-full sm:w-auto font-semibold shadow-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          <CursorArrowRaysIcon className="h-4 w-4 shrink-0" />
                          <span className="flex-1 text-center whitespace-normal leading-snug">
                            Registration Closed
                          </span>
                          <ChevronRightIcon className="h-4 w-4 shrink-0" />
                        </span>
                      </Button>
                    </Link>
                    <Link to="/programme/day1">
                      <Button
                        variant="outline"
                        size="lg"
                        className="homepage-hero-cta homepage-hero-cta--outline h-auto min-h-12 w-full sm:w-auto border-white/80 bg-white/5 text-white hover:bg-white/15 hover:text-white font-semibold shadow-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          <CalendarDaysIcon className="h-4 w-4 shrink-0" />
                          <span className="flex-1 text-center whitespace-normal leading-snug">
                            View 3-Day Schedule
                          </span>
                          <ChevronRightIcon className="h-4 w-4 shrink-0" />
                        </span>
                      </Button>
                    </Link>
                    <Link to="/proceedings">
                      <Button
                        variant="outline"
                        size="lg"
                        className="homepage-hero-cta homepage-hero-cta--outline h-auto min-h-12 w-full sm:w-auto border-white/80 bg-white/5 text-white hover:bg-white/15 hover:text-white font-semibold shadow-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          <DocumentTextIcon className="h-4 w-4 shrink-0" />
                          <span className="flex-1 text-center whitespace-normal leading-snug">
                            Conference Programme
                          </span>
                          <ChevronRightIcon className="h-4 w-4 shrink-0" />
                        </span>
                      </Button>
                    </Link>
                    </div>
                  </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-6 md:pb-28 md:pt-10">
        {/* About */}
        <section id="about" className="mt-10 md:mt-14 scroll-mt-24">
          <div className="flex h-full flex-col">
            <div className="flex h-full flex-col">
              <Reveal variant="up">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  <InformationCircleIcon className="h-6 w-6 text-uom-maroon" />
                  About ICODE2026
                </h2>
              </Reveal>

              <Reveal variant="up" delayMs={120}>
                <div className="mt-4 text-sm leading-relaxed text-neutral-700 md:text-base text-justify">
                  <p>
                    ICODE2026 is an international research conference at the{" "}
                    <span className="font-semibold">University of Moratuwa (UoM)</span>,
                    curated by the{" "}
                    <span className="font-semibold">
                      Centre for Open and Distance Learning (CODL)
                    </span>
                    . It is envisioned as a space where
                    policy makers, researchers, and practitioners could design the
                    next generation of{" "}
                    <span className="font-semibold">
                      open, distance, and digital education
                    </span>{" "}
                    together. Over three days, the programme moves intentionally from{" "}
                    <span className="font-semibold">policy rooms</span> to{" "}
                    <span className="font-semibold">research sessions</span> and then
                    into <span className="font-semibold">classrooms and platforms</span>.
                    Conversations focus on resilient digital ecosystems, inclusive
                    learning pathways, micro-credentials, and quality assurance in a
                    rapidly changing education landscape.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delayMs={200}>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
                  While rooted in Sri Lanka, ICODE2026 is{" "}
                  <span className="font-semibold">international in scope</span>,
                  welcoming contributors from across the Global South and Global North
                  working on open, distance, and digital learning in universities,
                  professional education, and lifelong learning systems.
                </p>
              </Reveal>

              <Reveal variant="scale" delayMs={260}>
                <div className="mt-4 overflow-hidden rounded-3xl border border-white/80 bg-white/60 shadow-sm">
                  <img
                    src={campusBg}
                    alt="Green campus setting at the University of Moratuwa"
                    className="h-40 w-full object-cover object-[center_22%] md:h-48"
                  />
                </div>
              </Reveal>

              {/* 3-day structure, visually connected to About */}
              <div id="days" className="mt-12 md:mt-16 scroll-mt-24">
                <div className="flex items-center justify-between gap-4">
                  <Reveal variant="up">
                    <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                      <CursorArrowRaysIcon className="h-6 w-6 text-uom-maroon" />
                      A Three-day Integrated Programme
                    </h2>
                  </Reveal>
                  <div className="hidden items-center gap-4 md:flex">
                    <Badge variant="solid">5–7 August 2026</Badge>
                    <Link
                      to="/programme/day1"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-3 py-1.5 text-[11px] font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-uom-gold"
                    >
                      <span>View full programme</span>
                      <ChevronRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 md:hidden">
                  <Badge variant="solid">5–7 August 2026</Badge>
                  <Link
                    to="/programme/day1"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-3 py-1.5 text-[11px] font-semibold text-neutral-900 shadow-sm transition hover:bg-uom-gold"
                  >
                    <CalendarDaysIcon className="h-3.5 w-3.5 text-uom-maroon" />
                    <span>Schedule</span>
                    <ChevronRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <Reveal variant="up" delayMs={0} className="h-full">
                    <Card className="hover-lift h-full border border-uom-maroon/25 bg-white/95">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle>Day 1 · Academic Research Conference</CardTitle>
                        <span className="hidden rounded-full border border-uom-maroon/50 bg-uom-maroon/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-uom-goldSoft md:inline-flex">
                          Research
                        </span>
                      </div>
                      <div className="mt-1 space-y-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-uom-maroon">
                          5 August 2026
                        </p>
                        <ProgrammeDayVenue venueId="uom" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-neutral-800">
                      <div className="flex gap-3">
                        <div className="mt-1 h-full w-1 rounded-full bg-uom-maroon" />
                        <div className="space-y-2">
                          <p>
                            A peer-reviewed research forum for scholars exploring the
                            future of open, distance, and digital education.
                          </p>
                          <ul className="space-y-1 text-xs text-neutral-700">
                            <li>• Keynote addresses and invited talks</li>
                            <li>• Parallel abstract presentations and symposia</li>
                            <li>• Interactive sessions and live demonstrations</li>
                            <li>• Best presentation recognitions</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    </Card>
                  </Reveal>

                  <Reveal variant="up" delayMs={120} className="h-full">
                    <Card className="hover-lift h-full border border-uom-gold/45 bg-uom-goldSoft/70">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle>Day 2 · Policy &amp; Leadership Summit</CardTitle>
                        <span className="hidden rounded-full border border-uom-maroon/40 bg-uom-maroon/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-uom-maroon md:inline-flex">
                          Policy
                        </span>
                      </div>
                      <div className="mt-1 space-y-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-uom-maroon">
                          6 August 2026
                        </p>
                        <ProgrammeDayVenue venueId="bmich" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-neutral-900">
                      <div className="flex gap-3">
                        <div className="mt-1 h-full w-1 rounded-full bg-uom-gold" />
                        <div className="space-y-2">
                          <p>
                            Governance, quality, and digital transformation in
                            education designed for ministries, UGC, Quality Assurance bodies, and
                            institutional leaders.
                          </p>
                          <ul className="space-y-1 text-xs text-neutral-800">
                            <li>• Ministerial and agency panels</li>
                            {/* <li>• Vice-Chancellors&apos; roundtables</li> */}
                            <li>• Strategic policy dialogues</li>
                            <li>• Leadership address</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    </Card>
                  </Reveal>

                  <Reveal variant="up" delayMs={240} className="h-full">
                    <Card
                      className="programme-day-card--workshops group/card hover-lift h-full cursor-pointer border border-uom-maroon/18 bg-white/95 transition hover:border-uom-maroon/35 hover:shadow-[0_14px_36px_rgba(122,31,58,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uom-gold focus-visible:ring-offset-2"
                      role="button"
                      tabIndex={0}
                      aria-label="Open Call for Workshop Proposals flyer"
                      onClick={() => setWorkshopFlyerOpen(true)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setWorkshopFlyerOpen(true);
                        }
                      }}
                    >
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle>Day 3 · Practice &amp; Innovation Workshops</CardTitle>
                        <span className="hidden rounded-full border border-uom-gold/60 bg-uom-gold/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-900 md:inline-flex">
                          Practice
                        </span>
                      </div>
                      <div className="mt-1 space-y-2">
                        <p className="text-xs uppercase tracking-[0.2em] text-uom-maroon">
                          7 August 2026
                        </p>
                        <ProgrammeDayVenue venueId="uom" />
                      </div>
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
                            <li>• Course design studios</li>
                            <li>• Learning analytics and AI tools</li>
                            <li>• Case-based institutional showcases</li>
                            <li>• Micro-credential and recognition dialogues</li>
                          </ul>
                          <p className="programme-day-card__cta mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600 group-hover/card:text-blue-700 group-hover/card:underline">
                            View workshop call
                            <ChevronRightIcon className="h-3.5 w-3.5 transition group-hover/card:translate-x-0.5" />
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    </Card>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          <section
            id="why-participate"
            className="why-participate relative mt-16 scroll-mt-24 overflow-hidden md:mt-20"
          >
            <Reveal variant="up">
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                <AcademicCapIcon className="h-6 w-6 text-uom-maroon" />
                Why participate?
              </h2>
              <p className="why-participate-lead mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
                One conference bridging{" "}
                <span className="why-participate-lead__pill">policy</span>,{" "}
                <span className="why-participate-lead__pill">research</span>, and{" "}
                <span className="why-participate-lead__pill">practice</span> in open and
                digital education.
              </p>
            </Reveal>

            <div className="relative mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal variant="left" className="lg:col-span-5">
                <p className="text-lg font-medium leading-relaxed text-neutral-900 md:text-xl md:leading-snug">
                  Join a focused community working at the intersection of{" "}
                  <span className="text-uom-maroon">policy, research, and practice</span> in
                  open and digital education.
                </p>

                <div className="why-participate-pathway mt-8" aria-hidden>
                  <div className="why-participate-pathway__track">
                    <span className="why-participate-pathway__node">Policy</span>
                    <span className="why-participate-pathway__node why-participate-pathway__node--mid">
                      Research
                    </span>
                    <span className="why-participate-pathway__node">Practice</span>
                  </div>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-uom-maroon">
                  Especially valuable for
                </p>
                <ul className="mt-4 space-y-5">
                  {WHY_PARTICIPATE_AUDIENCES.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="why-participate-audience group flex gap-4"
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        <span className="why-participate-audience__icon mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="font-semibold text-neutral-900">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <Reveal variant="right" delayMs={120} className="lg:col-span-7">
                <ol className="why-participate-benefits divide-y divide-neutral-200/80">
                  {WHY_PARTICIPATE_BENEFITS.map((item, index) => {
                    const Icon = item.icon;
                    const num = String(index + 1).padStart(2, "0");
                    return (
                      <li
                        key={item.text}
                        className="why-participate-benefit group flex gap-4 py-5 first:pt-0 last:pb-0 md:gap-5 md:py-6"
                      >
                        <span
                          className="why-participate-benefit__num hidden text-3xl font-bold tabular-nums leading-none md:block"
                          aria-hidden
                        >
                          {num}
                        </span>
                        <span className="why-participate-benefit__icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-uom-maroon text-uom-goldSoft shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <p className="min-w-0 flex-1 self-center text-sm leading-relaxed text-neutral-800 md:text-base">
                          <span className="why-participate-benefit__num mr-2 font-bold md:hidden">
                            {num}
                          </span>
                          {item.text}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </Reveal>
            </div>

            <Reveal variant="up" delayMs={220}>
              <div className="why-participate-takehome mt-8 md:mt-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                  <p className="why-participate-takehome__label flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    <span className="why-participate-takehome__label-icon flex h-8 w-8 items-center justify-center rounded-lg">
                      <SparklesIcon className="h-4 w-4 shrink-0" aria-hidden />
                    </span>
                    What you can take home
                  </p>
                  <p className="why-participate-takehome__body text-sm leading-relaxed sm:border-l sm:pl-5">
                    Practical insights you can apply immediately — from governance and quality
                    assurance to learning analytics, AI support tools, and sustainable Open and
                    Digital Education models.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Important dates timeline – moved under 3-day programme */}
          <section id="dates" className="mt-16 md:mt-20 scroll-mt-24">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Reveal variant="up">
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDaysIcon className="h-6 w-6 text-uom-maroon" />
                      Important Dates
                    </span>
                  </h2>
                </Reveal>
                <Reveal variant="up" delayMs={120}>
                  <p className="mt-2 text-sm text-neutral-700 md:text-base">
                    Key dates for ICODE2026.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="important-dates-mobile mt-8 md:hidden">
              <ol className="important-dates-mobile__list relative space-y-5">
                <div aria-hidden="true" className="important-dates-mobile__rail" />

                {importantDates.map((item, index) => (
                  <Reveal
                    key={`${item.label}-${item.date}`}
                    as="li"
                    className="important-dates-mobile__item relative flex items-stretch gap-3"
                    variant="up"
                    delayMs={index * 90}
                  >
                    <div className="important-dates-mobile__node relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-uom-gold bg-uom-goldSoft/80 shadow-sm">
                      <CalendarDaysIcon className="h-5 w-5 text-uom-maroon" />
                    </div>

                    {(() => {
                      const closedLabel = dateClosedLabel(item);
                      return closedLabel ? (
                      <ImportantDateClosedCard item={item} closedLabel={closedLabel} />
                    ) : (
                      <div className="important-dates-mobile-card hover-lift min-w-0 flex-1 rounded-xl border border-uom-gold/40 bg-white/95 px-4 py-3.5 shadow-sm">
                        <p className="text-base font-semibold leading-snug text-neutral-900">
                          {item.date}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-uom-maroon">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-neutral-700">
                          {item.note}
                        </p>
                        {isAcceptanceNotificationSlot(item) ? (
                          <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-emerald-600">
                            {acceptanceNotificationSentLabel}
                          </p>
                        ) : null}
                        <ImportantDateAddToCalendarButton item={item} />
                      </div>
                    );
                    })()}
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Desktop: horizontal timeline */}
            <div className="mt-8 hidden md:block">
              <ol className="flex flex-row gap-4 md:flex-row md:items-stretch md:justify-between lg:gap-3">
                {importantDates.map((item, index, arr) => {
                  const lastIndex = arr.length - 1;
                  return (
                    <Reveal
                      key={`${item.label}-${item.date}`}
                      as="li"
                      className="flex min-w-0 flex-1"
                      variant="up"
                      delayMs={index * 110}
                    >
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
                              index === lastIndex ? "bg-transparent" : "bg-neutral-300"
                            }`}
                          />
                        </div>
                        {(() => {
                          const closedLabel = dateClosedLabel(item);
                          return closedLabel ? (
                          <ImportantDateClosedCard item={item} closedLabel={closedLabel} variant="desktop" />
                        ) : (
                          <div className="hover-lift mx-auto mt-3 flex w-full max-w-[10.5rem] flex-col justify-start rounded-2xl border border-uom-gold/80 bg-white/95 px-2.5 py-3 shadow-[0_12px_30px_rgba(161,98,7,0.28)] md:h-full md:max-w-[11.25rem] md:justify-between md:px-3 md:py-3.5">
                            <p className="text-sm font-semibold text-neutral-900 md:text-base">
                              {item.date}
                            </p>
                            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-uom-maroon">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs text-neutral-700 md:text-sm">{item.note}</p>
                            {isAcceptanceNotificationSlot(item) ? (
                              <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-emerald-600 md:text-base">
                                {acceptanceNotificationSentLabel}
                              </p>
                            ) : null}
                            <ImportantDateAddToCalendarButton item={item} />
                          </div>
                        );
                        })()}
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </section>

        </section>


        {/* Sponsors carousel */}
        <section className="mt-16 md:mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <div>
                <Reveal variant="up">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                    <UsersIcon className="h-6 w-6 text-uom-maroon" />
                    Partners &amp; Sponsors
                  </h2>
                </Reveal>
                <Reveal variant="up" delayMs={120}>
                  <p className="mt-1 text-sm text-neutral-700 md:text-base">
                    Grateful for the institutions supporting ICODE2026.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal variant="up" delayMs={220}>
              <div className={`mt-5 sponsor-slider${activePartner ? " sponsor-slider--paused" : ""}`}>
                <div className="sponsor-track items-center">
                  {Array.from({ length: 18 }).map((_, loopIndex) =>
                    partnerSponsors.map((partner) => (
                      <button
                        key={`${partner.id}-${loopIndex}`}
                        type="button"
                        className={`sponsor-logo${partner.wide ? " sponsor-logo--wide" : ""}`}
                        onClick={() => setActivePartner(partner)}
                        aria-label={`${partner.name} — ${partner.role}`}
                      >
                        <img
                          src={partner.src}
                          alt=""
                          className="sponsor-logo__img"
                        />
                      </button>
                    ))
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Committees & organising structure (high-level) */}
        <section id="committees" className="mt-16 md:mt-20 scroll-mt-24">
          <Reveal variant="up">
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              <UsersIcon className="h-6 w-6 text-uom-maroon" />
              Conference Governance and Organisation
            </h2>
          </Reveal>
          <Reveal variant="up" delayMs={120}>
            <p className="mt-2 text-sm text-neutral-700 md:text-base">
              ICODE2026 is guided by a layered governance model that brings together
              strategic leadership, academic quality, and day-to-day operations.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Reveal variant="up" delayMs={0}>
              <Card className="hover-lift relative h-full">
              <CardHeader>
                <CardTitle>Strategic Leadership</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4 pb-7 text-sm text-neutral-800">
                <p>
                  Event Patron and Co‑chairs provide overall direction with support
                  from the International Advisory Board and summit steering groups.
                </p>
                <Link to="/governance#strategic" className="block mt-auto pt-2">
                  <span className="group flex w-full min-h-[44px] items-center justify-between gap-2 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-4 text-[11px] font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-uom-goldSoft hover:to-white hover:shadow-md">
                    <span className="inline-flex items-center gap-1.5 sm:whitespace-nowrap whitespace-normal">
                      <UsersIcon className="h-3.5 w-3.5 text-uom-maroon" />
                      <span>View Strategic Leadership</span>
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="up" delayMs={120}>
              <Card className="hover-lift relative h-full">
              <CardHeader>
                <CardTitle>Academic &amp; Publications</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4 pb-7 text-sm text-neutral-800">
                <p>
                  Programme, review, and publications teams coordinate submissions,
                  peer review, and the ICODE2026 proceedings.
                </p>
                <Link to="/governance#academic" className="block mt-auto pt-2">
                  <span className="group flex w-full min-h-[44px] items-center justify-between gap-2 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-4 text-[11px] font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-uom-goldSoft hover:to-white hover:shadow-md">
                    <span className="inline-flex items-center gap-1.5 sm:whitespace-nowrap whitespace-normal">
                      <AcademicCapIcon className="h-3.5 w-3.5 text-uom-maroon group-hover:text-uom-maroon" />
                      <span>View Academic &amp; Publications</span>
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="up" delayMs={240}>
              <Card className="hover-lift relative h-full">
              <CardHeader>
                <CardTitle>Operations &amp; Experience</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4 pb-7 text-sm text-neutral-800">
                <p>
                  Dedicated committees handle finance, logistics, media, ethics,
                  risk, and volunteer coordination to ensure a smooth hybrid event.
                </p>
                <Link to="/governance#operations" className="block mt-auto pt-2">
                  <span className="group flex w-full min-h-[44px] items-center justify-between gap-2 rounded-full border border-uom-gold bg-uom-goldSoft/90 px-4 text-[11px] font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-uom-goldSoft hover:to-white hover:shadow-md">
                    <span className="inline-flex items-center gap-1.5 sm:whitespace-nowrap whitespace-normal">
                      <CursorArrowRaysIcon className="h-3.5 w-3.5 text-uom-maroon group-hover:text-uom-maroon" />
                      <span>View Operations &amp; Experience</span>
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16 md:mt-20 scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.5fr)] md:items-start">
            <div>
              <Reveal variant="up">
                <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-uom-maroon" />
                  Frequently Asked Questions
                </h2>
              </Reveal>
              <Reveal variant="up" delayMs={120}>
                <p className="mt-2 text-sm text-neutral-700 md:text-base">
                  A quick overview for prospective authors, participants, and
                  partners. More details will be available via the full conference
                  website.
                </p>
              </Reveal>
            </div>
            <Reveal variant="up" delayMs={180}>
              <Accordion items={faqItems} />
            </Reveal>
          </div>
        </section>

        {/* About the host institution – moved under FAQs */}
        <div className="mt-16 rounded-2xl border border-border bg-white/90 px-4 py-4 md:mt-20 md:px-5 md:py-5 space-y-4">
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

        {/* Contact */}
        <section id="contact" className="mt-16 md:mt-20 scroll-mt-24">
          <Reveal variant="scale">
            <div className="mx-auto max-w-7xl rounded-[28px] border border-uom-gold/60 bg-white/85 px-4 py-5 shadow-sm md:px-6 md:py-6">
            <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.3fr)] md:items-start">
              <div>
                <Reveal variant="up">
                  <div className="inline-flex items-center gap-2 rounded-full bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
                    <EnvelopeIcon className="h-3.5 w-3.5" />
                    Contact
                  </div>
                </Reveal>
                <Reveal variant="up" delayMs={120}>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                    Get in Touch
                  </h2>
                </Reveal>
                <Reveal variant="up" delayMs={200}>
                  <p className="mt-2 text-sm text-neutral-700 md:text-base">
                    For questions about submissions, registration, or logistics,
                    the{" "}
                    <span className="font-semibold">
                      ICODE2026 Conference Organising Committee
                    </span>{" "}
                    is your primary point of contact.
                  </p>
                </Reveal>
                <Reveal variant="up" delayMs={260}>
                  <p className="mt-2 text-xs text-neutral-600 md:text-sm">
                    Email is preferred. We aim to respond within{" "}
                    <span className="font-semibold">3–5 working days</span>.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-4 text-sm text-neutral-800">
                <Reveal variant="up" delayMs={120}>
                  <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-uom-maroon text-neutral-50">
                    <EnvelopeIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      Email
                    </p>
                    <a
                      href="mailto:icode@codl.lk"
                      className="mt-1 inline-flex items-center text-sm font-medium text-uom-maroon hover:underline"
                    >
                      icode@codl.lk
                    </a>
                  </div>
                  </div>
                </Reveal>

                <Reveal variant="up" delayMs={200}>
                  <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-50">
                    <PhoneIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      Phone (office hours)
                    </p>
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="mt-1 inline-block text-sm font-medium text-neutral-900 hover:text-uom-maroon hover:underline"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                  </div>
                </Reveal>

                <Reveal variant="up" delayMs={280}>
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
                </Reveal>

                <Reveal variant="up" delayMs={360}>
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
                </Reveal>
              </div>
            </div>
            </div>
          </Reveal>
        </section>
        </main>

        <footer className="bg-neutral-950/95 text-neutral-100 border-t border-white/10">
          <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:py-10">
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
                  <FooterConferenceLinks samePage />
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
                          href="mailto:icode@codl.lk"
                          className="text-xs font-medium text-uom-gold hover:underline"
                        >
                          icode@codl.lk
                        </a>
                      </div>
                    </li>
                    <ContactWhatsAppFooterItem />
                    <ContactBitWebsiteFooterItem />
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

      {activePartner ? (
        <div
          className="partner-spotlight"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePartner.name} — ${activePartner.role}`}
        >
          <button
            type="button"
            className="partner-spotlight__backdrop"
            aria-label="Close partner details"
            onClick={() => setActivePartner(null)}
          />
          <div className="partner-spotlight__card">
            <img
              src={activePartner.src}
              alt={`${activePartner.name} logo`}
              className={`partner-spotlight__img${
                activePartner.wide ? " partner-spotlight__img--wide" : ""
              }`}
            />
            <p className="partner-spotlight__name">{activePartner.name}</p>
            <p className="partner-spotlight__role">{activePartner.role}</p>
          </div>
        </div>
      ) : null}

      <WorkshopFlyerModal
        open={workshopFlyerOpen}
        onClose={() => setWorkshopFlyerOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}

export default App;

