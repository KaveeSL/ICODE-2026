import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import workshopFlyerImg from "../assets/Call for Workshops.png";

type WorkshopFlyerModalProps = {
  open: boolean;
  onClose: () => void;
  isDark?: boolean;
};

const MOBILE_CLOSE_MS = 340;
const DESKTOP_CLOSE_MS = 240;

function getCloseDurationMs() {
  if (typeof window === "undefined") return MOBILE_CLOSE_MS;
  return window.matchMedia("(max-width: 639px)").matches ? MOBILE_CLOSE_MS : DESKTOP_CLOSE_MS;
}

export function WorkshopFlyerModal({ open, onClose, isDark = false }: WorkshopFlyerModalProps) {
  const [isPresent, setIsPresent] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setIsPresent(true);
      setIsClosing(false);
      return;
    }

    if (!isPresent) return;

    setIsClosing(true);
    const timer = window.setTimeout(() => {
      setIsPresent(false);
      setIsClosing(false);
    }, getCloseDurationMs());

    return () => window.clearTimeout(timer);
  }, [open, isPresent]);

  useEffect(() => {
    if (!isPresent) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isClosing) onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPresent, isClosing, onClose]);

  if (!isPresent) return null;

  const panelStateClass = isClosing
    ? "workshop-flyer-modal__panel--closing"
    : "workshop-flyer-modal__panel--opening";

  const backdropStateClass = isClosing
    ? "workshop-flyer-modal__backdrop--closing"
    : "workshop-flyer-modal__backdrop--opening";

  return (
    <div
      className="workshop-flyer-modal fixed inset-0 z-[120] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="workshop-flyer-title"
    >
      <button
        type="button"
        className={`workshop-flyer-modal__backdrop absolute inset-0 bg-neutral-950/75 backdrop-blur-[3px] ${backdropStateClass}`}
        onClick={() => !isClosing && onClose()}
        aria-label="Close workshop flyer"
      />

      <div
        className={`workshop-flyer-modal__panel relative z-10 flex max-h-[92vh] w-full max-w-[min(100%,28rem)] flex-col overflow-hidden rounded-t-3xl border border-uom-gold/35 shadow-2xl sm:max-w-md sm:rounded-3xl md:max-w-lg ${
          isDark ? "bg-[#1e1e22]" : "bg-white"
        } ${panelStateClass}`}
      >
        <div className="workshop-flyer-modal__header relative shrink-0 bg-gradient-to-r from-uom-maroon via-[#8f2340] to-uom-maroon text-white">
          <div
            className="workshop-flyer-modal__handle-row flex w-full justify-center pt-2.5 sm:hidden"
            aria-hidden="true"
          >
            <span className="workshop-flyer-modal__handle block h-1 w-10 rounded-full bg-white/45" />
          </div>

          <div className="px-4 pb-3 pt-1 sm:px-5 sm:py-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-uom-goldSoft/90">
                  ICODE2026
                </p>
                <h2
                  id="workshop-flyer-title"
                  className="mt-0.5 text-sm font-semibold leading-snug sm:text-base"
                >
                  Call for Workshop Proposals
                </h2>
              </div>

              <button
                type="button"
                onClick={() => !isClosing && onClose()}
                className="workshop-flyer-modal__close inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-uom-maroon"
                aria-label="Close"
              >
                <XMarkIcon className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        <div className="workshop-flyer-modal__body min-h-0 flex-1 overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)]">
          <img
            src={workshopFlyerImg}
            alt="ICODE2026 Call for Workshop Proposals — half-day and full-day workshops on 7 August 2026 at the University of Moratuwa"
            className="block h-auto w-full"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
