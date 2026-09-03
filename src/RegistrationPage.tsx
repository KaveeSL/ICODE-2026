import { useState } from "react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  UserGroupIcon,
  VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import { useSiteTheme } from "./context/SiteThemeProvider";
import { registrationClosedLabel } from "./constants/importantDates";

const programmeDays = [
  {
    day: 1,
    title: "Academic Research Conference",
    date: "5 August 2026",
    access: "Registration Closed",
    open: false,
    invite: false,
    accent: "maroon" as const,
    icon: AcademicCapIcon,
    focus: "Research presentations, keynotes, and peer exchange"
  },
  {
    day: 2,
    title: "Policy & Leadership Summit",
    date: "6 August 2026",
    access: "By Invitation Only",
    open: false,
    invite: true,
    accent: "gold" as const,
    icon: UserGroupIcon,
    focus: "Invitation-only leadership summit — not open for public registration."
  },
  {
    day: 3,
    title: "Practice & Innovation Workshops",
    date: "7 August 2026",
    access: "Registration Closed",
    open: false,
    invite: false,
    accent: "maroon" as const,
    icon: CursorArrowRaysIcon,
    focus: "Hands-on workshops for practice, tools, and innovation"
  }
];

const registrationFeeRows = [
  { category: "Accepted Authors", fee: "Free", highlight: true },
  { category: "Regular Registration", fee: "LKR 10,000" },
  { category: "State University / OUSL – Academics and Students", fee: "LKR 7,500" },
  { category: "Government Officials in Education", fee: "LKR 5,000" },
  {
    category: "International Participants",
    fee: "$30",
    secondaryFee: "$20 (Virtual)"
  }
];

const registrationIncludes = [
  "Academic research sessions on 5 August 2026",
  "Practice and innovation workshops on 7 August 2026",
  "Keynote and invited sessions",
  "Conference materials",
  "Refreshments and lunch during registered conference/workshop days"
];

