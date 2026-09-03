/** Disabled post-conference CTAs (registration, submissions). */
export const closedCtaClass =
  "submission-closed-btn pointer-events-none cursor-not-allowed border border-neutral-300 bg-neutral-200 text-neutral-500 shadow-none hover:bg-neutral-200 hover:text-neutral-500 disabled:opacity-100 sm:whitespace-nowrap whitespace-normal";

/** Navbar Submit Abstract — cream in light, maroon+gold in dark (matches hero). */
export function submitAbstractNavClass(isDark: boolean): string {
  return isDark
    ? "homepage-hero-cta homepage-hero-cta--primary ml-2 border-2 border-uom-gold bg-uom-maroon text-white hover:bg-uom-maroonDark hover:text-white shadow-sm"
    : "ml-2 border border-uom-gold bg-uom-goldSoft/90 text-neutral-900";
}

/** Inline/content Submit Abstract buttons on subpages. */
export function submitAbstractInlineClass(isDark: boolean, extra = ""): string {
  const base = isDark
    ? "homepage-hero-cta homepage-hero-cta--primary border-2 border-uom-gold bg-uom-maroon text-white hover:bg-uom-maroonDark hover:text-white shadow-sm"
    : "border border-uom-gold bg-uom-goldSoft/90 text-neutral-900";
  return extra ? `${base} ${extra}` : base;
}
