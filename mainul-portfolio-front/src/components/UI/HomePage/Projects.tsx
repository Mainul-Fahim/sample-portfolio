"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


const Projects = () => {
  
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://mainul-portfolio.vercel.app/api/projects'); // Replace with your API endpoint
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Handle errors gracefully, e.g., display a message to the user
      }
    };

    fetchProjects();
  }, []);
  
  
  return (
    <section id="projects" className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <motion.div
            // @ts-ignore
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-60">
                <Image
                // @ts-ignore
                  src={project.imageUrl}
                  // @ts-ignore
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {/* @ts-ignore */}
                  {project.title}
                </h3>
                {/* @ts-ignore */}
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                  // @ts-ignore
                    href={project.liveLink}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                  // @ts-ignore
                    href={project.gitLink}
                    className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
