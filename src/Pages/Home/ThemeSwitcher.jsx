import { useEffect, useState } from "react";

const THEMES = [
  { id: "dark", label: "Dark", swatch: "#8b93ff" },
  { id: "light", label: "Light", swatch: "#4f46e5" },
  { id: "midnight", label: "Midnight", swatch: "#38bdf8" },
  { id: "emerald", label: "Emerald", swatch: "#059669" },
];

const STORAGE_KEY = "portfolio-theme";

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES.some((t) => t.id === saved)) return saved;
  } catch {
    /* ignore */
  }
  return "dark";
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <div className="theme--switcher" role="group" aria-label="Color theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`theme--dot ${theme === t.id ? "active" : ""}`}
          style={{ background: t.swatch }}
          onClick={() => setTheme(t.id)}
          title={`${t.label} theme`}
          aria-label={`${t.label} theme`}
          aria-pressed={theme === t.id}
        />
      ))}
    </div>
  );
}
