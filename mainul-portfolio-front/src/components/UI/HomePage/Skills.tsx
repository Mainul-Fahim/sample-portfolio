"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
 
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://mainul-portfolio.vercel.app/api/skills'); // Replace with your API endpoint
        const data = await response.json();
        setSkillsData(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Handle errors gracefully, e.g., display a message to the user
      }
    };

    fetchSkills();
  }, []);
  
 
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2 className="mt-12 text-4xl font-bold text-center mb-12">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border border-gray-300 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 cursor-pointer"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* @ts-ignore */}
            {skill?.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
