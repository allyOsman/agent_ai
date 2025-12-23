import { motion } from "motion/react";

/**
 * Title Component
 * Reusable section title with animated heading and description
 * @param {Object} props - Component props
 * @param {string} props.title - Main title text
 * @param {string} props.desc - Description text
 */
export default function Title({ title, desc }) {
  return (
    <>
      {/* Animated main title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }} // Start animation state
        whileInView={{ opacity: 1, y: 0 }} // End animation state
        transition={{ duration: 0.6 }} // Animation duration
        viewport={{ once: true }} // Animate only once
        className="text-3xl sm:text-5xl font-medium"
      >
        {title}
      </motion.h2>

      {/* Animated description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }} // Start animation state
        whileInView={{ opacity: 1, y: 0 }} // End animation state
        transition={{ duration: 0.5, delay: 0.2 }} // Animation with delay
        viewport={{ once: true }} // Animate only once
        className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
      >
        {desc}
      </motion.p>
    </>
  );
}
