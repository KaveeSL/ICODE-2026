import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  PresentationChartBarIcon,
  PhotoIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import {
  abstractSessionOptions,
  conferenceAbstracts,
  type ConferenceAbstract
} from "./constants/abstracts";

function hasAbstract(item: ConferenceAbstract) {
  return Boolean(item.abstractText?.trim() || item.abstractPdfUrl);
}

function AbstractCard({
  item,
  open,
  onToggle
}: {
  item: ConferenceAbstract;
  open: boolean;
  onToggle: () => void;
}) {
  const authorsLabel =
    item.authors.length > 0 ? item.authors.join(", ") : "Authors TBA";
  const abstractReady = hasAbstract(item);

  return (
    <article className="abstracts-card">
      <div className="abstracts-card__top">
        <div className="abstracts-card__badges">
          <span className="abstracts-card__session">
            {item.session === "P"
              ? item.sessionLabel
              : `Session ${item.session}: ${item.sessionLabel}`}
          </span>
        </div>
      </div>

      <h2 className="abstracts-card__title">{item.title}</h2>
      <p className="abstracts-card__authors">{authorsLabel}</p>
      {item.country ? (
        <p className="abstracts-card__country">{item.country}</p>
      ) : null}

      <div className="abstracts-card__actions">
        <button
          type="button"
          className={`abstracts-card__btn${abstractReady ? "" : " abstracts-card__btn--muted"}`}
          onClick={onToggle}
          aria-expanded={open}
        >
          <DocumentTextIcon className="h-4 w-4" aria-hidden />
          {open ? "Hide abstract" : "Abstract"}
        </button>

        {item.session === "P" ? (
          <span className="abstracts-card__btn abstracts-card__btn--soon" title="Poster file available after the conference">
            <PhotoIcon className="h-4 w-4" aria-hidden />
            Poster soon
          </span>
        ) : (
          <>
            {item.slidesUrl ? (
              <a
                href={item.slidesUrl}
                target="_blank"
                rel="noreferrer"
                className="abstracts-card__btn"
              >
                <PresentationChartBarIcon className="h-4 w-4" aria-hidden />
                Slides
              </a>
            ) : (
              <span className="abstracts-card__btn abstracts-card__btn--soon" title="Available after the conference">
                <PresentationChartBarIcon className="h-4 w-4" aria-hidden />
                Slides soon
              </span>
            )}

            {item.videoUrl ? (
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="abstracts-card__btn"
              >
                <PlayCircleIcon className="h-4 w-4" aria-hidden />
                Video
              </a>
            ) : (
              <span className="abstracts-card__btn abstracts-card__btn--soon" title="Available after the conference">
                <PlayCircleIcon className="h-4 w-4" aria-hidden />
                Video soon
              </span>
            )}
          </>
        )}
      </div>

      {open ? (
        <div className="abstracts-card__body">
          {item.abstractPdfUrl ? (
            <a
              href={item.abstractPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="abstracts-card__pdf"
            >
              Open abstract (PDF)
            </a>
          ) : null}
          {item.abstractText ? (
            <p className="abstracts-card__text">
              <span className="abstracts-card__abstract-label">Abstract—</span>
              {item.abstractText}
            </p>
          ) : null}
          {item.keywords?.length ? (
            <div className="abstracts-card__keywords">
              <span className="abstracts-card__keywords-label">Keywords</span>
              <ul className="abstracts-card__keywords-list">
                {item.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {!abstractReady ? (
            <p className="abstracts-card__placeholder">
              Abstract will be published here shortly.
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default function AbstractsPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sessionFilter, setSessionFilter] = useState<string>("all");
  const [openAbstractId, setOpenAbstractId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return conferenceAbstracts.filter((item) => {
      if (sessionFilter !== "all" && item.session !== sessionFilter) return false;
      if (!q) return true;
      const haystack = `${item.title} ${item.authors.join(" ")} ${item.country ?? ""} ${item.theme} ${item.sessionLabel} ${(item.keywords ?? []).join(" ")} ${item.abstractText ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, sessionFilter]);

  const toggleAbstract = (id: string) => {
    setOpenAbstractId((current) => (current === id ? null : id));
  };

  const openIndex = openAbstractId
    ? filtered.findIndex((item) => item.id === openAbstractId)
    : -1;
  const peerIndex =
    openIndex >= 0
      ? openIndex % 2 === 0
        ? openIndex + 1
        : openIndex - 1
      : -1;

  return (
    <SitePageShell className="flex flex-col">
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main className="mx-auto flex-1 w-full max-w-7xl min-w-0 overflow-x-hidden px-4 pb-16 pt-[calc(60px+2.5rem)] md:px-6 md:pb-20 md:pt-[calc(68px+3.5rem)]">
        <section className="site-panel w-full rounded-3xl border border-uom-gold/50 bg-gradient-to-br from-white via-uom-goldSoft/25 to-white p-5 shadow-sm md:p-8">
          <Reveal variant="up" delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-uom-gold/40 bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
              <DocumentTextIcon className="h-3.5 w-3.5 text-uom-maroon" />
              Programme
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={80}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Conference Programme
            </h1>
          </Reveal>
          <Reveal variant="up" delayMs={140}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
              Browse accepted Day 1 papers by session. Author details and abstracts
              will be added here; presentation slides and videos will appear after the
              conference.
            </p>
          </Reveal>
          <Reveal variant="up" delayMs={180}>
            <Link to="/programme/day1" className="abstracts-programme-link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-uom-maroon hover:underline">
              <CalendarDaysIcon className="h-4 w-4" aria-hidden />
              View Day 1 programme
            </Link>
          </Reveal>
        </section>

        <section className="abstracts-toolbar mt-6 md:mt-8">
          <label className="abstracts-search">
            <MagnifyingGlassIcon className="abstracts-search__icon" aria-hidden />
            <span className="sr-only">Search programme</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author, or theme"
              className="abstracts-search__input"
            />
          </label>

          <div className="abstracts-filters" role="tablist" aria-label="Filter by session">
            <button
              type="button"
              role="tab"
              aria-selected={sessionFilter === "all"}
              className={`abstracts-filter${sessionFilter === "all" ? " abstracts-filter--active" : ""}`}
              onClick={() => setSessionFilter("all")}
            >
              All
            </button>
            {abstractSessionOptions.map(({ id, theme }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={sessionFilter === id}
                className={`abstracts-filter${sessionFilter === id ? " abstracts-filter--active" : ""}`}
                onClick={() => setSessionFilter(id)}
              >
                {id === "P" ? theme : `Session ${id}: ${theme}`}
              </button>
            ))}
          </div>
        </section>

        <p className="abstracts-count mt-4 text-sm text-neutral-600">
          Showing {filtered.length} of {conferenceAbstracts.length} papers
        </p>

        <div className="abstracts-grid mt-4">
          {filtered.map((item, index) => (
            <Reveal
              key={item.id}
              variant="up"
              className={[
                "abstracts-grid__item",
                openAbstractId === item.id ? "abstracts-grid__item--open" : "",
                index === peerIndex ? "abstracts-grid__item--peer" : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <AbstractCard
                item={item}
                open={openAbstractId === item.id}
                onToggle={() => toggleAbstract(item.id)}
              />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-uom-gold/40 bg-uom-goldSoft/30 px-4 py-8 text-center text-sm text-neutral-600">
            No papers match your search.
          </p>
        ) : null}
      </main>

      <Footer />
    </SitePageShell>
  );
}
