"use client";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="contact" className="mt-12 bg-gradient-to-b from-gray-900 to-black py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Contact Me
          </h2>
          <motion.form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInAnimationVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
          >
            <motion.input
              type="text"
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg px-6 py-4 text-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your Name"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
              required
            />
            <motion.input
              type="email"
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg px-6 py-4 text-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your Email"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
              required
            />
            <motion.textarea
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg col-span-full px-6 py-4 text-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your Message"
              rows={5}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.05 }}
              required
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 text-white py-4 rounded-lg text-lg transition duration-300 col-span-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
