import { Link } from "react-router-dom";
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import codlLogo from "../assets/codllogo.png";
import { Button } from "./ui/button";
import { HomepageThemeToggle } from "./HomepageThemeToggle";
import { useSiteTheme } from "../context/SiteThemeProvider";
import { submitAbstractNavClass } from "../constants/ctaStyles";

type SiteHeaderProps = {
  mobileNavOpen: boolean;
  onMobileNavToggle: () => void;
  onMobileNavClose: () => void;
  submitAbstractHref?: string;
  submitAbstractExternal?: boolean;
};

export function SiteHeader({
  mobileNavOpen,
  onMobileNavToggle,
  onMobileNavClose,
  submitAbstractHref = "/call-for-papers",
  submitAbstractExternal = false
}: SiteHeaderProps) {
  const { theme, isDark, toggleTheme } = useSiteTheme();

  const submitButton = (
    <Button size="sm" className={submitAbstractNavClass(isDark)}>
      <span className="flex items-center gap-1">
        Submit Abstract
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </span>
    </Button>
  );

  const mobileSubmitButton = (
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
  );

  return (
    <header
      className={`homepage-site-header ${
        isDark ? "homepage-dark" : ""
      } border-b border-white/60 bg-white/55 backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 relative">
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
              <img src={codlLogo} alt="CODL logo" className="h-9 w-9 object-contain" />
            </div>
          </div>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-500">CODL</p>
            <p className="text-[11px] font-semibold text-neutral-900">
              University of Moratuwa · Sri Lanka
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-xs font-medium text-neutral-700 md:flex">
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
          <HomepageThemeToggle theme={theme} onToggle={toggleTheme} />
          {submitAbstractExternal ? (
            <a href={submitAbstractHref} target="_blank" rel="noreferrer">
              {submitButton}
            </a>
          ) : (
            <Link to={submitAbstractHref}>{submitButton}</Link>
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <HomepageThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={onMobileNavToggle}
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
              <Link to="/#about" onClick={onMobileNavClose} className="hover:text-uom-maroon">
                About
              </Link>
              <Link to="/#dates" onClick={onMobileNavClose} className="hover:text-uom-maroon">
                Important Dates
              </Link>
              <Link to="/registration" onClick={onMobileNavClose} className="hover:text-uom-maroon">
                Registration
              </Link>
              <Link to="/#committees" onClick={onMobileNavClose} className="hover:text-uom-maroon">
                Committees
              </Link>
              <Link to="/#contact" onClick={onMobileNavClose} className="hover:text-uom-maroon">
                Contact
              </Link>
              <div className="pt-2">
                {submitAbstractExternal ? (
                  <a
                    href={submitAbstractHref}
                    target="_blank"
                    rel="noreferrer"
                    onClick={onMobileNavClose}
                  >
                    {mobileSubmitButton}
                  </a>
                ) : (
                  <Link to={submitAbstractHref} onClick={onMobileNavClose}>
                    {mobileSubmitButton}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
