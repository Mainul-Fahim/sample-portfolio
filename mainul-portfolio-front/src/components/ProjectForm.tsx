import { useState, useEffect } from "react";

const ProjectForm = ({
  editingProject,
  setEditingProject,
  setProjects,
}: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [gitLink, setGitLink] = useState("");

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setDescription(editingProject.description);
      setImageUrl(editingProject.imageUrl);
      setLiveLink(editingProject.liveLink);
      setGitLink(editingProject.gitLink);
    }
  }, [editingProject]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const project = { title, description, imageUrl, liveLink, gitLink };

    if (editingProject) {
      const res = await fetch(`https://mainul-portfolio.vercel.app/api/projects/${editingProject._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(project),
      });
      const updatedProject = await res.json();
      setProjects((prev: any) =>
        prev.map((proj: any) =>
          proj._id === updatedProject._id ? updatedProject : proj
        )
      );
    } else {
      const res = await fetch("https://mainul-portfolio.vercel.app/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(project),
      });
      const newProject = await res.json();
      setProjects((prev: any) => [...prev, newProject]);
    }

    setEditingProject(null);
    setTitle("");
    setDescription("");
    setImageUrl("");
    setLiveLink("");
    setGitLink("");
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
        <label className="block text-gray-700 mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="imageUrl">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="liveLink">
          Live Link
        </label>
        <input
          type="text"
          id="liveLink"
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="gitLink">
          GitHub Link
        </label>
        <input
          type="text"
          id="gitLink"
          value={gitLink}
          onChange={(e) => setGitLink(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingProject ? "Update Project" : "Add Project"}
      </button>
    </form>
  );
};

export default ProjectForm;
