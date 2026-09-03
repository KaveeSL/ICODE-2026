import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CursorArrowRaysIcon,
  PhotoIcon,
  UserGroupIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import { ConferenceYouTubeEmbed } from "./components/ConferenceYouTubeEmbed";
import { conferenceVideosByDay } from "./constants/conferenceVideos";
import { programmeDaysMeta } from "./constants/programmeSchedule";
import {
  galleryFolderUrl,
  galleryPhotosByDay,
  galleryPreviewUrl,
  type GalleryDaySlug
} from "./constants/galleryPhotos";

type ActiveDay = 1 | 2 | 3;

const dayIcons = {
  1: AcademicCapIcon,
  2: UserGroupIcon,
  3: CursorArrowRaysIcon
} as const;

const daySlugByDay: Record<ActiveDay, GalleryDaySlug> = {
  1: "day1",
  2: "day2",
  3: "day3"
};

function dayFromSlug(slug: string | undefined): ActiveDay | null {
  if (slug === "day1") return 1;
  if (slug === "day2") return 2;
  if (slug === "day3") return 3;
  return null;
}

export default function GalleryPage() {
  const { daySlug } = useParams();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const activeDay = dayFromSlug(daySlug);
  const slug = activeDay ? daySlugByDay[activeDay] : "day1";
  const photos = galleryPhotosByDay[slug];
  const folderHref = galleryFolderUrl(slug);
  const lightboxFile = lightboxIndex === null ? null : photos[lightboxIndex];
  const lightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    setLightboxIndex(null);
  }, [daySlug]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const html = document.documentElement;
    const { body } = document;
    const scrollY = window.scrollY;
    const previousHtmlOverflow = html.style.overflow;
    const previousBody = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    html.classList.add("gallery-lightbox-open");

    const blockScroll = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener("touchmove", blockScroll, { passive: false });
    window.addEventListener("wheel", blockScroll, { passive: false });

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBody.overflow;
      body.style.position = previousBody.position;
      body.style.top = previousBody.top;
      body.style.left = previousBody.left;
      body.style.right = previousBody.right;
      body.style.width = previousBody.width;
      html.classList.remove("gallery-lightbox-open");
      window.scrollTo(0, scrollY);
      window.removeEventListener("touchmove", blockScroll);
      window.removeEventListener("wheel", blockScroll);
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxIndex((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length
        );
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxIndex((current) =>
          current === null ? current : (current + 1) % photos.length
        );
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, photos.length]);

  if (!daySlug) {
    return <Navigate to="/gallery/day1" replace />;
  }

  if (!activeDay) {
    return <Navigate to="/gallery/day1" replace />;
  }

  const dayVideo = conferenceVideosByDay[activeDay];
  const activeMeta = programmeDaysMeta.find((item) => item.day === activeDay)!;
  const ActiveIcon = dayIcons[activeDay];

  const showPreviousPhoto = () => {
    setLightboxIndex((current) =>
      current === null ? current : (current - 1 + photos.length) % photos.length
    );
  };

  const showNextPhoto = () => {
    setLightboxIndex((current) =>
      current === null ? current : (current + 1) % photos.length
    );
  };

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
              <PhotoIcon className="h-3.5 w-3.5 text-uom-maroon" />
              Gallery
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={80}>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Conference Gallery
            </h1>
          </Reveal>
          <Reveal variant="up" delayMs={140}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
              Photos from ICODE2026, hosted on the University of Moratuwa Document
              Management System. Browse by day without downloading the full archive.
            </p>
          </Reveal>
        </section>

        <section className="mt-8 w-full md:mt-10">
          <Reveal variant="up" className="w-full">
            <div className="programme-day-tabs w-full" role="tablist" aria-label="Gallery days">
              {programmeDaysMeta.map((item) => {
                const Icon = dayIcons[item.day as ActiveDay];
                const isActive = activeDay === item.day;
                const to = `/gallery/${daySlugByDay[item.day as ActiveDay]}`;
                return (
                  <Link
                    key={item.day}
                    to={to}
                    role="tab"
                    aria-selected={isActive}
                    className={`programme-day-tab${isActive ? " programme-day-tab--active" : ""}`}
                  >
                    <span className="programme-day-tab__top">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      <span className="programme-day-tab__day">Day {item.day}</span>
                    </span>
                    <span className="programme-day-tab__title">{item.title}</span>
                    <span className="programme-day-tab__meta">
                      <span>{item.date}</span>
                      <span className="programme-day-tab__access">
                        {galleryPhotosByDay[daySlugByDay[item.day as ActiveDay]].length} photos
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <div
            role="tabpanel"
            className="programme-day-panel mt-5 w-full overflow-hidden rounded-3xl border border-uom-gold/45 bg-white shadow-sm md:mt-6"
          >
            <div className="programme-day-panel__header">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-uom-maroon">
                  Day {activeMeta.day} · {activeMeta.accent}
                </p>
                <h2 className="mt-1 flex items-center gap-2 text-lg font-semibold text-neutral-900 md:text-xl">
                  <ActiveIcon className="h-5 w-5 shrink-0 text-uom-maroon" aria-hidden />
                  {activeMeta.title}
                </h2>
                <p className="mt-1 text-sm text-neutral-600">
                  {activeMeta.date} · {photos.length} photos
                </p>
              </div>
              <a
                href={folderHref}
                target="_blank"
                rel="noreferrer"
                className="programme-day-panel__cta-btn"
              >
                Open full album
                <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden />
              </a>
            </div>

            {dayVideo ? (
              <ConferenceYouTubeEmbed key={dayVideo.videoId} video={dayVideo} />
            ) : null}

            <div className="gallery-grid">
              {photos.map((fileName, index) => (
                <button
                  key={fileName}
                  type="button"
                  className="gallery-grid__item"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open ${fileName}`}
                >
                  <img
                    src={galleryPreviewUrl(slug, fileName)}
                    alt={`ICODE2026 Day ${activeDay} photo`}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {lightboxFile && lightboxIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <div
            className="gallery-lightbox__stage"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox__nav"
              onClick={showPreviousPhoto}
              aria-label="Previous photo"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <img
              src={galleryPreviewUrl(slug, lightboxFile, 1600, 1200)}
              alt={`ICODE2026 Day ${activeDay} photo ${lightboxIndex + 1} of ${photos.length}`}
              className="gallery-lightbox__image"
            />
            <button
              type="button"
              className="gallery-lightbox__nav"
              onClick={showNextPhoto}
              aria-label="Next photo"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          <p className="gallery-lightbox__count">
            {lightboxIndex + 1} / {photos.length}
          </p>
          <a
            href={folderHref}
            target="_blank"
            rel="noreferrer"
            className="gallery-lightbox__link"
            onClick={(event) => event.stopPropagation()}
          >
            View on UoM DMS
            <ChevronRightIcon className="h-4 w-4" aria-hidden />
          </a>
        </div>
      ) : null}

      <Footer />
    </SitePageShell>
  );
}
