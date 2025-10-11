import assets from "../assets/assets";
import ServicesCard from "./ServicesCard";
import Title from "./Title";
import { motion } from "motion/react";

export default function Services() {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you to build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 
      sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 
      dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help ?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
