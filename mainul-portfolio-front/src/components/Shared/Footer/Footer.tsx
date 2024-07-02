"use client";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">.........</h1>
          </div>
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
