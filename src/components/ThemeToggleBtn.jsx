import { useEffect } from "react";
import assets from "../assets/assets";

/**
 * Theme Toggle Button Component
 * Toggles between light and dark modes with system preference detection
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme
 * @param {Function} props.setTheme - Function to update theme
 */
export default function ThemeToggleBtn({ theme, setTheme }) {
  /**
   * Effect: Detect system theme preference on component mount
   * Runs once when component mounts
   */
  useEffect(() => {
    /**
     * Detect system color scheme preference
     * @returns {boolean} True if system prefers dark mode
     */
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set theme: use existing theme or system preference
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []); // Empty dependency array = runs once on mount

  /**
   * Effect: Apply theme changes to document and localStorage
   * Runs whenever theme changes
   */
  useEffect(() => {
    // Toggle dark class on document root
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Persist theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Dependency: runs when theme changes

  return (
    // Theme toggle button container
    <>
      <button
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
      >
        {theme === "dark" ? (
          // Sun icon for dark mode (click to switch to light)
          <img
            src={assets.sun_icon}
            alt="Switch to light mode"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full hover:scale-110 transition-transform"
            onClick={() => setTheme("light")}
          />
        ) : (
          // Moon icon for light mode (click to switch to dark)
          <img
            src={assets.moon_icon}
            alt="Switch to dark mode"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full hover:scale-110 transition-transform"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </>
  );
}
