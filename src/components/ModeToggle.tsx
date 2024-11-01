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
    <button
      className="relative h-20 w-10 rounded-full bg-gray-900/90 p-1 shadow-inner transition-colors duration-300 ease-in-out hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div
        className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-700 ${
          theme === "dark" ? "top-[calc(100%-2.25rem)]" : "top-1"
        }`}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-blue-300" />
        )}
      </div>
      <span className="sr-only">
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </span>
    </button>
  );
}
