import { useState, useEffect } from "react";

const ExperienceForm = ({
  editingExperience,
  setEditingExperience,
  setExperiences,
}: any) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingExperience) {
      setPosition(editingExperience.position);
      setCompany(editingExperience.company);
      setDescription(editingExperience.description);
    }
  }, [editingExperience]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const experience = { position, company, description };

    if (editingExperience) {
      const res = await fetch(`https://mainul-portfolio.vercel.app/api/experiences/${editingExperience._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(experience),
      });
      const updatedExperience = await res.json();
      setExperiences((prev:any) =>
        prev.map((exp:any) =>
          exp._id === updatedExperience._id ? updatedExperience : exp
        )
      );
    } else {
      const res = await fetch("https://mainul-portfolio.vercel.app/api/experiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(experience),
      });
      const newExperience = await res.json();
      setExperiences((prev:any) => [...prev, newExperience]);
    }

    setEditingExperience(null);
    setPosition("");
    setCompany("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="position">
          Position
        </label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="company">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingExperience ? "Update Experience" : "Add Experience"}
      </button>
    </form>
  );
};

export default ExperienceForm;
