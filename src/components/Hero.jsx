import assets from "../assets/assets";
import { motion } from "motion/react";

/**
 * Hero Section Component
 * Main landing section with animated elements and call-to-action
 */
export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 
      sm:px-12 lg:px-24 xl:px-40 text-center w-full
       overflow-hidden text-gray-700 dark:text-white"
    >
      {/* Animated trusted badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position
        transition={{ duration: 0.5, delay: 0.7 }} // Animation timing
        viewport={{ once: true }} // Only animate once when in view
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img src={assets.group_profile} alt="Trusted users" className="w-20" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </motion.div>

      {/* Main headline with gradient text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      {/* Supporting description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      {/* Hero image with background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={assets.hero_img}
          alt="Digital impact visualization"
          className="w-full max-w-6xl"
        />
        {/* Background decorative element (hidden in dark mode) */}
        <img
          src={assets.bgImage1}
          alt="Background decoration"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-10 dark:hidden"
        />
      </motion.div>
    </div>
  );
}
