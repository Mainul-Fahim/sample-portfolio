"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sample blog data (replace with your actual data)
const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt:
      "Learn how to use React Hooks effectively for state management and side effects.",
    date: "July 15, 2024",
    link: "/blog/mastering-react-hooks",
  },
  {
    id: 2,
    title: "Building a RESTful API with Node.js and Express",
    excerpt:
      "Step-by-step guide to creating a RESTful API using Node.js and Express framework.",
    date: "June 28, 2024",
    link: "/blog/building-restful-api-node-express",
  },
  // Add more blog posts as needed
];
const Blog = () => {
  const fadeInAnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };


  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://mainul-portfolio.vercel.app/api/blogs'); // Replace with your API endpoint
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching Blog:', error);
        // Handle errors gracefully, e.g., display a message to the user
      }
    };

    fetchBlogs();
  }, []);
console.log(blogData)
  return (
    <section id="blogs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Blog</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={fadeInAnimationVariants}
            initial="hidden"
            animate="visible"
          >
            {blogData.map((post) => (
              <motion.div
              // @ts-ignore
                key={post.id}
                className="bg-white shadow-md rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* @ts-ignore */}
                <a href={post?.id} className="block mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {/* @ts-ignore */}
                    {post?.title}
                  </h3>
                  {/* @ts-ignore */}
                  <p className="text-gray-600">{post?.content?.substring(0,100)}</p>
                </a>
                {/* @ts-ignore */}
                <p className="text-gray-500 text-sm">{post?.createdAt}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
