"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-800 p-4"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Hi! I am Mainul</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="#experience" className="text-white hover:text-gray-400">
            Experience
          </Link>
          <Link href="#projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
          <Link href="#blogs" className="text-white hover:text-gray-400">
            Blogs
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="#experience" className="block text-white hover:text-gray-400">
            Experience
          </Link>
          <Link
            href="#projects"
            className="block text-white hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            href="#blogs"
            className="block text-white hover:text-gray-400"
          >
            Blogs
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
