import type { ReactNode } from "react";
import { useSiteTheme } from "../context/SiteThemeProvider";

type SitePageShellProps = {
  children: ReactNode;
  /** @deprecated Same as default — kept for existing call sites. */
  variant?: "simple" | "glass";
  className?: string;
  id?: string;
};

export function SitePageShell({
  children,
  className = "",
  id
}: SitePageShellProps) {
  const { isDark } = useSiteTheme();

  return (
    <div
      id={id ?? "top"}
      className={`min-h-screen homepage-ruler-texture flex flex-col transition-colors duration-500 ${
        isDark
          ? "homepage-dark bg-[#1c1c20] text-neutral-100"
          : "bg-neutral-50 text-neutral-900"
      } ${className}`}
    >
      {children}
    </div>
  );
}
