"use client";
import { motion } from "framer-motion";

const About = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineAnimation = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="about" className="mt-12 py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            I am a passionate and detail-oriented software engineer with over 2
            years of experience. My journey in programming began during my
            studies at [Your University], where I earned my degree in Computer
            Science. Specializing in frontend development with React.js and
            backend with Node.js and Express.js, I have contributed to the
            creation of innovative solutions, including a SaaS platform and a
            personal development social media app. I thrive in collaborative
            environments, where creativity and teamwork drive success.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            variants={lineAnimation}
            initial="hidden"
            animate="visible"
          >
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
