"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogForm = ({ editingBlog, setEditingBlog, setBlogs }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const blog = { title, content };

    if (editingBlog) {
      const res = await fetch(`https://mainul-portfolio.vercel.app/api/blogs/${editingBlog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(blog),
      });
      const updatedBlog = await res.json();
      setBlogs((prev:any) =>
        prev.map((b:any) => (b._id === updatedBlog._id ? updatedBlog : b))
      );
    } else {
      const res = await fetch("https://mainul-portfolio.vercel.app/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(blog),
      });
      const newBlog = await res.json();
      setBlogs((prev:any) => [...prev, newBlog]);
    }

    setEditingBlog(null);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="content">
          Content
        </label>
        <ReactQuill
          value={content}
          onChange={setContent}
          className="h-40 mb-4"
          //   @ts-ignore
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-10"
      >
        {editingBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
