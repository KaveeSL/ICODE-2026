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
