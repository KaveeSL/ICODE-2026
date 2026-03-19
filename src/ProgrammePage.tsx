import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import { Button } from "./components/ui/button";
import { Footer } from "./Footer";

export default function ProgrammePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-white/60 bg-white/55 backdrop-blur-xl sticky top-0 z-40">
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
            <a href="/#about" className="hover:text-uom-maroon">
              About
            </a>
            <a href="/#dates" className="hover:text-uom-maroon">
              Important Dates
            </a>
            <a href="/#fees" className="hover:text-uom-maroon">
              Fees
            </a>
            <a href="/#committees" className="hover:text-uom-maroon">
              Committees
            </a>
            <a href="/#contact" className="hover:text-uom-maroon">
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

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14">
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
            Programme
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Conference programme
          </h1>
          <p className="text-sm text-neutral-700 md:text-base">
            The detailed day-by-day programme for ICODE2026 is{" "}
            <span className="font-semibold">coming soon</span>. Closer to the
            conference, this page will include keynote and plenary details,
            parallel session titles, and workshop information, as well as a
            downloadable PDF schedule.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Keynotes &amp; plenaries
            </h2>
            <p className="mt-2 text-xs text-neutral-700">
              Profiles of keynote speakers and plenary panels highlighting major
              themes in open, distance, and digital education.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Parallel &amp; workshop sessions
            </h2>
            <p className="mt-2 text-xs text-neutral-700">
              Track-wise listings of paper sessions, symposia, and hands-on
              workshops, aligned with the conference themes.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Policy &amp; leadership dialogues
            </h2>
            <p className="mt-2 text-xs text-neutral-700">
              Information on ministerial and agency panels, vice-chancellors&apos;
              roundtables, and other high-level discussions.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Downloadable schedule
            </h2>
            <p className="mt-2 text-xs text-neutral-700">
              A full programme booklet in PDF format will be available here once
              the schedule is finalised.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-dashed border-uom-gold/70 bg-uom-goldSoft/40 px-4 py-4 md:px-5 md:py-5 text-xs text-neutral-800">
            <p className="font-semibold text-neutral-900">
              Programme updates
            </p>
            <p className="mt-1">
              Check back closer to August 2026 for the full schedule. Key updates
              will also be shared via{" "}
              <span className="font-semibold">official email</span> and CODL&apos;s{" "}
              social media channels.
            </p>
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
                          href="mailto:icode.codl.lk"
                          className="text-xs font-medium text-uom-gold hover:underline"
                        >
                          icode.codl.lk
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
  );
}

