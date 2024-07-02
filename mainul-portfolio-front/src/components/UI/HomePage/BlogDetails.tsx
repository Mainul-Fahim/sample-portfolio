import { motion } from "framer-motion";
import Image from "next/image";

const BlogDetails = () => {
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

  // Example data for blog post
  const blogPost = {
    title: "How to Build a Stunning Blog Details Page",
    date: "July 1, 2024",
    author: "Your Name",
    image: "/images/blog-post-image.jpg",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla tristique odio, ac fermentum metus tempor eget. Integer at magna nunc. Morbi quis ultrices nisi. Cras aliquet scelerisque dui id eleifend.</p>
      <p>Proin tincidunt lacus nec nulla suscipit, ut viverra felis gravida. Fusce maximus ante a dolor fermentum, id venenatis nunc sollicitudin. Nulla facilisi. Donec sit amet velit a libero aliquet scelerisque.</p>
      <p>Quisque rutrum turpis at nunc congue, et iaculis orci facilisis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus et urna odio.</p>
    `,
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          variants={fadeInAnimationVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full h-80">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blogPost.title}
            </h2>
            <p className="text-gray-600 mb-2">
              {blogPost.date} by {blogPost.author}
            </p>
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            {/* Optional: Add comments section or related posts */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
