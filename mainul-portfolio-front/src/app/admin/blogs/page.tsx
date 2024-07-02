"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BlogForm from "@/components/BlogForm";

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      fetchBlogs(token);
    }
  }, []);

  const fetchBlogs = async (token: any) => {
    const res = await fetch("https://mainul-portfolio.vercel.app/api/blogs", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await res.json();
    setBlogs(data);
  };

  const handleEdit = (blog:any) => {
    setEditingBlog(blog);
  };

  const handleDelete = async (id:any) => {
    const token = localStorage.getItem("token");
    await fetch(`https://mainul-portfolio.vercel.app/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    });
    // @ts-ignore
    setBlogs(blogs.filter((blog) => blog._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>
      <BlogForm
        editingBlog={editingBlog}
        setEditingBlog={setEditingBlog}
        setBlogs={setBlogs}
      />
      <div className="mt-6">
        {blogs.map((blog) => (
          // @ts-ignore
          <div key={blog._id} className="mb-4 p-4 border rounded">
            {/* @ts-ignore */}
            <h3 className="text-xl font-bold">{blog.title}</h3>
            {/* @ts-ignore */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <button
              onClick={() => handleEdit(blog)}
              className="mr-2 mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
            // @ts-ignore
              onClick={() => handleDelete(blog._id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsAdmin;
