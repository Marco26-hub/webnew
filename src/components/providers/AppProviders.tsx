"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dict, type Lang, type Theme } from "@/lib/i18n";

/* ------------------------------------------------------------
   Theme + language context. Initial values come from the server
   (read from cookies in the root layout) so there's no flash and
   no hydration mismatch. Switching updates state instantly,
   persists a cookie, and syncs the <html> element.
   ------------------------------------------------------------ */

type I18nValue = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
type ThemeValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

const I18nContext = createContext<I18nValue | null>(null);
const ThemeContext = createContext<ThemeValue | null>(null);

function persist(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value};path=/;max-age=31536000;samesite=lax`;
}

export function AppProviders({
  children,
  initialLang,
  initialTheme,
}: {
  children: ReactNode;
  initialLang: Lang;
  initialTheme: Theme;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    persist("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    persist("theme", next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("light", next === "light");
    }
  }, []);

  const toggle = useCallback(
    () => setTheme(theme === "light" ? "dark" : "light"),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
        {children}
      </I18nContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <AppProviders>");
  return ctx;
}

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <AppProviders>");
  return ctx;
}
