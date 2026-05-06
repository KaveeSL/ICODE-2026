import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import { Button } from "./components/ui/button";
import { Footer } from "./Footer";
import { Reveal } from "./components/Reveal";

export default function RegistrationPage() {
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
            <a href="/registration" className="text-uom-maroon">
              Registration
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
                  to="/#dates"
                  onClick={() => setMobileNavOpen(false)}
                  className="hover:text-uom-maroon"
                >
                  Important Dates
                </Link>
                <Link
                  to="/registration"
                  onClick={() => setMobileNavOpen(false)}
                  className="text-uom-maroon"
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

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pb-28 md:pt-16">
        <section className="rounded-3xl border border-uom-gold/50 bg-gradient-to-br from-white via-uom-goldSoft/20 to-white p-5 shadow-sm md:p-7">
          <Reveal variant="up" delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-uom-gold/40 bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
              <SparklesIcon className="h-3.5 w-3.5 text-uom-maroon" />
              Registration
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={120}>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Registration opens soon
            </h1>
          </Reveal>
          <Reveal variant="up" delayMs={220}>
            <p className="mt-2 text-sm text-neutral-700 md:text-base">
              We are preparing a smooth registration experience for ICODE2026.
              You will see the complete details here once registration goes live.
            </p>
          </Reveal>

          <Reveal variant="scale" delayMs={320}>
            <div className="mt-6 rounded-2xl border border-uom-maroon/20 bg-white/85 p-4 shadow-sm md:p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-uom-goldSoft">
                <ClockIcon className="h-3.5 w-3.5" />
                Coming soon
              </div>

              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                <Reveal as="li" className="rounded-xl border border-border bg-white p-3" variant="up" delayMs={0}>
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <DocumentTextIcon className="h-4 w-4 text-uom-maroon" />
                      Registration categories & fee table
                    </p>
                </Reveal>
                <Reveal as="li" className="rounded-xl border border-border bg-white p-3" variant="up" delayMs={110}>
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <CreditCardIcon className="h-4 w-4 text-uom-maroon" />
                      Payment methods & invoice guidance
                    </p>
                </Reveal>
                <Reveal as="li" className="rounded-xl border border-border bg-white p-3" variant="up" delayMs={220}>
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <SparklesIcon className="h-4 w-4 text-uom-maroon" />
                      Early-bird & group registration options
                    </p>
                </Reveal>
                <Reveal as="li" className="rounded-xl border border-border bg-white p-3" variant="up" delayMs={330}>
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <ClipboardDocumentCheckIcon className="h-4 w-4 text-uom-maroon" />
                      Registration form & confirmation workflow
                    </p>
                </Reveal>
              </ul>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
