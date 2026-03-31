import { useEffect, useRef, useState } from "react";
import { WHATSAPP_CHAT_URL } from "../constants/contact";

/**
 * Fixed WhatsApp launcher with a short-lived “toast” hint above the button.
 */
export function WhatsAppFloat() {
  const [toastMounted, setToastMounted] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);
  const unmountTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const showToast = () => {
      if (unmountTimeoutRef.current != null) {
        window.clearTimeout(unmountTimeoutRef.current);
      }
      setToastVisible(true);
      setToastMounted(true);
      if (hideTimeoutRef.current != null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        setToastVisible(false);
        unmountTimeoutRef.current = window.setTimeout(() => {
          setToastMounted(false);
        }, 320);
      }, 7000);
    };

    showToast();
    const intervalId = window.setInterval(showToast, 30000);

    return () => {
      window.clearInterval(intervalId);
      if (hideTimeoutRef.current != null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      if (unmountTimeoutRef.current != null) {
        window.clearTimeout(unmountTimeoutRef.current);
      }
    };
  }, []);

  const dismissToast = () => {
    setToastVisible(false);
    if (hideTimeoutRef.current != null) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (unmountTimeoutRef.current != null) {
      window.clearTimeout(unmountTimeoutRef.current);
    }
    unmountTimeoutRef.current = window.setTimeout(() => {
      setToastMounted(false);
    }, 320);
  };

  return (
    <div className="pointer-events-none fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-[100] flex items-end gap-3 md:bottom-8 md:right-8">
      {toastMounted ? (
        <div
          role="status"
          className={`wa-toast-shell pointer-events-auto max-w-[min(18rem,calc(100vw-5rem))] ${
            toastVisible ? "wa-toast-enter" : "wa-toast-exit"
          }`}
        >
          <div className="relative rounded-xl border border-emerald-400 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm shadow-emerald-900/10">
            <button
              type="button"
              onClick={dismissToast}
              className="absolute right-1.5 top-1.5 rounded-full p-0.5 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
              aria-label="Dismiss WhatsApp hint"
            >
              <span className="sr-only">Dismiss</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <p className="pr-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
              ICODE2026 Support
            </p>
            <p className="mt-0.5 pr-6 text-xs leading-snug text-neutral-900">
              Need help? Chat with us.
            </p>
            
            <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-emerald-400 bg-white" />
          </div>
        </div>
      ) : null}

      <a
        href={WHATSAPP_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab-shine pointer-events-auto relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full text-white ring-2 ring-white/25 transition hover:scale-[1.05] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
        aria-label="Need help? Chat with us on WhatsApp"
        title="Need help? Chat with us on WhatsApp"
      >
        <svg
          className="relative z-10 h-8 w-8 drop-shadow-sm"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
