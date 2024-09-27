import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="background-card relative h-14 w-24 cursor-pointer rounded-full border-white"
      onClick={toggleTheme}
    >
      <div
        className={`absolute h-12 w-12 rounded-full bg-black transition-transform duration-300 ease-in-out dark:bg-black ${
          theme === "dark" ? "translate-x-10" : "translate-x-0"
        }`}
      >
        <Sun
          fill="yellow"
          className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 brightness-75 transition-opacity duration-300 ${
            theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <Moon
          fill="yellow"
          className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 brightness-75 transition-opacity duration-300 ${
            theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
