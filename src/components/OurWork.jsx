import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

/**
 * OurWork Component
 * Displays portfolio/project showcase with animated cards
 */
export default function OurWork() {
  // Portfolio data array
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description: "We help execute your plan and deliver results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotions",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    // Container with staggered children animation
    <motion.div
      initial="hidden" // Initial animation state
      whileInView="visible" // State when in viewport
      transition={{ staggerChildren: 0.2 }} // Stagger child animations
      viewport={{ once: true }} // Animate only once
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 
      sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 
      dark:text-white"
    >
      {/* Section title component */}
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      {/* Portfolio grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Start position
            whileInView={{ opacity: 1, y: 0 }} // End position
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay based on index
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer group"
          >
            {/* Project image */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl group-hover:shadow-lg transition-shadow"
            />
            {/* Project title */}
            <h3 className="mt-3 mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
              {work.title}
            </h3>
            {/* Project description */}
            <p className="text-sm opacity-60 w-5/6 group-hover:opacity-80 transition-opacity">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
