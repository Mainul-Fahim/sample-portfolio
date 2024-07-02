"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SkillForm from "@/components/SkillForm";

const SkillsAdmin = () => {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      fetchSkills(token);
    }
  }, []);

  const fetchSkills = async (token:any) => {
    const res = await fetch("https://mainul-portfolio.vercel.app/api/skills", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await res.json();
    setSkills(data);
  };

  const handleEdit = (skill:any) => {
    setEditingSkill(skill);
  };

  const handleDelete = async (id:any) => {
    const token = localStorage.getItem("token");
    await fetch(`https://mainul-portfolio.vercel.app/api/skills/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    });
    {/* @ts-ignore */}
    setSkills(skills.filter((skill) => skill._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>
      <SkillForm
        editingSkill={editingSkill}
        setEditingSkill={setEditingSkill}
        setSkills={setSkills}
      />
      <div className="mt-6">
        {skills.map((skill) => (
          // @ts-ignore
          <div key={skill._id} className="mb-4 p-4 border rounded">
            {/* @ts-ignore */}
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <button
              onClick={() => handleEdit(skill)}
              className="mr-2 mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
            // @ts-ignore
              onClick={() => handleDelete(skill._id)}
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

export default SkillsAdmin;
