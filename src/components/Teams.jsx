import { teamData } from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

/**
 * Teams Component
 * Displays team members with hover effects and animations
 */
export default function Teams() {
  return (
    // Container with team members
    <motion.div
      initial="hidden" // Initial animation state
      whileInView="visible" // State when in viewport
      viewport={{ once: true }} // Animate only once
      id="teams" // Fixed ID from "our-work" to "teams"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      {/* Section title */}
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand's success."
      />

      {/* Team members grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start position
            whileInView={{ opacity: 1, y: 0 }} // End position
            transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered animation
            viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl 
            border border-gray-100 dark:border-gray-700 bg-white 
            dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 
            hover:scale-105 transition-all duration-400 hover:shadow-2xl group"
          >
            {/* Team member avatar */}
            <img
              src={team.image}
              alt={team.name}
              className="w-12 h-12 rounded-full group-hover:ring-2 group-hover:ring-primary"
            />

            {/* Team member info */}
            <div className="flex-1">
              <h3 className="font-bold text-sm group-hover:text-primary transition-colors">
                {team.name}
              </h3>
              <p className="text-xs opacity-60 group-hover:opacity-80 transition-opacity">
                {team.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
