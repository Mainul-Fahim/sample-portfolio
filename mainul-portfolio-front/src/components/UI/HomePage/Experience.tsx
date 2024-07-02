"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Experience = () => {
  
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('https://mainul-portfolio.vercel.app/api/experiences'); // Replace with your API endpoint
        const data = await response.json();
        setExperienceData(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
        // Handle errors gracefully, e.g., display a message to the user
      }
    };

    fetchExperiences();
  }, []);
  
  
  return (
    <section id="experience" className="py-12 mt-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Experience
        </h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-l-4 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <div className="order-1 w-5/12"></div>
              <motion.div
                className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </motion.div>
              <motion.div
                className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <h3 className="mb-3 font-bold text-white text-xl">
                  {/* @ts-ignore */}
                  {item.title}
                </h3>
                <p className="mb-1 text-sm font-semibold text-gray-400">
                  {/* @ts-ignore */}
                  {item.company}
                </p>
                <p className="mb-2 text-sm text-gray-400">Jan 2023 - Present</p>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                  {/* @ts-ignore */}
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
