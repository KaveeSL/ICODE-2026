import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import { ContactBitWebsiteFooterItem } from "./components/ContactBitWebsiteFooterItem";
import { ContactWhatsAppFooterItem } from "./components/ContactWhatsAppFooterItem";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import { FooterConferenceLinks } from "./components/FooterConferenceLinks";

export default function ProgrammePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <SitePageShell>
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-[calc(60px+2.5rem)] md:px-6 md:pb-20 md:pt-[calc(68px+3.5rem)]">
        <section className="space-y-5">
          <Reveal variant="up" delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
              Programme
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={120}>
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Conference programme
            </h1>
          </Reveal>
          <Reveal variant="up" delayMs={220}>
            <p className="text-sm text-neutral-700 md:text-base">
              The detailed day-by-day programme for ICODE2026 is{" "}
              <span className="font-semibold">coming soon</span>. Closer to the
              conference, this page will include keynote and plenary details,
              parallel session titles, and workshop information, as well as a
              downloadable PDF schedule.
            </p>
          </Reveal>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal variant="up" delayMs={0}>
            <div className="site-card rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
              <h2 className="text-sm font-semibold text-neutral-900">
                Keynotes &amp; plenaries
              </h2>
              <p className="mt-2 text-xs text-neutral-700">
                Profiles of keynote speakers and plenary panels highlighting major
                themes in open, distance, and digital education.
              </p>
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={120}>
            <div className="site-card rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
              <h2 className="text-sm font-semibold text-neutral-900">
                Parallel &amp; workshop sessions
              </h2>
              <p className="mt-2 text-xs text-neutral-700">
                Track-wise listings of paper sessions, symposia, and hands-on
                workshops, aligned with the conference themes.
              </p>
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={240}>
            <div className="site-card rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
              <h2 className="text-sm font-semibold text-neutral-900">
                Policy &amp; leadership dialogues
              </h2>
              <p className="mt-2 text-xs text-neutral-700">
                Information on ministerial and agency panels, vice-chancellors&apos;
                roundtables, and other high-level discussions.
              </p>
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={360}>
            <div className="site-card rounded-2xl border border-border bg-white px-4 py-4 md:px-5 md:py-5">
              <h2 className="text-sm font-semibold text-neutral-900">
                Downloadable schedule
              </h2>
              <p className="mt-2 text-xs text-neutral-700">
                A full programme booklet in PDF format will be available here once
                the schedule is finalised.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mt-8">
          <Reveal variant="up" delayMs={0}>
            <div className="site-callout rounded-2xl border border-dashed border-uom-gold/70 bg-uom-goldSoft/40 px-4 py-4 md:px-5 md:py-5 text-xs text-neutral-800">
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
          </Reveal>
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
                  <FooterConferenceLinks />
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
    </SitePageShell>
  );
}

