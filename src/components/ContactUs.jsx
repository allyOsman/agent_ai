import { useState } from "react";
import assets from "../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";

/**
 * ContactUs Component
 * Contact form section with form submission to Web3Forms
 */
export default function ContactUs() {
  // State for form submission loading state (optional enhancement)
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Form Submission Handler
   * Submits form data to Web3Forms API
   * @param {FormEvent} event - Form submission event
   */
  async function handleOnSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set loading state

    // Create FormData object from form
    const formData = new FormData(event.target);

    // Add Web3Forms access key
    // Note: Consider moving API keys to environment variables
    // formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("access_key", "9aef4805-112d-4a20-ae84-875cd2104806");

    try {
      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Parse response
      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset(); // Clear form on success
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  }

  return (
    <motion.div
      initial="hidden" // Initial animation state
      whileInView="visible" // State when in viewport
      transition={{ staggerChildren: 0.2 }} // Stagger child animations
      viewport={{ once: true }} // Animate only once
      id="contact-us"
      className="flex flex-col items-center gap-7 
      px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 
      text-gray-700 dark:text-white"
    >
      {/* Section title */}
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      {/* Contact form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }} // Start animation
        whileInView={{ opacity: 1, y: 0 }} // End animation
        transition={{ duration: 0.5, delay: 0.4 }} // Animation timing
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={handleOnSubmit}
      >
        {/* Name input field */}
        <div>
          <label className="mb-2 text-sm font-medium block">Your name</label>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-primary transition-colors">
            <img src={assets.person_icon} alt="" aria-hidden="true" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              name="name"
              required
              minLength={2}
              maxLength={100}
            />
          </div>
        </div>

        {/* Email input field */}
        <div>
          <label className="mb-2 text-sm font-medium block">Email Id</label>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-primary transition-colors">
            <img src={assets.email_icon} alt="" aria-hidden="true" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              name="email"
              required
            />
          </div>
        </div>

        {/* Message textarea (full width) */}
        <div className="sm:col-span-2">
          <label className="mb-2 text-sm font-medium block">Message</label>
          <textarea
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary transition-colors bg-transparent"
            name="message"
            required
            minLength={10}
            maxLength={1000}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 
          rounded-full cursor-pointer hover:scale-105 transition-all 
          ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Submitting..." : "Submit Form"}
          {!isSubmitting && (
            <img src={assets.arrow_icon} className="w-4" alt="Submit" />
          )}
        </button>
      </motion.form>
    </motion.div>
  );
}
