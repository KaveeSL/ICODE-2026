import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode
} from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Which HTML element to render as (use `li` inside lists to preserve layout/semantics). */
  as?: ElementType;
  /** Animation style. */
  variant?: RevealVariant;
  /** Delay in milliseconds (for stagger). */
  delayMs?: number;
  /** Run only once when first revealed. */
  once?: boolean;
  /** IntersectionObserver threshold. */
  threshold?: number;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function isNarrowViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(max-width: 767px)")?.matches ?? false;
}

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  variant = "up",
  delayMs = 0,
  once = true,
  threshold = 0.05
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || isNarrowViewport()) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let done = false;
    const markVisible = () => {
      if (done) return;
      done = true;
      setInView(true);
    };

    // Fail-open so nested/tall content never stays invisible if IO misses.
    const fallbackId = window.setTimeout(markVisible, 900);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          markVisible();
          if (once) observer.disconnect();
        } else if (!once) {
          done = false;
          setInView(false);
        }
      },
      { threshold, rootMargin: "64px 0px 64px 0px" }
    );

    observer.observe(el);
    return () => {
      window.clearTimeout(fallbackId);
      observer.disconnect();
    };
  }, [once, threshold]);

  const delay = Math.max(0, delayMs);
  const revealClassName = [
    "reveal",
    `reveal--${variant}`,
    inView ? "reveal--in" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const revealStyle = {
    "--reveal-delay": `${delay}ms`
  } as CSSProperties;

  return createElement(Tag, { ref, className: revealClassName, style: revealStyle }, children);
}
