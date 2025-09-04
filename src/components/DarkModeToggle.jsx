import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="ml-4 p-2 rounded bg-gray-800 dark:bg-yellow-400 text-white dark:text-black"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;
