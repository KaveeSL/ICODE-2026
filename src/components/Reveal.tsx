import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Which HTML element to render as (use `li` inside lists to preserve layout/semantics). */
  as?: keyof JSX.IntrinsicElements;
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

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  variant = "up",
  delayMs = 0,
  once = true,
  threshold = 0.15
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const delay = Math.max(0, delayMs);
  return (
    <Tag
      ref={ref as any}
      className={[
        "reveal",
        `reveal--${variant}`,
        inView ? "reveal--in" : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ["--reveal-delay" as any]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

