import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";

export type SiteTheme = "light" | "dark";

const STORAGE_KEY = "icode-homepage-theme";

function readStoredTheme(): SiteTheme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}

type SiteThemeContextValue = {
  theme: SiteTheme;
  isDark: boolean;
  setTheme: (next: SiteTheme) => void;
  toggleTheme: () => void;
};

const SiteThemeContext = createContext<SiteThemeContextValue | null>(null);

export function SiteThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>(readStoredTheme);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next: SiteTheme) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <SiteThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </SiteThemeContext.Provider>
  );
}

export function useSiteTheme() {
  const ctx = useContext(SiteThemeContext);
  if (!ctx) {
    throw new Error("useSiteTheme must be used within SiteThemeProvider");
  }
  return ctx;
}
