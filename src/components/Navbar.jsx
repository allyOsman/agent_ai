import { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react"; // Note: motion should be imported

/**
 * Navigation Bar Component
 * Responsive navbar with mobile sidebar and theme toggle
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.setTheme - Function to update theme
 */
export default function Navbar({ theme, setTheme }) {
  // State for mobile sidebar visibility
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    // Animated navbar with fade-in and slide-down effect
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation settings
      className="flex justify-between items-center 
      px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 
      z-20 backdrop-blur-xl font-medium bg-white/50 
      dark:bg-gray-900/70"
    >
      {/* Logo - changes based on theme */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Company Logo"
        className="w-32 sm:w-40"
      />

      {/* Navigation Links Container */}
      {/* Responsive: hidden on mobile when sidebar is closed */}
      <div
        className={`text-gray-700 dark:text-white 
        sm:text-sm ${
          !sideBarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed 
        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
        max-sm:flex-col max-sm:bg-primary max-sm:text-white 
        max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        {/* Close button for mobile sidebar */}
        <img
          src={assets.close_icon}
          alt="Close Menu"
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSideBarOpen(false)}
        />

        {/* Navigation Links */}
        <a
          href="#"
          className="sm:hover:border-b hover:border-transparent transition-colors"
          onClick={() => setSideBarOpen(false)}
        >
          Home
        </a>
        <a
          href="#services"
          className="sm:hover:border-b hover:border-transparent transition-colors"
          onClick={() => setSideBarOpen(false)}
        >
          Services
        </a>
        <a
          href="#our-work"
          className="sm:hover:border-b hover:border-transparent transition-colors"
          onClick={() => setSideBarOpen(false)}
        >
          Our Work
        </a>
        <a
          href="#contact-us"
          className="sm:hover:border-b hover:border-transparent transition-colors"
          onClick={() => setSideBarOpen(false)}
        >
          Contact Us
        </a>
      </div>

      {/* Right side actions (menu button and theme toggle) */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile menu button */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Open Menu"
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Desktop Connect button */}
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 
          bg-primary text-white px-6 py-2 rounded-full 
          cursor-pointer hover:scale-105 transition-all duration-200"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>

        {/* Theme toggle button */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      </div>
    </motion.div>
  );
}
