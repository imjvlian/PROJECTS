import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "dark");
    }
  }, [darkMode]);

  return (
    <button
      className=" flex items-center px-4 py-2 mb-5 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-white shadow-md"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? <LuSun /> : <LuMoon />}
    </button>
  );
};

export default DarkModeToggle