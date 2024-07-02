import { useState, useEffect } from "react";

const SkillForm = ({ editingSkill, setEditingSkill, setSkills }: any) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editingSkill) {
      setName(editingSkill.name);
    }
  }, [editingSkill]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const skill = { name };

    if (editingSkill) {
      const res = await fetch(`https://mainul-portfolio.vercel.app/api/skills/${editingSkill._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(skill),
      });
      const updatedSkill = await res.json();
      setSkills((prev:any) =>
        prev.map((s:any) => (s._id === updatedSkill._id ? updatedSkill : s))
      );
    } else {
      const res = await fetch("https://mainul-portfolio.vercel.app/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(skill),
      });
      const newSkill = await res.json();
      setSkills((prev:any) => [...prev, newSkill]);
    }

    setEditingSkill(null);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingSkill ? "Update Skill" : "Add Skill"}
      </button>
    </form>
  );
};

export default SkillForm;