export default function RegistrationPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isDark } = useSiteTheme();

  const heroChipClass = isDark
    ? "inline-flex items-center gap-1.5 rounded-full border border-uom-gold/45 bg-uom-maroon/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-uom-goldSoft shadow-sm"
    : "inline-flex items-center gap-1.5 rounded-full border border-uom-maroon/30 bg-uom-goldSoft/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900 shadow-sm";

  const heroChipIconClass = isDark ? "text-uom-goldSoft" : "text-uom-maroon";

  return (
    <SitePageShell variant="glass" className="flex flex-col" id="registration-page">
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main className="mx-auto flex-1 w-full max-w-7xl min-w-0 overflow-x-hidden px-4 pb-20 pt-[calc(60px+2.5rem)] md:px-6 md:pb-28 md:pt-[calc(68px+4rem)]">
        {/* Hero */}
        <section className="site-panel rounded-3xl border border-uom-gold/50 bg-gradient-to-br from-white via-uom-goldSoft/25 to-white p-5 shadow-sm md:p-8">
          <Reveal variant="up" delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-uom-gold/40 bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
              <ClipboardDocumentCheckIcon className="h-3.5 w-3.5 text-uom-maroon" />
              ICODE2026 Registration
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={100}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Registration is closed
            </h1>
          </Reveal>

          <Reveal variant="up" delayMs={180}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
              ICODE2026 has concluded. Conference and workshop registration is no longer open.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="registration-day-access registration-day-access--closed !mt-0">
                {registrationClosedLabel}
              </span>
              <span className="registration-day-access registration-day-access--closed !mt-0">
                Workshops closed
              </span>
            </div>
          </Reveal>

          {/* <Reveal variant="up" delayMs={240}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
              <span className="font-semibold text-neutral-900">
                ICODE2026 – International Conference on Open and Digital Education
              </span>{" "}
              will be held from{" "}
              <span className="font-semibold">5–7 August 2026</span> as a hybrid event in{" "}
              <span className="font-semibold">Colombo, Sri Lanka</span>.
            </p>
          </Reveal> */}

        
        </section>

        {/* Programme structure */}
        <section className="mt-10 md:mt-12">
          <Reveal variant="up">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              <CalendarDaysIcon className="h-6 w-6 text-uom-maroon" />
              Three Connected Programme Components
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-700 md:text-base">
              Choose the days that match your role — public registration applied to Days 1 and 3.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {programmeDays.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.day} variant="up" delayMs={index * 90} className="h-full">
                  <article
                    className={`registration-day-card registration-day-card--${item.accent}${
                      item.invite ? " registration-day-card--invite" : ""
                    }`}
                  >
                    <div className="registration-day-card__top">
                      <span className="registration-day-card__daychip">Day {item.day}</span>
                      <Icon className="registration-day-card__icon" aria-hidden />
                    </div>

                    <h3 className="registration-day-card__title">{item.title}</h3>
                    <p className="registration-day-card__date">{item.date}</p>

                    <p
                      className={`registration-day-access${
                        item.open
                          ? " registration-day-access--open"
                          : " registration-day-access--closed"
                      }`}
                    >
                      {item.access}
                    </p>

                    {item.invite ? (
                      <p className="registration-day-card__focus registration-day-card__focus--invite">
                        {item.focus}
                      </p>
                    ) : (
                      <p className="registration-day-card__focus">{item.focus}</p>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Registration fees */}
        <section className="registration-fees mt-10 md:mt-12">
          <Reveal variant="up">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              <BanknotesIcon className="h-6 w-6 text-uom-maroon" />
              Registration Fees
            </h2>
          </Reveal>

          <Reveal variant="up" delayMs={80}>
            <div className="registration-fee-table-wrap mt-4 overflow-hidden rounded-xl border border-uom-gold/45 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="registration-fee-table w-full min-w-[20rem] border-collapse text-sm">
                  <caption className="sr-only">ICODE2026 registration fees by category</caption>
                  <thead className="registration-fee-table__thead">
                    <tr>
                      <th scope="col" className="registration-fee-table__th registration-fee-table__th--category">
                        Category
                      </th>
                      <th scope="col" className="registration-fee-table__th registration-fee-table__th--fee">
                        Registration Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="registration-fee-table__body">
                    {registrationFeeRows.map((row) => (
                      <tr
                        key={row.category}
                        className={`registration-fee-table__row${
                          row.highlight ? " registration-fee-table__row--authors" : ""
                        }`}
                      >
                        <td className="registration-fee-table__td registration-fee-table__td--category">
                          {row.category}
                        </td>
                        <td className="registration-fee-table__td registration-fee-table__td--fee">
                          <span
                            className={
                              row.highlight ? "registration-fee-table__fee--free" : undefined
                            }
                          >
                            {row.fee}
                          </span>
                          {row.secondaryFee && (
                            <span className="registration-fee-table__td--muted">
                              {row.secondaryFee}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="registration-fee-table__footnote">
                <span className="registration-fee-table__footnote-label">Accepted authors:</span>{" "}
                Registration was free for all accepted authors. However, accepted authors had to
                complete the registration process by the deadline to confirm their presentation
                slot.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Includes + online */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal variant="up" className="site-panel rounded-3xl border border-uom-gold/40 bg-white/95 p-5 shadow-sm md:p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              <CheckCircleIcon className="h-6 w-6 text-uom-maroon" />
              Registration Includes
            </h2>
            <p className="mt-2 text-sm text-neutral-700">
              Registration provided access to the public components of ICODE2026, including:
            </p>
            <ul className="mt-4 space-y-3">
              {registrationIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-800">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-uom-maroon" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" delayMs={120} className="site-panel rounded-3xl border border-uom-gold/40 bg-gradient-to-br from-white via-uom-goldSoft/15 to-white p-5 shadow-sm md:p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              <VideoCameraIcon className="h-6 w-6 text-uom-maroon" />
              Online Participation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
              Selected sessions may be facilitated online where applicable. Accepted presenters who
              are unable to attend in person will be given the option to present virtually.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-uom-maroon/20 bg-white/80 px-3 py-1.5 text-xs font-semibold text-neutral-800">
                <ComputerDesktopIcon className="h-4 w-4 text-uom-maroon" />
                Hybrid access
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-uom-maroon/20 bg-white/80 px-3 py-1.5 text-xs font-semibold text-neutral-800">
                <GlobeAltIcon className="h-4 w-4 text-uom-maroon" />
                Virtual presenting option
              </span>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </SitePageShell>
  );
}
