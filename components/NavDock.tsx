"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Work", icon: Code },
];

export default function NavDock() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = saved ? saved === "dark" : systemDark;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg px-6 py-4 rounded-full flex items-center gap-4 shadow-2xl border border-zinc-200 dark:border-zinc-800">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} aria-label={label} title={label}>
          <Icon
            className={`w-6 h-6 cursor-pointer transition-colors ${
              pathname === href ? "text-black dark:text-white" : "text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          />
        </Link>
      ))}
      <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700" />
      <a href="https://github.com/1LH4MDC" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GithubIcon className="w-6 h-6 text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
      </a>
      <a href="https://www.linkedin.com/in/ilhamdwicahya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedinIcon className="w-6 h-6 text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
      </a>
      <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700" />
      <button onClick={toggleTheme} aria-label="Ganti tema">
        {isDark ? (
          <Sun className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
        ) : (
          <Moon className="w-6 h-6 text-zinc-400 hover:text-black cursor-pointer transition-colors" />
        )}
      </button>
    </div>
  );
}