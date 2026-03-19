import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Bars3Icon,
  UsersIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import mainBg from "./assets/bgmain.png";
import womanAvatar from "./assets/woman.png";
import manAvatar from "./assets/men.png";
import { Footer } from "./Footer";
import { Button } from "./components/ui/button";

const people = [
  {
    role: "Event Patron",
    names: ["Prof Malik Ranasinghe"]
  },
  {
    role: "Event Co‑chairs",
    names: ["Prof Dileeka Dias", "Ms Vishaka Nanayakkara"]
  },
  {
    role: "Publications & Proceedings Committee (incl. Programme & Review) – Co‑chairs",
    names: ["Dr Buddhika Karunarathne", "Dr Thanuja Ambegoda"]
  },
  {
    role: "Media, Communications & Branding Committee – Chair",
    names: ["Dr Nisansa de Silva"]
  },
  {
    role: "Policy & Leadership Summit Steering Group – Co‑chairs",
    names: ["Prof N D Gunawardena", "Ms Vishaka Nanayakkara"]
  },
  {
    role: "Finance & Sponsorship Committee – Co‑chairs",
    names: ["Dr R M S Ratnayake", "Dr Tiloka de Silva"]
  },
  {
    role: "Logistics & Operations Committee – Co‑chairs",
    names: ["Dr Thilina Thanthriwatta", "Dr Adeesha Wijayasiri"]
  },
  {
    role: "Ethics, Quality & Risk Management Committee – Co‑chairs",
    names: ["Prof Nalin Wickramarachchi", "Dr Chathuranga Hettiarachchi"]
  },
  {
    role: "Student & Volunteer Coordination Committee – Co‑chairs",
    names: ["Dr Sandareka Wikramanayake", "Mr B H Sudantha"]
  }
];

function getAvatarForName(name: string) {
  const womenNames = [
    "Prof Dileeka Dias",
    "Ms Vishaka Nanayakkara",
    "Dr Tiloka de Silva",
    "Dr Sandareka Wikramanayake"
  ];

  return womenNames.includes(name) ? womanAvatar : manAvatar;
}

export default function GovernancePage() {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Scroll to anchored sections with header offset when route or hash changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = location.hash;
    const headerOffset = 96;

    // Defer until after layout so positions are correct
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
      // Fallback: scroll to top on first load without hash or if target not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(id);
  }, [location.pathname, location.hash]);

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="min-h-screen bg-white/80 backdrop-blur-xl">
        <header className="border-b border-white/60 bg-white/75 backdrop-blur-xl sticky top-0 z-40">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 relative">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
            >
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
                Timeline
              </Link>
              <Link to="/#days" className="hover:text-uom-maroon">
                3-day programme
              </Link>
              <Link to="/#committees" className="hover:text-uom-maroon">
                Governance
              </Link>
              <Link to="/#faq" className="hover:text-uom-maroon">
                FAQs
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
                    Governance
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

        <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <section>
            <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              <UsersIcon className="h-7 w-7 text-uom-maroon" />
              <span>Conference Governance and Organisation</span>
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
              ICODE2026 is supported by a structured governance model that brings together
              strategic leadership, academic quality assurance, and operational excellence.
              The committees below work together to ensure a seamless hybrid experience for
              all participants.
            </p>
          </section>

          <section
            id="strategic"
            className="mt-10 rounded-3xl border border-uom-gold/60 bg-uom-goldSoft/80 px-4 py-5 md:px-6 md:py-6 shadow-sm"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-uom-maroon">
              Strategic leadership
            </p>
            <h2 className="mt-1 text-lg font-semibold text-neutral-900 md:text-xl">
              Event Patron, Co‑chairs and Policy &amp; Leadership Summit Steering Group
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {people.slice(0, 3).map((group) => (
                <div key={group.role} className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {group.role}
                  </p>
                  <div className="space-y-3">
                    {group.names.map((name) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 text-sm text-neutral-900"
                      >
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
                          <img
                            src={getAvatarForName(name)}
                            alt={name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="academic"
            className="mt-10 rounded-3xl border border-border bg-white/95 px-4 py-5 md:px-6 md:py-6 shadow-sm"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-900">
              Academic &amp; publications
            </p>
            <h2 className="mt-1 text-lg font-semibold text-neutral-900 md:text-xl">
              Programme, Review, and Publications &amp; Proceedings
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {people.slice(2, 3).map((group) => (
                <div key={group.role} className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-700">
                    {group.role}
                  </p>
                  <div className="space-y-3">
                    {group.names.map((name) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 text-sm text-neutral-900"
                      >
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
                          <img
                            src={getAvatarForName(name)}
                            alt={name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="operations"
            className="mt-10 rounded-3xl border border-border bg-white/95 px-4 py-5 md:px-6 md:py-6 shadow-sm"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-600">
              Operations &amp; experience
            </p>
            <h2 className="mt-1 text-lg font-semibold text-neutral-900 md:text-xl">
              Finance, Logistics, Media, Ethics, Risk, Students &amp; Volunteers
            </h2>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {people.slice(3).map((group) => (
                <div key={group.role} className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {group.role}
                  </p>
                  <div className="space-y-3">
                    {group.names.map((name) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 text-sm text-neutral-900"
                      >
                        <div className="h-12 w-12 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
                          <img
                            src={getAvatarForName(name)}
                            alt={name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
                      <a href="/#about" className="hover:underline">
                        About ICODE2026
                      </a>
                    </li>
                    <li>
                      <a href="/#dates" className="hover:underline">
                        Important dates
                      </a>
                    </li>
                    <li>
                      <a href="/#days" className="hover:underline">
                        3-day programme
                      </a>
                    </li>
                    <li>
                      <a href="/#committees" className="hover:underline">
                        Committees
                      </a>
                    </li>
                    <li>
                      <a href="/#faq" className="hover:underline">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/#contact" className="hover:underline">
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

