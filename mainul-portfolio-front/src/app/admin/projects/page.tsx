"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      fetchProjects(token);
    }
  }, []);

  const fetchProjects = async (token: any) => {
    const res = await fetch("https://mainul-portfolio.vercel.app/api/projects", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await res.json();
    setProjects(data);
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
  };

  const handleDelete = async (id: any) => {
    const token = localStorage.getItem("token");
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    {/* @ts-ignore */}
    setProjects(projects.filter((project) => project._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>
      <ProjectForm
        editingProject={editingProject}
        setEditingProject={setEditingProject}
        setProjects={setProjects}
      />
      <div className="mt-6">
        {projects?.map((project) => (
          // @ts-ignore
          <div key={project._id} className="mb-4 p-4 border rounded">
            {/* @ts-ignore */}
            <h3 className="text-xl font-bold">{project.title}</h3>
            {/* @ts-ignore */}
            <p>{project.description}</p>
            <button
              onClick={() => handleEdit(project)}
              className="mr-2 mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
            // @ts-ignore
              onClick={() => handleDelete(project._id)}
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

export default ProjectsAdmin;
