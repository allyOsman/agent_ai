import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

/**
 * Main App Component
 * Serves as the root component of the application
 * Manages global state and custom cursor functionality
 */
function App() {
  // Theme state management with localStorage persistence
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Refs for custom cursor elements
  const dotRef = useRef(null); // Small cursor dot
  const outlineRef = useRef(null); // Larger cursor outline

  // Refs for cursor position tracking with smooth interpolation
  const mouse = useRef({ x: 0, y: 0 }); // Real mouse position
  const position = useRef({ x: 0, y: 0 }); // Smooth interpolated position

  /**
   * Custom Cursor Animation Effect
   * Creates smooth cursor with dot and outline that follows mouse movement
   */
  useEffect(() => {
    /**
     * Mouse Move Event Handler
     * Updates real mouse position coordinates
     */
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    // Attach mouse move listener
    document.addEventListener("mousemove", handleMouseMove);

    /**
     * Animation Loop
     * Uses requestAnimationFrame for smooth 60fps animation
     * Interpolates cursor position for smooth trailing effect
     */
    const animate = () => {
      // Smooth interpolation using lerp (linear interpolation) algorithm
      // 0.1 = smoothing factor (lower = smoother but more lag)
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      // Update cursor element positions if they exist
      if (dotRef.current && outlineRef.current) {
        // Dot follows exact mouse position (6px offset for centering)
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`;

        // Outline follows smoothed interpolated position (20px offset for centering)
        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 20
        }px, ${position.current.y - 20}px, 0)`;
      }

      // Continue animation loop
      requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();

    // Cleanup function - removes event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    <>
      {/* Main container with dark mode support */}
      <div className="relative dark:bg-black min-h-screen">
        {/* Toast notifications container */}
        <Toaster />

        {/* Application components in order of appearance */}
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer theme={theme} />

        {/* Custom cursor outline (larger ring) */}
        <div
          className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
          ref={outlineRef}
          style={{ transition: "transform 0.1s ease-out" }} // Smooth transition for outline
        ></div>

        {/* Custom cursor dot (small center dot) */}
        <div
          className="fixed top-0 left-0 h-3 w-3 rounded-full border bg-primary pointer-events-none z-[9999]"
          ref={dotRef}
          // No transition on dot for immediate response
        ></div>
      </div>
    </>
  );
}

export default App;
