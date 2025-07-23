
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleDarkAndLightModeButton = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;

    if (savedTheme === "dark") {
      html.classList.add("dark");
      setIsDark(true);
    } else {
      html.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? <FaMoon className=" text-gray-800" /> : <FaSun className="text-yellow-400" />}
    </button>
  );
};

export default ToggleDarkAndLightModeButton;
