import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import type { SiteTheme } from "../context/SiteThemeProvider";

type HomepageThemeToggleProps = {
  theme: SiteTheme;
  onToggle: () => void;
  className?: string;
};

export function HomepageThemeToggle({
  theme,
  onToggle,
  className = ""
}: HomepageThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`homepage-theme-toggle group inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-uom-gold focus-visible:ring-offset-2 ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark neon theme"}
      title={isDark ? "Light mode" : "Dark neon mode"}
    >
      {isDark ? (
        <SunIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <MoonIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-12" />
      )}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
